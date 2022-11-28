/// <reference types="express" />
import { AuthenticationStrategy } from '@loopback/authentication';
import { Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { AutenticacionService } from '../services';
export declare class EstrategiaAsesor implements AuthenticationStrategy {
    servicioAutenticacion: AutenticacionService;
    name: string;
    constructor(//Constructor para inicializar el servicio de autenticacion
    servicioAutenticacion: AutenticacionService);
    authenticate(request: Request): Promise<UserProfile | undefined>;
}
