import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CambioPass, Credenciales, Usuario } from '../models';
import { AsesorRepository, ClienteRepository, UsuarioRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class UsuarioController {
    usuarioRepository: UsuarioRepository;
    clienteRepository: ClienteRepository;
    asesorRepository: AsesorRepository;
    servicioAutenticacion: AutenticacionService;
    constructor(usuarioRepository: UsuarioRepository, clienteRepository: ClienteRepository, asesorRepository: AsesorRepository, servicioAutenticacion: AutenticacionService);
    create(usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
    count(where?: Where<Usuario>): Promise<Count>;
    find(filter?: Filter<Usuario>): Promise<Usuario[]>;
    updateAll(usuario: Usuario, where?: Where<Usuario>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Usuario>): Promise<Usuario>;
    updateById(id: string, usuario: Usuario): Promise<void>;
    replaceById(id: string, usuario: Usuario): Promise<void>;
    deleteById(id: string): Promise<void>;
    identificarT(credenciales: Credenciales): Promise<{
        datos: {
            nombre: string;
            id: string | undefined;
        };
        tk: any;
    }>;
    recuperar(correo: string): Promise<boolean>;
    modificar(datos: CambioPass): Promise<boolean>;
}
