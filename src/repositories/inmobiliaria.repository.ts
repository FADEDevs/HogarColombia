import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Inmobiliaria, InmobiliariaRelations, Usuario, Inmueble} from '../models';
import {UsuarioRepository} from './usuario.repository';
import {InmuebleRepository} from './inmueble.repository';

export class InmobiliariaRepository extends DefaultCrudRepository<
  Inmobiliaria,
  typeof Inmobiliaria.prototype.id,
  InmobiliariaRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof Inmobiliaria.prototype.id>;

  public readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Inmobiliaria.prototype.id>;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>,
  ) {
    super(Inmobiliaria, dataSource);
    this.inmuebles = this.createHasManyRepositoryFactoryFor('inmuebles', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmuebles', this.inmuebles.inclusionResolver);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
