"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AsesorController = class AsesorController {
    constructor(asesorRepository) {
        this.asesorRepository = asesorRepository;
    }
    async create(asesor) {
        return this.asesorRepository.create(asesor);
    }
    async count(where) {
        return this.asesorRepository.count(where);
    }
    async find(filter) {
        return this.asesorRepository.find(filter);
    }
    async updateAll(asesor, where) {
        return this.asesorRepository.updateAll(asesor, where);
    }
    async findById(id, filter) {
        return this.asesorRepository.findById(id, filter);
    }
    async updateById(id, asesor) {
        await this.asesorRepository.updateById(id, asesor);
    }
    async replaceById(id, asesor) {
        await this.asesorRepository.replaceById(id, asesor);
    }
    async deleteById(id) {
        await this.asesorRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, authentication_1.authenticate)("admin"),
    (0, rest_1.post)('/asesores'),
    (0, rest_1.response)(200, {
        description: 'Asesor model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, {
                    title: 'NewAsesor',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/asesores/count'),
    (0, rest_1.response)(200, {
        description: 'Asesor model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Asesor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/asesores'),
    (0, rest_1.response)(200, {
        description: 'Array of Asesor model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Asesor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/asesores'),
    (0, rest_1.response)(200, {
        description: 'Asesor PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Asesor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Asesor, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/asesores/{id}'),
    (0, rest_1.response)(200, {
        description: 'Asesor model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Asesor, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/asesores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Asesor PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Asesor]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/asesores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Asesor PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Asesor]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/asesores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Asesor DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AsesorController.prototype, "deleteById", null);
AsesorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AsesorRepository])
], AsesorController);
exports.AsesorController = AsesorController;
//# sourceMappingURL=asesor.controller.js.map