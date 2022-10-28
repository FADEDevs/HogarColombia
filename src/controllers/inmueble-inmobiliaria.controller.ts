import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Inmueble,
  Inmobiliaria,
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleInmobiliariaController {
  constructor(
    @repository(InmuebleRepository)
    public inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/inmobiliaria', {
    responses: {
      '200': {
        description: 'Inmobiliaria belonging to Inmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmobiliaria)},
          },
        },
      },
    },
  })
  async getInmobiliaria(
    @param.path.string('id') id: typeof Inmueble.prototype.id,
  ): Promise<Inmobiliaria> {
    return this.inmuebleRepository.inmobiliaria(id);
  }
}
