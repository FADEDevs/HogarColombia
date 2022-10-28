import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  CoDeudor,
  Solicitud,
} from '../models';
import {CoDeudorRepository} from '../repositories';

export class CoDeudorSolicitudController {
  constructor(
    @repository(CoDeudorRepository)
    public coDeudorRepository: CoDeudorRepository,
  ) { }

  @get('/co-deudors/{id}/solicitud', {
    responses: {
      '200': {
        description: 'Solicitud belonging to CoDeudor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async getSolicitud(
    @param.path.string('id') id: typeof CoDeudor.prototype.id,
  ): Promise<Solicitud> {
    return this.coDeudorRepository.solicitud(id);
  }
}
