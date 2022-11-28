import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Inmueble } from '../models';
import { InmuebleRepository } from '../repositories';
export declare class InmuebleController {
    inmuebleRepository: InmuebleRepository;
    constructor(inmuebleRepository: InmuebleRepository);
    create(inmueble: Omit<Inmueble, 'id'>): Promise<Inmueble>;
    count(where?: Where<Inmueble>): Promise<Count>;
    find(filter?: Filter<Inmueble>): Promise<Inmueble[]>;
    updateAll(inmueble: Inmueble, where?: Where<Inmueble>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Inmueble>): Promise<Inmueble>;
    updateById(id: string, inmueble: Inmueble): Promise<void>;
    replaceById(id: string, inmueble: Inmueble): Promise<void>;
    deleteById(id: string): Promise<void>;
}
