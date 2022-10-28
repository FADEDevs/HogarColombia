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
import {CoDeudor} from '../models';
import {CoDeudorRepository} from '../repositories';

export class CoDeudorController {
  constructor(
    @repository(CoDeudorRepository)
    public coDeudorRepository : CoDeudorRepository,
  ) {}

  @post('/co-deudores')
  @response(200, {
    description: 'CoDeudor model instance',
    content: {'application/json': {schema: getModelSchemaRef(CoDeudor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CoDeudor, {
            title: 'NewCoDeudor',
            exclude: ['id'],
          }),
        },
      },
    })
    coDeudor: Omit<CoDeudor, 'id'>,
  ): Promise<CoDeudor> {
    return this.coDeudorRepository.create(coDeudor);
  }

  @get('/co-deudores/count')
  @response(200, {
    description: 'CoDeudor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CoDeudor) where?: Where<CoDeudor>,
  ): Promise<Count> {
    return this.coDeudorRepository.count(where);
  }

  @get('/co-deudores')
  @response(200, {
    description: 'Array of CoDeudor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CoDeudor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CoDeudor) filter?: Filter<CoDeudor>,
  ): Promise<CoDeudor[]> {
    return this.coDeudorRepository.find(filter);
  }

  @patch('/co-deudores')
  @response(200, {
    description: 'CoDeudor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CoDeudor, {partial: true}),
        },
      },
    })
    coDeudor: CoDeudor,
    @param.where(CoDeudor) where?: Where<CoDeudor>,
  ): Promise<Count> {
    return this.coDeudorRepository.updateAll(coDeudor, where);
  }

  @get('/co-deudores/{id}')
  @response(200, {
    description: 'CoDeudor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CoDeudor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CoDeudor, {exclude: 'where'}) filter?: FilterExcludingWhere<CoDeudor>
  ): Promise<CoDeudor> {
    return this.coDeudorRepository.findById(id, filter);
  }

  @patch('/co-deudores/{id}')
  @response(204, {
    description: 'CoDeudor PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CoDeudor, {partial: true}),
        },
      },
    })
    coDeudor: CoDeudor,
  ): Promise<void> {
    await this.coDeudorRepository.updateById(id, coDeudor);
  }

  @put('/co-deudores/{id}')
  @response(204, {
    description: 'CoDeudor PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() coDeudor: CoDeudor,
  ): Promise<void> {
    await this.coDeudorRepository.replaceById(id, coDeudor);
  }

  @del('/co-deudores/{id}')
  @response(204, {
    description: 'CoDeudor DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.coDeudorRepository.deleteById(id);
  }
}
