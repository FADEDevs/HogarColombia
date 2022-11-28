"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inmueble = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const asesor_model_1 = require("./asesor.model");
const solicitud_model_1 = require("./solicitud.model");
const inmobiliaria_model_1 = require("./inmobiliaria.model");
let Inmueble = class Inmueble extends repository_1.Entity {
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
], Inmueble.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "tipoOferta", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "tipoInmueble", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "estado", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "direccion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "departamento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "ciudad", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Inmueble.prototype, "valor", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "imagen", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "urlVideo", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => asesor_model_1.Asesor),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "asesorId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => solicitud_model_1.Solicitud),
    tslib_1.__metadata("design:type", Array)
], Inmueble.prototype, "solicitudes", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => inmobiliaria_model_1.Inmobiliaria),
    tslib_1.__metadata("design:type", String)
], Inmueble.prototype, "inmobiliariaId", void 0);
Inmueble = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Inmueble);
exports.Inmueble = Inmueble;
//# sourceMappingURL=inmueble.model.js.map