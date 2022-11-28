"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asesor = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const usuario_model_1 = require("./usuario.model");
const inmueble_model_1 = require("./inmueble.model");
let Asesor = class Asesor extends repository_1.Entity {
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
], Asesor.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Asesor.prototype, "estado", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => usuario_model_1.Usuario),
    tslib_1.__metadata("design:type", String)
], Asesor.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => inmueble_model_1.Inmueble),
    tslib_1.__metadata("design:type", Array)
], Asesor.prototype, "inmuebles", void 0);
Asesor = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Asesor);
exports.Asesor = Asesor;
//# sourceMappingURL=asesor.model.js.map