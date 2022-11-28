"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudInmuebleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudInmuebleController = class SolicitudInmuebleController {
    constructor(solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }
    async getInmueble(id) {
        return this.solicitudRepository.inmueble(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solicituds/{id}/inmueble', {
        responses: {
            '200': {
                description: 'Inmueble belonging to Solicitud',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolicitudInmuebleController.prototype, "getInmueble", null);
SolicitudInmuebleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolicitudRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolicitudRepository])
], SolicitudInmuebleController);
exports.SolicitudInmuebleController = SolicitudInmuebleController;
//# sourceMappingURL=solicitud-inmueble.controller.js.map