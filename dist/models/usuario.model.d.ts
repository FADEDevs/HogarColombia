import { Entity } from '@loopback/repository';
import { Inmobiliaria } from './inmobiliaria.model';
export declare class Usuario extends Entity {
    id?: string;
    documento: string;
    nombres: string;
    apellidos: string;
    correo: string;
    contrasena?: string;
    celular?: string;
    rol: string;
    estado?: string;
    inmobiliarias: Inmobiliaria[];
    constructor(data?: Partial<Usuario>);
}
export interface UsuarioRelations {
}
export declare type UsuarioWithRelations = Usuario & UsuarioRelations;
