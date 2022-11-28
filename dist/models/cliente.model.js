"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const usuario_model_1 = require("./usuario.model");
const solicitud_model_1 = require("./solicitud.model");
let Cliente = class Cliente extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "celular", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => usuario_model_1.Usuario),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => solicitud_model_1.Solicitud),
    tslib_1.__metadata("design:type", Array)
], Cliente.prototype, "solicitudes", void 0);
Cliente = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.model.js.map