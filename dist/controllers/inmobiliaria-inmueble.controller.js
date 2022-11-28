"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmobiliariaInmuebleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InmobiliariaInmuebleController = class InmobiliariaInmuebleController {
    constructor(inmobiliariaRepository) {
        this.inmobiliariaRepository = inmobiliariaRepository;
    }
    async find(id, filter) {
        return this.inmobiliariaRepository.inmuebles(id).find(filter);
    }
    async create(id, inmueble) {
        return this.inmobiliariaRepository.inmuebles(id).create(inmueble);
    }
    async patch(id, inmueble, where) {
        return this.inmobiliariaRepository.inmuebles(id).patch(inmueble, where);
    }
    async delete(id, where) {
        return this.inmobiliariaRepository.inmuebles(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/inmobiliarias/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Array of Inmobiliaria has many Inmueble',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmobiliariaInmuebleController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/inmobiliarias/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Inmobiliaria model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, {
                    title: 'NewInmuebleInInmobiliaria',
                    exclude: ['id'],
                    optional: ['inmobiliariaId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmobiliariaInmuebleController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/inmobiliarias/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Inmobiliaria.Inmueble PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmueble))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmobiliariaInmuebleController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/inmobiliarias/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Inmobiliaria.Inmueble DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmueble))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmobiliariaInmuebleController.prototype, "delete", null);
InmobiliariaInmuebleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.InmobiliariaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.InmobiliariaRepository])
], InmobiliariaInmuebleController);
exports.InmobiliariaInmuebleController = InmobiliariaInmuebleController;
//# sourceMappingURL=inmobiliaria-inmueble.controller.js.map