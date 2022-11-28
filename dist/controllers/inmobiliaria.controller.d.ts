import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Inmobiliaria } from '../models';
import { InmobiliariaRepository } from '../repositories';
export declare class InmobiliariaController {
    inmobiliariaRepository: InmobiliariaRepository;
    constructor(inmobiliariaRepository: InmobiliariaRepository);
    create(inmobiliaria: Omit<Inmobiliaria, 'id'>): Promise<Inmobiliaria>;
    count(where?: Where<Inmobiliaria>): Promise<Count>;
    find(filter?: Filter<Inmobiliaria>): Promise<Inmobiliaria[]>;
    updateAll(inmobiliaria: Inmobiliaria, where?: Where<Inmobiliaria>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Inmobiliaria>): Promise<Inmobiliaria>;
    updateById(id: string, inmobiliaria: Inmobiliaria): Promise<void>;
    replaceById(id: string, inmobiliaria: Inmobiliaria): Promise<void>;
    deleteById(id: string): Promise<void>;
}
