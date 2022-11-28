"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
// @authenticate("admin")//Se agrega permisos de admin a todo el controlador y sus métodos
let InmuebleController = class InmuebleController {
    constructor(inmuebleRepository) {
        this.inmuebleRepository = inmuebleRepository;
    }
    // @authenticate("admin", "asesor")//Le agregamos permiso para crear inmuebles al asesor
    async create(inmueble) {
        return this.inmuebleRepository.create(inmueble);
    }
    // @authenticate.skip()
    async count(where) {
        return this.inmuebleRepository.count(where);
    }
    async find(filter) {
        return this.inmuebleRepository.find(filter);
    }
    async updateAll(inmueble, where) {
        return this.inmuebleRepository.updateAll(inmueble, where);
    }
    async findById(id, filter) {
        return this.inmuebleRepository.findById(id, filter);
    }
    async updateById(id, inmueble) {
        await this.inmuebleRepository.updateById(id, inmueble);
    }
    async replaceById(id, inmueble) {
        await this.inmuebleRepository.replaceById(id, inmueble);
    }
    async deleteById(id) {
        await this.inmuebleRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/inmuebles'),
    (0, rest_1.response)(200, {
        description: 'Inmueble model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, {
                    title: 'NewInmueble',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/inmuebles/count'),
    (0, rest_1.response)(200, {
        description: 'Inmueble model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Inmueble)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/inmuebles'),
    (0, rest_1.response)(200, {
        description: 'Array of Inmueble model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Inmueble)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/inmuebles'),
    (0, rest_1.response)(200, {
        description: 'Inmueble PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Inmueble)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Inmueble, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/inmuebles/{id}'),
    (0, rest_1.response)(200, {
        description: 'Inmueble model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Inmueble, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/inmuebles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inmueble PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Inmueble]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/inmuebles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inmueble PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Inmueble]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/inmuebles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inmueble DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], InmuebleController.prototype, "deleteById", null);
InmuebleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.InmuebleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.InmuebleRepository])
], InmuebleController);
exports.InmuebleController = InmuebleController;
//# sourceMappingURL=inmueble.controller.js.map