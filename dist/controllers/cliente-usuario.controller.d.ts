import { Cliente, Usuario } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteUsuarioController {
    clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    getUsuario(id: typeof Cliente.prototype.id): Promise<Usuario>;
}
