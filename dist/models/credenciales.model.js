"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credenciales = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Credenciales = class Credenciales extends repository_1.Model {
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
], Credenciales.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Credenciales.prototype, "password", void 0);
Credenciales = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Credenciales);
exports.Credenciales = Credenciales;
//# sourceMappingURL=credenciales.model.js.map