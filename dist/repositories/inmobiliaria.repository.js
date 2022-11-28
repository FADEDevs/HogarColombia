"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmobiliariaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let InmobiliariaRepository = class InmobiliariaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usuarioRepositoryGetter, inmuebleRepositoryGetter) {
        super(models_1.Inmobiliaria, dataSource);
        this.usuarioRepositoryGetter = usuarioRepositoryGetter;
        this.inmuebleRepositoryGetter = inmuebleRepositoryGetter;
        this.inmuebles = this.createHasManyRepositoryFactoryFor('inmuebles', inmuebleRepositoryGetter);
        this.registerInclusionResolver('inmuebles', this.inmuebles.inclusionResolver);
        this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter);
        this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
    }
};
InmobiliariaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongoDB')),
    tslib_1.__param(1, repository_1.repository.getter('UsuarioRepository')),
    tslib_1.__param(2, repository_1.repository.getter('InmuebleRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDbDataSource, Function, Function])
], InmobiliariaRepository);
exports.InmobiliariaRepository = InmobiliariaRepository;
//# sourceMappingURL=inmobiliaria.repository.js.map