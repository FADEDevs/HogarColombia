import { Entity } from '@loopback/repository';
export declare class CoDeudor extends Entity {
    id?: string;
    documento: string;
    nombres: string;
    apellidos: string;
    celular: string;
    cartaLaboral?: string;
    solicitudId: string;
    constructor(data?: Partial<CoDeudor>);
}
export interface CoDeudorRelations {
}
export declare type CoDeudorWithRelations = CoDeudor & CoDeudorRelations;
