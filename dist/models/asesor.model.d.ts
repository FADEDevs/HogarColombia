import { Entity } from '@loopback/repository';
import { Inmueble } from './inmueble.model';
export declare class Asesor extends Entity {
    id?: string;
    estado: string;
    usuarioId: string;
    inmuebles: Inmueble[];
    constructor(data?: Partial<Asesor>);
}
export interface AsesorRelations {
}
export declare type AsesorWithRelations = Asesor & AsesorRelations;
