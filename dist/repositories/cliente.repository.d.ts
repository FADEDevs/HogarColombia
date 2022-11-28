import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Cliente, ClienteRelations, Usuario, Solicitud } from '../models';
import { UsuarioRepository } from './usuario.repository';
import { SolicitudRepository } from './solicitud.repository';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id, ClienteRelations> {
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>;
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    readonly usuario: BelongsToAccessor<Usuario, typeof Cliente.prototype.id>;
    readonly solicitudes: HasManyRepositoryFactory<Solicitud, typeof Cliente.prototype.id>;
    constructor(dataSource: MongoDbDataSource, usuarioRepositoryGetter: Getter<UsuarioRepository>, solicitudRepositoryGetter: Getter<SolicitudRepository>);
}
