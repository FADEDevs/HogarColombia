/// <reference types="express" />
import { AuthenticationStrategy } from '@loopback/authentication';
import { Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { AutenticacionService } from '../services';
export declare class EstrategiaAdministrador implements AuthenticationStrategy {
    servicioAutenticacion: AutenticacionService;
    name: string;
    constructor(servicioAutenticacion: AutenticacionService);
    authenticate(request: Request): Promise<UserProfile | undefined>;
}
