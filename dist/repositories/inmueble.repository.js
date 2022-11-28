"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let InmuebleRepository = class InmuebleRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, asesorRepositoryGetter, solicitudRepositoryGetter, inmobiliariaRepositoryGetter) {
        super(models_1.Inmueble, dataSource);
        this.asesorRepositoryGetter = asesorRepositoryGetter;
        this.solicitudRepositoryGetter = solicitudRepositoryGetter;
        this.inmobiliariaRepositoryGetter = inmobiliariaRepositoryGetter;
        this.inmobiliaria = this.createBelongsToAccessorFor('inmobiliaria', inmobiliariaRepositoryGetter);
        this.registerInclusionResolver('inmobiliaria', this.inmobiliaria.inclusionResolver);
        this.solicitudes = this.createHasManyRepositoryFactoryFor('solicitudes', solicitudRepositoryGetter);
        this.registerInclusionResolver('solicitudes', this.solicitudes.inclusionResolver);
        this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter);
        this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    }
};
InmuebleRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongoDB')),
    tslib_1.__param(1, repository_1.repository.getter('AsesorRepository')),
    tslib_1.__param(2, repository_1.repository.getter('SolicitudRepository')),
    tslib_1.__param(3, repository_1.repository.getter('InmobiliariaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDbDataSource, Function, Function, Function])
], InmuebleRepository);
exports.InmuebleRepository = InmuebleRepository;
//# sourceMappingURL=inmueble.repository.js.map