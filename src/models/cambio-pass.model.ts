import {Model, model, property} from '@loopback/repository';

@model()
export class CambioPass extends Model {
  @property({
    type: 'string',
  })
  cActual?: string;

  @property({
    type: 'string',
    required: true,
  })
  cNueva: string;

  @property({
    type: 'string',
    required: true,
  })
  cValidada: string;


  constructor(data?: Partial<CambioPass>) {
    super(data);
  }
}

export interface CambioPassRelations {
  // describe navigational properties here
}

export type CambioPassWithRelations = CambioPass & CambioPassRelations;
