"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteUsuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteUsuarioController = class ClienteUsuarioController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async getUsuario(id) {
        return this.clienteRepository.usuario(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/clientes/{id}/usuario', {
        responses: {
            '200': {
                description: 'Usuario belonging to Cliente',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Usuario) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteUsuarioController.prototype, "getUsuario", null);
ClienteUsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteUsuarioController);
exports.ClienteUsuarioController = ClienteUsuarioController;
//# sourceMappingURL=cliente-usuario.controller.js.map