import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Asesor, AsesorRelations, Usuario, Inmueble } from '../models';
import { UsuarioRepository } from './usuario.repository';
import { InmuebleRepository } from './inmueble.repository';
export declare class AsesorRepository extends DefaultCrudRepository<Asesor, typeof Asesor.prototype.id, AsesorRelations> {
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>;
    protected inmuebleRepositoryGetter: Getter<InmuebleRepository>;
    readonly usuario: BelongsToAccessor<Usuario, typeof Asesor.prototype.id>;
    readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Asesor.prototype.id>;
    constructor(dataSource: MongoDbDataSource, usuarioRepositoryGetter: Getter<UsuarioRepository>, inmuebleRepositoryGetter: Getter<InmuebleRepository>);
}
