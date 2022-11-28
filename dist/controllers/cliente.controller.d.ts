import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cliente } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteController {
    clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    create(cliente: Omit<Cliente, 'id'>): Promise<Cliente>;
    count(where?: Where<Cliente>): Promise<Count>;
    find(filter?: Filter<Cliente>): Promise<Cliente[]>;
    updateAll(cliente: Cliente, where?: Where<Cliente>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cliente>): Promise<Cliente>;
    updateById(id: string, cliente: Cliente): Promise<void>;
    replaceById(id: string, cliente: Cliente): Promise<void>;
    deleteById(id: string): Promise<void>;
}
