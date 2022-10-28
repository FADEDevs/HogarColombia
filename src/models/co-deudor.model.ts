import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class CoDeudor extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
  })
  cartaLaboral?: string;

  @belongsTo(() => Solicitud)
  solicitudId: string;

  constructor(data?: Partial<CoDeudor>) {
    super(data);
  }
}

export interface CoDeudorRelations {
  // describe navigational properties here
}

export type CoDeudorWithRelations = CoDeudor & CoDeudorRelations;
