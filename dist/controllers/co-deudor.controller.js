"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoDeudorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CoDeudorController = class CoDeudorController {
    constructor(coDeudorRepository) {
        this.coDeudorRepository = coDeudorRepository;
    }
    async create(coDeudor) {
        return this.coDeudorRepository.create(coDeudor);
    }
    async count(where) {
        return this.coDeudorRepository.count(where);
    }
    async find(filter) {
        return this.coDeudorRepository.find(filter);
    }
    async updateAll(coDeudor, where) {
        return this.coDeudorRepository.updateAll(coDeudor, where);
    }
    async findById(id, filter) {
        return this.coDeudorRepository.findById(id, filter);
    }
    async updateById(id, coDeudor) {
        await this.coDeudorRepository.updateById(id, coDeudor);
    }
    async replaceById(id, coDeudor) {
        await this.coDeudorRepository.replaceById(id, coDeudor);
    }
    async deleteById(id) {
        await this.coDeudorRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/co-deudores'),
    (0, rest_1.response)(200, {
        description: 'CoDeudor model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.CoDeudor) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CoDeudor, {
                    title: 'NewCoDeudor',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CoDeudorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/co-deudores/count'),
    (0, rest_1.response)(200, {
        description: 'CoDeudor model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.CoDeudor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CoDeudorController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/co-deudores'),
    (0, rest_1.response)(200, {
        description: 'Array of CoDeudor model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.CoDeudor, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.CoDeudor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CoDeudorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/co-deudores'),
    (0, rest_1.response)(200, {
        description: 'CoDeudor PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CoDeudor, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.CoDeudor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.CoDeudor, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CoDeudorController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/co-deudores/{id}'),
    (0, rest_1.response)(200, {
        description: 'CoDeudor model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CoDeudor, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.CoDeudor, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CoDeudorController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/co-deudores/{id}'),
    (0, rest_1.response)(204, {
        description: 'CoDeudor PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CoDeudor, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.CoDeudor]),
    tslib_1.__metadata("design:returntype", Promise)
], CoDeudorController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/co-deudores/{id}'),
    (0, rest_1.response)(204, {
        description: 'CoDeudor PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.CoDeudor]),
    tslib_1.__metadata("design:returntype", Promise)
], CoDeudorController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/co-deudores/{id}'),
    (0, rest_1.response)(204, {
        description: 'CoDeudor DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CoDeudorController.prototype, "deleteById", null);
CoDeudorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CoDeudorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CoDeudorRepository])
], CoDeudorController);
exports.CoDeudorController = CoDeudorController;
//# sourceMappingURL=co-deudor.controller.js.map