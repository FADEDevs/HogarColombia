"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inmobiliaria = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const usuario_model_1 = require("./usuario.model");
const inmueble_model_1 = require("./inmueble.model");
let Inmobiliaria = class Inmobiliaria extends repository_1.Entity {
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
], Inmobiliaria.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Inmobiliaria.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Inmobiliaria.prototype, "descripcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Inmobiliaria.prototype, "porcentajeAlquiler", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Inmobiliaria.prototype, "porcentajeVenta", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => usuario_model_1.Usuario),
    tslib_1.__metadata("design:type", String)
], Inmobiliaria.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => inmueble_model_1.Inmueble),
    tslib_1.__metadata("design:type", Array)
], Inmobiliaria.prototype, "inmuebles", void 0);
Inmobiliaria = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Inmobiliaria);
exports.Inmobiliaria = Inmobiliaria;
//# sourceMappingURL=inmobiliaria.model.js.map