import { Count, Filter, Where } from '@loopback/repository';
import { Inmobiliaria, Inmueble } from '../models';
import { InmobiliariaRepository } from '../repositories';
export declare class InmobiliariaInmuebleController {
    protected inmobiliariaRepository: InmobiliariaRepository;
    constructor(inmobiliariaRepository: InmobiliariaRepository);
    find(id: string, filter?: Filter<Inmueble>): Promise<Inmueble[]>;
    create(id: typeof Inmobiliaria.prototype.id, inmueble: Omit<Inmueble, 'id'>): Promise<Inmueble>;
    patch(id: string, inmueble: Partial<Inmueble>, where?: Where<Inmueble>): Promise<Count>;
    delete(id: string, where?: Where<Inmueble>): Promise<Count>;
}
