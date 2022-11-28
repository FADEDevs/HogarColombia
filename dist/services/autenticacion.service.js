"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const Keys_1 = require("../configuracion/Keys");
const usuario_repository_1 = require("../repositories/usuario.repository");
const generador = require('generate-password');
const cryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");
let AutenticacionService = class AutenticacionService {
    constructor(repositoryUser) {
        this.repositoryUser = repositoryUser;
    }
    GenerarPassword() {
        let password = generador.generate({
            length: 8,
            numbers: true //Indicamos que la contraseña se genere con números
        });
        return password;
    }
    EncriptarPassword(password) {
        let passwordE = cryptoJS.MD5(password); //Encriptamos la contraseña ingresada cómo argumento
        return passwordE;
    }
    //Metodo para identificarUsuario
    IdentificarUsuario(credenciales) {
        try {
            let user = this.repositoryUser.findOne({
                where: {
                    correo: credenciales.email,
                    contrasena: credenciales.password
                }
            });
            if (user) {
                return user; //Si User es verdadero (encontro el usuario) entonces retornara los datos
            }
            else {
                return false;
            }
        }
        catch (_a) {
            return false;
        }
    }
    //Generar el token
    GenerarToken(usuario) {
        let token = jwt.sign({
            data: {
                id: usuario.id,
                correo: usuario.correo,
                nombre: usuario.nombres + " " + usuario.apellidos,
                rol: usuario.rol
            }
        }, 
        //Llave para encriptar el dato
        Keys_1.Keys.llaveJwt);
        return token;
    }
    //Validar el token
    ValidarToken(token) {
        try {
            let datos = jwt.verify(token, Keys_1.Keys.llaveJwt);
            return datos;
        }
        catch (_a) {
            return false;
        }
    }
};
AutenticacionService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, (0, repository_1.repository)(usuario_repository_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [usuario_repository_1.UsuarioRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map