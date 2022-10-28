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
  Inmobiliaria,
  Inmueble,
} from '../models';
import {InmobiliariaRepository} from '../repositories';

export class InmobiliariaInmuebleController {
  constructor(
    @repository(InmobiliariaRepository) protected inmobiliariaRepository: InmobiliariaRepository,
  ) { }

  @get('/inmobiliarias/{id}/inmuebles', {
    responses: {
      '200': {
        description: 'Array of Inmobiliaria has many Inmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmueble)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Inmueble>,
  ): Promise<Inmueble[]> {
    return this.inmobiliariaRepository.inmuebles(id).find(filter);
  }

  @post('/inmobiliarias/{id}/inmuebles', {
    responses: {
      '200': {
        description: 'Inmobiliaria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inmueble)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Inmobiliaria.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmueble, {
            title: 'NewInmuebleInInmobiliaria',
            exclude: ['id'],
            optional: ['inmobiliariaId']
          }),
        },
      },
    }) inmueble: Omit<Inmueble, 'id'>,
  ): Promise<Inmueble> {
    return this.inmobiliariaRepository.inmuebles(id).create(inmueble);
  }

  @patch('/inmobiliarias/{id}/inmuebles', {
    responses: {
      '200': {
        description: 'Inmobiliaria.Inmueble PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmueble, {partial: true}),
        },
      },
    })
    inmueble: Partial<Inmueble>,
    @param.query.object('where', getWhereSchemaFor(Inmueble)) where?: Where<Inmueble>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.inmuebles(id).patch(inmueble, where);
  }

  @del('/inmobiliarias/{id}/inmuebles', {
    responses: {
      '200': {
        description: 'Inmobiliaria.Inmueble DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Inmueble)) where?: Where<Inmueble>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.inmuebles(id).delete(where);
  }
}
