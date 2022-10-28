import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Inmobiliaria} from '../models';
import {InmobiliariaRepository} from './inmobiliaria.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {

  public readonly inmobiliarias: HasManyRepositoryFactory<Inmobiliaria, typeof Usuario.prototype.id>;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('InmobiliariaRepository') protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>,
  ) {
    super(Usuario, dataSource);
    this.inmobiliarias = this.createHasManyRepositoryFactoryFor('inmobiliarias', inmobiliariaRepositoryGetter,);
    this.registerInclusionResolver('inmobiliarias', this.inmobiliarias.inclusionResolver);
  }
}
