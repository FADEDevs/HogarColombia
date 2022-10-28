import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Inmobiliaria} from '../models';
import {InmobiliariaRepository} from '../repositories';

export class InmobiliariaController {
  constructor(
    @repository(InmobiliariaRepository)
    public inmobiliariaRepository : InmobiliariaRepository,
  ) {}

  @post('/inmobiliarias')
  @response(200, {
    description: 'Inmobiliaria model instance',
    content: {'application/json': {schema: getModelSchemaRef(Inmobiliaria)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmobiliaria, {
            title: 'NewInmobiliaria',
            exclude: ['id'],
          }),
        },
      },
    })
    inmobiliaria: Omit<Inmobiliaria, 'id'>,
  ): Promise<Inmobiliaria> {
    return this.inmobiliariaRepository.create(inmobiliaria);
  }

  @get('/inmobiliarias/count')
  @response(200, {
    description: 'Inmobiliaria model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Inmobiliaria) where?: Where<Inmobiliaria>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.count(where);
  }

  @get('/inmobiliarias')
  @response(200, {
    description: 'Array of Inmobiliaria model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Inmobiliaria, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Inmobiliaria) filter?: Filter<Inmobiliaria>,
  ): Promise<Inmobiliaria[]> {
    return this.inmobiliariaRepository.find(filter);
  }

  @patch('/inmobiliarias')
  @response(200, {
    description: 'Inmobiliaria PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmobiliaria, {partial: true}),
        },
      },
    })
    inmobiliaria: Inmobiliaria,
    @param.where(Inmobiliaria) where?: Where<Inmobiliaria>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.updateAll(inmobiliaria, where);
  }

  @get('/inmobiliarias/{id}')
  @response(200, {
    description: 'Inmobiliaria model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Inmobiliaria, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Inmobiliaria, {exclude: 'where'}) filter?: FilterExcludingWhere<Inmobiliaria>
  ): Promise<Inmobiliaria> {
    return this.inmobiliariaRepository.findById(id, filter);
  }

  @patch('/inmobiliarias/{id}')
  @response(204, {
    description: 'Inmobiliaria PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inmobiliaria, {partial: true}),
        },
      },
    })
    inmobiliaria: Inmobiliaria,
  ): Promise<void> {
    await this.inmobiliariaRepository.updateById(id, inmobiliaria);
  }

  @put('/inmobiliarias/{id}')
  @response(204, {
    description: 'Inmobiliaria PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() inmobiliaria: Inmobiliaria,
  ): Promise<void> {
    await this.inmobiliariaRepository.replaceById(id, inmobiliaria);
  }

  @del('/inmobiliarias/{id}')
  @response(204, {
    description: 'Inmobiliaria DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.inmobiliariaRepository.deleteById(id);
  }
}
