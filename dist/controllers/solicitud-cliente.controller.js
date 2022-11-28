"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudClienteController = class SolicitudClienteController {
    constructor(solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }
    async getCliente(id) {
        return this.solicitudRepository.cliente(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solicituds/{id}/cliente', {
        responses: {
            '200': {
                description: 'Cliente belonging to Solicitud',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Cliente) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolicitudClienteController.prototype, "getCliente", null);
SolicitudClienteController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolicitudRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolicitudRepository])
], SolicitudClienteController);
exports.SolicitudClienteController = SolicitudClienteController;
//# sourceMappingURL=solicitud-cliente.controller.js.map