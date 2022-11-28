"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoDeudorSolicitudController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CoDeudorSolicitudController = class CoDeudorSolicitudController {
    constructor(coDeudorRepository) {
        this.coDeudorRepository = coDeudorRepository;
    }
    async getSolicitud(id) {
        return this.coDeudorRepository.solicitud(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/co-deudors/{id}/solicitud', {
        responses: {
            '200': {
                description: 'Solicitud belonging to CoDeudor',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CoDeudorSolicitudController.prototype, "getSolicitud", null);
CoDeudorSolicitudController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CoDeudorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CoDeudorRepository])
], CoDeudorSolicitudController);
exports.CoDeudorSolicitudController = CoDeudorSolicitudController;
//# sourceMappingURL=co-deudor-solicitud.controller.js.map