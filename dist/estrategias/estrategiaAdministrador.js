"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstrategiaAdministrador = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = tslib_1.__importDefault(require("parse-bearer-token"));
const services_1 = require("../services");
var respuesta = false;
let EstrategiaAdministrador = class EstrategiaAdministrador {
    constructor(servicioAutenticacion) {
        this.servicioAutenticacion = servicioAutenticacion;
        this.name = 'admin';
    }
    async authenticate(request) {
        let token = (0, parse_bearer_token_1.default)(request);
        if (token) {
            let datos = this.servicioAutenticacion.ValidarToken(token);
            if (datos) {
                if (datos.data.rol == "administrador") {
                    respuesta = true;
                    if (respuesta) {
                        let perfil = Object.assign({
                            nombre: datos.data.nombre
                        });
                        return perfil;
                    }
                    else {
                        throw new rest_1.HttpErrors[401]("usted no es un Administrador");
                    }
                }
                else {
                    throw new rest_1.HttpErrors[401]("usted es un usuario que no tiene acceso a este recurso");
                }
            }
            else {
                throw new rest_1.HttpErrors[401]("El token incluido no es valido");
            }
        }
        else {
            throw new rest_1.HttpErrors[401]("No se ha incluido un token en la solicitud");
        }
    }
};
EstrategiaAdministrador = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.service)(services_1.AutenticacionService)),
    tslib_1.__metadata("design:paramtypes", [services_1.AutenticacionService])
], EstrategiaAdministrador);
exports.EstrategiaAdministrador = EstrategiaAdministrador;
//# sourceMappingURL=estrategiaAdministrador.js.map