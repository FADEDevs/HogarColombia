import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Asesor } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AsesorController {
    asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    create(asesor: Omit<Asesor, 'id'>): Promise<Asesor>;
    count(where?: Where<Asesor>): Promise<Count>;
    find(filter?: Filter<Asesor>): Promise<Asesor[]>;
    updateAll(asesor: Asesor, where?: Where<Asesor>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Asesor>): Promise<Asesor>;
    updateById(id: string, asesor: Asesor): Promise<void>;
    replaceById(id: string, asesor: Asesor): Promise<void>;
    deleteById(id: string): Promise<void>;
}
