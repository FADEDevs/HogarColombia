import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Inmobiliaria, InmobiliariaRelations, Usuario, Inmueble } from '../models';
import { UsuarioRepository } from './usuario.repository';
import { InmuebleRepository } from './inmueble.repository';
export declare class InmobiliariaRepository extends DefaultCrudRepository<Inmobiliaria, typeof Inmobiliaria.prototype.id, InmobiliariaRelations> {
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>;
    protected inmuebleRepositoryGetter: Getter<InmuebleRepository>;
    readonly usuario: BelongsToAccessor<Usuario, typeof Inmobiliaria.prototype.id>;
    readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Inmobiliaria.prototype.id>;
    constructor(dataSource: MongoDbDataSource, usuarioRepositoryGetter: Getter<UsuarioRepository>, inmuebleRepositoryGetter: Getter<InmuebleRepository>);
}
