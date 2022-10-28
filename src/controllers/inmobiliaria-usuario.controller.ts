import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Inmobiliaria,
  Usuario,
} from '../models';
import {InmobiliariaRepository} from '../repositories';

export class InmobiliariaUsuarioController {
  constructor(
    @repository(InmobiliariaRepository)
    public inmobiliariaRepository: InmobiliariaRepository,
  ) { }

  @get('/inmobiliarias/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Inmobiliaria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Inmobiliaria.prototype.id,
  ): Promise<Usuario> {
    return this.inmobiliariaRepository.usuario(id);
  }
}
