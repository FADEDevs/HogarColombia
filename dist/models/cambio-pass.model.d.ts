import { Model } from '@loopback/repository';
export declare class CambioPass extends Model {
    cActual: string;
    cNueva: string;
    cValidada: string;
    constructor(data?: Partial<CambioPass>);
}
export interface CambioPassRelations {
}
export declare type CambioPassWithRelations = CambioPass & CambioPassRelations;
