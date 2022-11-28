"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoDeudor = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const solicitud_model_1 = require("./solicitud.model");
let CoDeudor = class CoDeudor extends repository_1.Entity {
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
], CoDeudor.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CoDeudor.prototype, "documento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CoDeudor.prototype, "nombres", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CoDeudor.prototype, "apellidos", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CoDeudor.prototype, "celular", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], CoDeudor.prototype, "cartaLaboral", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => solicitud_model_1.Solicitud),
    tslib_1.__metadata("design:type", String)
], CoDeudor.prototype, "solicitudId", void 0);
CoDeudor = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], CoDeudor);
exports.CoDeudor = CoDeudor;
//# sourceMappingURL=co-deudor.model.js.map