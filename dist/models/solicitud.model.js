"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitud = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cliente_model_1 = require("./cliente.model");
const inmueble_model_1 = require("./inmueble.model");
let Solicitud = class Solicitud extends repository_1.Entity {
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
], Solicitud.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "estado", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "fechaSolicitud", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "comentario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "contrato", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "contratoFirmado", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => cliente_model_1.Cliente),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "clienteId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => inmueble_model_1.Inmueble),
    tslib_1.__metadata("design:type", String)
], Solicitud.prototype, "inmuebleId", void 0);
Solicitud = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Solicitud);
exports.Solicitud = Solicitud;
//# sourceMappingURL=solicitud.model.js.map