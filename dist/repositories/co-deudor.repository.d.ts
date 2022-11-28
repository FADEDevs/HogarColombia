import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { CoDeudor, CoDeudorRelations, Solicitud } from '../models';
import { SolicitudRepository } from './solicitud.repository';
export declare class CoDeudorRepository extends DefaultCrudRepository<CoDeudor, typeof CoDeudor.prototype.id, CoDeudorRelations> {
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    readonly solicitud: BelongsToAccessor<Solicitud, typeof CoDeudor.prototype.id>;
    constructor(dataSource: MongoDbDataSource, solicitudRepositoryGetter: Getter<SolicitudRepository>);
}
