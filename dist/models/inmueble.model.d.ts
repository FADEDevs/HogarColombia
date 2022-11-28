import { Entity } from '@loopback/repository';
import { Solicitud } from './solicitud.model';
export declare class Inmueble extends Entity {
    id?: string;
    tipoOferta: string;
    tipoInmueble: string;
    estado: string;
    direccion: string;
    departamento?: string;
    ciudad: string;
    valor: number;
    imagen: string;
    urlVideo?: string;
    asesorId: string;
    solicitudes: Solicitud[];
    inmobiliariaId: string;
    constructor(data?: Partial<Inmueble>);
}
export interface InmuebleRelations {
}
export declare type InmuebleWithRelations = Inmueble & InmuebleRelations;
