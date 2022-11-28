import { Solicitud, Cliente } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudClienteController {
    solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    getCliente(id: typeof Solicitud.prototype.id): Promise<Cliente>;
}
