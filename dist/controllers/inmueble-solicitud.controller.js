"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleSolicitudController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InmuebleSolicitudController = class InmuebleSolicitudController {
    constructor(inmuebleRepository) {
        this.inmuebleRepository = inmuebleRepository;
    }
    async find(id, filter) {
        return this.inmuebleRepository.solicitudes(id).find(filter);
    }
    async create(id, solicitud) {
        return this.inmuebleRepository.solicitudes(id).create(solicitud);
    }
    async patch(id, solicitud, where) {
        return this.inmuebleRepository.solicitudes(id).patch(solicitud, where);
    }
    async delete(id, where) {
        return this.inmuebleRepository.solicitudes(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/inmuebles/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Array of Inmueble has many Solicitud',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) },
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
], InmuebleSolicitudController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/inmuebles/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Inmueble model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, {
                    title: 'NewSolicitudInInmueble',
                    exclude: ['id'],
                    optional: ['inmuebleId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleSolicitudController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/inmuebles/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Inmueble.Solicitud PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solicitud))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleSolicitudController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/inmuebles/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Inmueble.Solicitud DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solicitud))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleSolicitudController.prototype, "delete", null);
InmuebleSolicitudController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.InmuebleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.InmuebleRepository])
], InmuebleSolicitudController);
exports.InmuebleSolicitudController = InmuebleSolicitudController;
//# sourceMappingURL=inmueble-solicitud.controller.js.map