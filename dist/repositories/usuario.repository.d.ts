import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Usuario, UsuarioRelations, Inmobiliaria } from '../models';
import { InmobiliariaRepository } from './inmobiliaria.repository';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.id, UsuarioRelations> {
    protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>;
    readonly inmobiliarias: HasManyRepositoryFactory<Inmobiliaria, typeof Usuario.prototype.id>;
    constructor(dataSource: MongoDbDataSource, inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>);
}
