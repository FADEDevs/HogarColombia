"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmobiliariaUsuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InmobiliariaUsuarioController = class InmobiliariaUsuarioController {
    constructor(inmobiliariaRepository) {
        this.inmobiliariaRepository = inmobiliariaRepository;
    }
    async getUsuario(id) {
        return this.inmobiliariaRepository.usuario(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/inmobiliarias/{id}/usuario', {
        responses: {
            '200': {
                description: 'Usuario belonging to Inmobiliaria',
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
], InmobiliariaUsuarioController.prototype, "getUsuario", null);
InmobiliariaUsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.InmobiliariaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.InmobiliariaRepository])
], InmobiliariaUsuarioController);
exports.InmobiliariaUsuarioController = InmobiliariaUsuarioController;
//# sourceMappingURL=inmobiliaria-usuario.controller.js.map