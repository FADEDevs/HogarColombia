"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioInmobiliariaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsuarioInmobiliariaController = class UsuarioInmobiliariaController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async find(id, filter) {
        return this.usuarioRepository.inmobiliarias(id).find(filter);
    }
    async create(id, inmobiliaria) {
        return this.usuarioRepository.inmobiliarias(id).create(inmobiliaria);
    }
    async patch(id, inmobiliaria, where) {
        return this.usuarioRepository.inmobiliarias(id).patch(inmobiliaria, where);
    }
    async delete(id, where) {
        return this.usuarioRepository.inmobiliarias(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}/inmobiliarias', {
        responses: {
            '200': {
                description: 'Array of Usuario has many Inmobiliaria',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria) },
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
], UsuarioInmobiliariaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/usuarios/{id}/inmobiliarias', {
        responses: {
            '200': {
                description: 'Usuario model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria, {
                    title: 'NewInmobiliariaInUsuario',
                    exclude: ['id'],
                    optional: ['usuarioId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioInmobiliariaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}/inmobiliarias', {
        responses: {
            '200': {
                description: 'Usuario.Inmobiliaria PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmobiliaria))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioInmobiliariaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}/inmobiliarias', {
        responses: {
            '200': {
                description: 'Usuario.Inmobiliaria DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmobiliaria))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioInmobiliariaController.prototype, "delete", null);
UsuarioInmobiliariaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository])
], UsuarioInmobiliariaController);
exports.UsuarioInmobiliariaController = UsuarioInmobiliariaController;
//# sourceMappingURL=usuario-inmobiliaria.controller.js.map