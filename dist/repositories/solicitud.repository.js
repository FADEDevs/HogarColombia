"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SolicitudRepository = class SolicitudRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, clienteRepositoryGetter, inmuebleRepositoryGetter) {
        super(models_1.Solicitud, dataSource);
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.inmuebleRepositoryGetter = inmuebleRepositoryGetter;
        this.inmueble = this.createBelongsToAccessorFor('inmueble', inmuebleRepositoryGetter);
        this.registerInclusionResolver('inmueble', this.inmueble.inclusionResolver);
        this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter);
        this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    }
};
SolicitudRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongoDB')),
    tslib_1.__param(1, repository_1.repository.getter('ClienteRepository')),
    tslib_1.__param(2, repository_1.repository.getter('InmuebleRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDbDataSource, Function, Function])
], SolicitudRepository);
exports.SolicitudRepository = SolicitudRepository;
//# sourceMappingURL=solicitud.repository.js.map