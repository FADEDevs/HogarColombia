import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Solicitud, SolicitudRelations, Cliente, Inmueble } from '../models';
import { ClienteRepository } from './cliente.repository';
import { InmuebleRepository } from './inmueble.repository';
export declare class SolicitudRepository extends DefaultCrudRepository<Solicitud, typeof Solicitud.prototype.id, SolicitudRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected inmuebleRepositoryGetter: Getter<InmuebleRepository>;
    readonly cliente: BelongsToAccessor<Cliente, typeof Solicitud.prototype.id>;
    readonly inmueble: BelongsToAccessor<Inmueble, typeof Solicitud.prototype.id>;
    constructor(dataSource: MongoDbDataSource, clienteRepositoryGetter: Getter<ClienteRepository>, inmuebleRepositoryGetter: Getter<InmuebleRepository>);
}
