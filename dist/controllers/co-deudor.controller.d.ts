import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CoDeudor } from '../models';
import { CoDeudorRepository } from '../repositories';
export declare class CoDeudorController {
    coDeudorRepository: CoDeudorRepository;
    constructor(coDeudorRepository: CoDeudorRepository);
    create(coDeudor: Omit<CoDeudor, 'id'>): Promise<CoDeudor>;
    count(where?: Where<CoDeudor>): Promise<Count>;
    find(filter?: Filter<CoDeudor>): Promise<CoDeudor[]>;
    updateAll(coDeudor: CoDeudor, where?: Where<CoDeudor>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<CoDeudor>): Promise<CoDeudor>;
    updateById(id: string, coDeudor: CoDeudor): Promise<void>;
    replaceById(id: string, coDeudor: CoDeudor): Promise<void>;
    deleteById(id: string): Promise<void>;
}
