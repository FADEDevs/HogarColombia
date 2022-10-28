import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Usuario,
  Inmobiliaria,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioInmobiliariaController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/inmobiliarias', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Inmobiliaria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmobiliaria)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Inmobiliaria>,
  ): Promise<Inmobiliaria[]> {
    return this.usuarioRepository.inmobiliarias(id).find(filter);
  }

  @post('/usuarios/{id}/inmobiliarias', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inmobiliaria)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmobiliaria, {
            title: 'NewInmobiliariaInUsuario',
            exclude: ['id'],
            optional: ['usuarioId']
          }),
        },
      },
    }) inmobiliaria: Omit<Inmobiliaria, 'id'>,
  ): Promise<Inmobiliaria> {
    return this.usuarioRepository.inmobiliarias(id).create(inmobiliaria);
  }

  @patch('/usuarios/{id}/inmobiliarias', {
    responses: {
      '200': {
        description: 'Usuario.Inmobiliaria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmobiliaria, {partial: true}),
        },
      },
    })
    inmobiliaria: Partial<Inmobiliaria>,
    @param.query.object('where', getWhereSchemaFor(Inmobiliaria)) where?: Where<Inmobiliaria>,
  ): Promise<Count> {
    return this.usuarioRepository.inmobiliarias(id).patch(inmobiliaria, where);
  }

  @del('/usuarios/{id}/inmobiliarias', {
    responses: {
      '200': {
        description: 'Usuario.Inmobiliaria DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Inmobiliaria)) where?: Where<Inmobiliaria>,
  ): Promise<Count> {
    return this.usuarioRepository.inmobiliarias(id).delete(where);
  }
}
