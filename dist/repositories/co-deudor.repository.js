"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoDeudorRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CoDeudorRepository = class CoDeudorRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, solicitudRepositoryGetter) {
        super(models_1.CoDeudor, dataSource);
        this.solicitudRepositoryGetter = solicitudRepositoryGetter;
        this.solicitud = this.createBelongsToAccessorFor('solicitud', solicitudRepositoryGetter);
        this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
    }
};
CoDeudorRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongoDB')),
    tslib_1.__param(1, repository_1.repository.getter('SolicitudRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDbDataSource, Function])
], CoDeudorRepository);
exports.CoDeudorRepository = CoDeudorRepository;
//# sourceMappingURL=co-deudor.repository.js.map