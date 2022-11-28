"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorInmuebleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AsesorInmuebleController = class AsesorInmuebleController {
    constructor(asesorRepository) {
        this.asesorRepository = asesorRepository;
    }
    async find(id, filter) {
        return this.asesorRepository.inmuebles(id).find(filter);
    }
    async create(id, inmueble) {
        return this.asesorRepository.inmuebles(id).create(inmueble);
    }
    async patch(id, inmueble, where) {
        return this.asesorRepository.inmuebles(id).patch(inmueble, where);
    }
    async delete(id, where) {
        return this.asesorRepository.inmuebles(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/asesors/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Array of Asesor has many Inmueble',
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
], AsesorInmuebleController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/asesors/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Asesor model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, {
                    title: 'NewInmuebleInAsesor',
                    exclude: ['id'],
                    optional: ['asesorId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorInmuebleController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/asesors/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Asesor.Inmueble PATCH success count',
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
], AsesorInmuebleController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/asesors/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Asesor.Inmueble DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmueble))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorInmuebleController.prototype, "delete", null);
AsesorInmuebleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AsesorRepository])
], AsesorInmuebleController);
exports.AsesorInmuebleController = AsesorInmuebleController;
//# sourceMappingURL=asesor-inmueble.controller.js.map