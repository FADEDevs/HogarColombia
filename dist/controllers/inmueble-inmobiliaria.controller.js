"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleInmobiliariaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InmuebleInmobiliariaController = class InmuebleInmobiliariaController {
    constructor(inmuebleRepository) {
        this.inmuebleRepository = inmuebleRepository;
    }
    async getInmobiliaria(id) {
        return this.inmuebleRepository.inmobiliaria(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/inmuebles/{id}/inmobiliaria', {
        responses: {
            '200': {
                description: 'Inmobiliaria belonging to Inmueble',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleInmobiliariaController.prototype, "getInmobiliaria", null);
InmuebleInmobiliariaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.InmuebleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.InmuebleRepository])
], InmuebleInmobiliariaController);
exports.InmuebleInmobiliariaController = InmuebleInmobiliariaController;
//# sourceMappingURL=inmueble-inmobiliaria.controller.js.map