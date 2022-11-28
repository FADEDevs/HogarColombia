"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleAsesorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InmuebleAsesorController = class InmuebleAsesorController {
    constructor(inmuebleRepository) {
        this.inmuebleRepository = inmuebleRepository;
    }
    async getAsesor(id) {
        return this.inmuebleRepository.asesor(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/inmuebles/{id}/asesor', {
        responses: {
            '200': {
                description: 'Asesor belonging to Inmueble',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Asesor) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleAsesorController.prototype, "getAsesor", null);
InmuebleAsesorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.InmuebleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.InmuebleRepository])
], InmuebleAsesorController);
exports.InmuebleAsesorController = InmuebleAsesorController;
//# sourceMappingURL=inmueble-asesor.controller.js.map