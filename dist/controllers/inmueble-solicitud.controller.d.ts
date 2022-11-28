import { Count, Filter, Where } from '@loopback/repository';
import { Inmueble, Solicitud } from '../models';
import { InmuebleRepository } from '../repositories';
export declare class InmuebleSolicitudController {
    protected inmuebleRepository: InmuebleRepository;
    constructor(inmuebleRepository: InmuebleRepository);
    find(id: string, filter?: Filter<Solicitud>): Promise<Solicitud[]>;
    create(id: typeof Inmueble.prototype.id, solicitud: Omit<Solicitud, 'id'>): Promise<Solicitud>;
    patch(id: string, solicitud: Partial<Solicitud>, where?: Where<Solicitud>): Promise<Count>;
    delete(id: string, where?: Where<Solicitud>): Promise<Count>;
}
