import { Count, Filter, Where } from '@loopback/repository';
import { Usuario, Inmobiliaria } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioInmobiliariaController {
    protected usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    find(id: string, filter?: Filter<Inmobiliaria>): Promise<Inmobiliaria[]>;
    create(id: typeof Usuario.prototype.id, inmobiliaria: Omit<Inmobiliaria, 'id'>): Promise<Inmobiliaria>;
    patch(id: string, inmobiliaria: Partial<Inmobiliaria>, where?: Where<Inmobiliaria>): Promise<Count>;
    delete(id: string, where?: Where<Inmobiliaria>): Promise<Count>;
}
