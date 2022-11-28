import { Entity } from '@loopback/repository';
import { Solicitud } from './solicitud.model';
export declare class Cliente extends Entity {
    id?: string;
    celular: string;
    usuarioId: string;
    solicitudes: Solicitud[];
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
