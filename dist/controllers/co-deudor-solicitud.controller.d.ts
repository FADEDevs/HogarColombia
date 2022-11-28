import { CoDeudor, Solicitud } from '../models';
import { CoDeudorRepository } from '../repositories';
export declare class CoDeudorSolicitudController {
    coDeudorRepository: CoDeudorRepository;
    constructor(coDeudorRepository: CoDeudorRepository);
    getSolicitud(id: typeof CoDeudor.prototype.id): Promise<Solicitud>;
}
