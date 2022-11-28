"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CambioPass = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let CambioPass = class CambioPass extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CambioPass.prototype, "cActual", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CambioPass.prototype, "cNueva", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CambioPass.prototype, "cValidada", void 0);
CambioPass = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], CambioPass);
exports.CambioPass = CambioPass;
//# sourceMappingURL=cambio-pass.model.js.map