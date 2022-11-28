import { Count, Filter, Where } from '@loopback/repository';
import { Asesor, Inmueble } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AsesorInmuebleController {
    protected asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    find(id: string, filter?: Filter<Inmueble>): Promise<Inmueble[]>;
    create(id: typeof Asesor.prototype.id, inmueble: Omit<Inmueble, 'id'>): Promise<Inmueble>;
    patch(id: string, inmueble: Partial<Inmueble>, where?: Where<Inmueble>): Promise<Count>;
    delete(id: string, where?: Where<Inmueble>): Promise<Count>;
}
