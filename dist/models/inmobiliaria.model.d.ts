import { Entity } from '@loopback/repository';
import { Inmueble } from './inmueble.model';
export declare class Inmobiliaria extends Entity {
    id?: string;
    nombre: string;
    descripcion: string;
    porcentajeAlquiler: number;
    porcentajeVenta: number;
    usuarioId: string;
    inmuebles: Inmueble[];
    constructor(data?: Partial<Inmobiliaria>);
}
export interface InmobiliariaRelations {
}
export declare type InmobiliariaWithRelations = Inmobiliaria & InmobiliariaRelations;
