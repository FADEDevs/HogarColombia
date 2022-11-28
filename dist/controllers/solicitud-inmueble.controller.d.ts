import { Solicitud, Inmueble } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudInmuebleController {
    solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    getInmueble(id: typeof Solicitud.prototype.id): Promise<Inmueble>;
}
