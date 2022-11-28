import { Asesor, Usuario } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AsesorUsuarioController {
    asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    getUsuario(id: typeof Asesor.prototype.id): Promise<Usuario>;
}
