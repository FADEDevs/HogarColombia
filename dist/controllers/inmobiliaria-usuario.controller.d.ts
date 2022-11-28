import { Inmobiliaria, Usuario } from '../models';
import { InmobiliariaRepository } from '../repositories';
export declare class InmobiliariaUsuarioController {
    inmobiliariaRepository: InmobiliariaRepository;
    constructor(inmobiliariaRepository: InmobiliariaRepository);
    getUsuario(id: typeof Inmobiliaria.prototype.id): Promise<Usuario>;
}
