import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Inmueble, InmuebleRelations, Asesor, Solicitud, Inmobiliaria } from '../models';
import { AsesorRepository } from './asesor.repository';
import { SolicitudRepository } from './solicitud.repository';
import { InmobiliariaRepository } from './inmobiliaria.repository';
export declare class InmuebleRepository extends DefaultCrudRepository<Inmueble, typeof Inmueble.prototype.id, InmuebleRelations> {
    protected asesorRepositoryGetter: Getter<AsesorRepository>;
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>;
    readonly asesor: BelongsToAccessor<Asesor, typeof Inmueble.prototype.id>;
    readonly solicitudes: HasManyRepositoryFactory<Solicitud, typeof Inmueble.prototype.id>;
    readonly inmobiliaria: BelongsToAccessor<Inmobiliaria, typeof Inmueble.prototype.id>;
    constructor(dataSource: MongoDbDataSource, asesorRepositoryGetter: Getter<AsesorRepository>, solicitudRepositoryGetter: Getter<SolicitudRepository>, inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>);
}
