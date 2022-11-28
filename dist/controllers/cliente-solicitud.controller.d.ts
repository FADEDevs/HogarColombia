import { Count, Filter, Where } from '@loopback/repository';
import { Cliente, Solicitud } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteSolicitudController {
    protected clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    find(id: string, filter?: Filter<Solicitud>): Promise<Solicitud[]>;
    create(id: typeof Cliente.prototype.id, solicitud: Omit<Solicitud, 'id'>): Promise<Solicitud>;
    patch(id: string, solicitud: Partial<Solicitud>, where?: Where<Solicitud>): Promise<Count>;
    delete(id: string, where?: Where<Solicitud>): Promise<Count>;
}
