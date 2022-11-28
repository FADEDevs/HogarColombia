"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstrategiaAsesor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = tslib_1.__importDefault(require("parse-bearer-token"));
const services_1 = require("../services");
var respuesta = false;
let EstrategiaAsesor = class EstrategiaAsesor {
    constructor(//Constructor para inicializar el servicio de autenticacion
    servicioAutenticacion) {
        this.servicioAutenticacion = servicioAutenticacion;
        this.name = "asesor";
    }
    async authenticate(request) {
        let token = (0, parse_bearer_token_1.default)(request); //Extraemos el token cuando la persona hace la solicitud de la página
        if (token) {
            let datos = this.servicioAutenticacion.ValidarToken(token);
            if (datos) {
                if (datos.data.rol == 'asesor') {
                    respuesta = true;
                    if (respuesta) {
                        let perfil = Object.assign({
                            nombre: datos.data.nombre
                        });
                        return perfil;
                    }
                    else {
                        throw new rest_1.HttpErrors[401]("Usted no es un Asesor.");
                    }
                }
                else {
                    throw new rest_1.HttpErrors[401]("Usted no tiene permisos de acceso a este recurso.");
                }
            }
            else {
                throw new rest_1.HttpErrors[401]("El token no es válido.");
            }
        }
        else {
            throw new rest_1.HttpErrors[401]("No hay un token para esta solicitud.");
        }
    }
};
EstrategiaAsesor = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.service)(services_1.AutenticacionService)),
    tslib_1.__metadata("design:paramtypes", [services_1.AutenticacionService])
], EstrategiaAsesor);
exports.EstrategiaAsesor = EstrategiaAsesor;
//# sourceMappingURL=estrategiaAsesor.js.map