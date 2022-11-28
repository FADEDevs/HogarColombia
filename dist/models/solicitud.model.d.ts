import { Entity } from '@loopback/repository';
export declare class Solicitud extends Entity {
    id?: string;
    estado: string;
    fechaSolicitud: string;
    comentario: string;
    contrato?: string;
    contratoFirmado?: string;
    clienteId: string;
    inmuebleId: string;
    constructor(data?: Partial<Solicitud>);
}
export interface SolicitudRelations {
}
export declare type SolicitudWithRelations = Solicitud & SolicitudRelations;
