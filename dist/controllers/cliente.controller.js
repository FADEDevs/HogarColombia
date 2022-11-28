"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteController = class ClienteController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async create(cliente) {
        return this.clienteRepository.create(cliente);
    }
    async count(where) {
        return this.clienteRepository.count(where);
    }
    async find(filter) {
        return this.clienteRepository.find(filter);
    }
    async updateAll(cliente, where) {
        return this.clienteRepository.updateAll(cliente, where);
    }
    async findById(id, filter) {
        return this.clienteRepository.findById(id, filter);
    }
    async updateById(id, cliente) {
        await this.clienteRepository.updateById(id, cliente);
    }
    async replaceById(id, cliente) {
        await this.clienteRepository.replaceById(id, cliente);
    }
    async deleteById(id) {
        await this.clienteRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Cliente model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, {
                    title: 'NewCliente',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/clientes/count'),
    (0, rest_1.response)(200, {
        description: 'Cliente model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cliente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Array of Cliente model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cliente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Cliente PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cliente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cliente, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/clientes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cliente model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cliente, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cliente]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cliente]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "deleteById", null);
ClienteController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map