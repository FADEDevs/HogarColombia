import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {Inmueble} from './inmueble.model';

@model()
export class Inmobiliaria extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  porcentajeAlquiler: number;

  @property({
    type: 'number',
    required: true,
  })
  porcentajeVenta: number;

  @belongsTo(() => Usuario)
  usuarioId: string;

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];

  constructor(data?: Partial<Inmobiliaria>) {
    super(data);
  }
}

export interface InmobiliariaRelations {
  // describe navigational properties here
}

export type InmobiliariaWithRelations = Inmobiliaria & InmobiliariaRelations;
