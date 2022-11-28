import { Inmueble, Asesor } from '../models';
import { InmuebleRepository } from '../repositories';
export declare class InmuebleAsesorController {
    inmuebleRepository: InmuebleRepository;
    constructor(inmuebleRepository: InmuebleRepository);
    getAsesor(id: typeof Inmueble.prototype.id): Promise<Asesor>;
}
