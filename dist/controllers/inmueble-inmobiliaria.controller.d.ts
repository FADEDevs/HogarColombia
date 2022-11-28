import { Inmueble, Inmobiliaria } from '../models';
import { InmuebleRepository } from '../repositories';
export declare class InmuebleInmobiliariaController {
    inmuebleRepository: InmuebleRepository;
    constructor(inmuebleRepository: InmuebleRepository);
    getInmobiliaria(id: typeof Inmueble.prototype.id): Promise<Inmobiliaria>;
}
