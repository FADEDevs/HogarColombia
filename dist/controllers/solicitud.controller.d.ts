import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Solicitud } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudController {
    solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    create(solicitud: Omit<Solicitud, 'id'>): Promise<Solicitud>;
    count(where?: Where<Solicitud>): Promise<Count>;
    find(filter?: Filter<Solicitud>): Promise<Solicitud[]>;
    updateAll(solicitud: Solicitud, where?: Where<Solicitud>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Solicitud>): Promise<Solicitud>;
    updateById(id: string, solicitud: Solicitud): Promise<void>;
    replaceById(id: string, solicitud: Solicitud): Promise<void>;
    deleteById(id: string): Promise<void>;
}
