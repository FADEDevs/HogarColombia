import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {CoDeudor, CoDeudorRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class CoDeudorRepository extends DefaultCrudRepository<
  CoDeudor,
  typeof CoDeudor.prototype.id,
  CoDeudorRelations
> {

  public readonly solicitud: BelongsToAccessor<Solicitud, typeof CoDeudor.prototype.id>;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(CoDeudor, dataSource);
    this.solicitud = this.createBelongsToAccessorFor('solicitud', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
  }
}
