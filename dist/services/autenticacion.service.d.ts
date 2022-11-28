import { Credenciales, Usuario } from '../models';
import { UsuarioRepository } from '../repositories/usuario.repository';
export declare class AutenticacionService {
    repositoryUser: UsuarioRepository;
    constructor(repositoryUser: UsuarioRepository);
    GenerarPassword(): any;
    EncriptarPassword(password: string): any;
    IdentificarUsuario(credenciales: Credenciales): false | Promise<(Usuario & import("../models").UsuarioRelations) | null>;
    GenerarToken(usuario: Usuario): any;
    ValidarToken(token: string): any;
}
