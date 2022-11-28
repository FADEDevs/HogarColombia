"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const Keys_1 = require("../configuracion/Keys");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
const fetch = require('node-fetch');
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository, clienteRepository, asesorRepository, servicioAutenticacion) {
        this.usuarioRepository = usuarioRepository;
        this.clienteRepository = clienteRepository;
        this.asesorRepository = asesorRepository;
        this.servicioAutenticacion = servicioAutenticacion;
    }
    async create(usuario) {
        let password = this.servicioAutenticacion.GenerarPassword();
        let passwordE = this.servicioAutenticacion.EncriptarPassword(password);
        usuario.contrasena = passwordE;
        usuario.rol.toLowerCase(); //Definimos que antes de crear el usuario se guarde el rol en minuscula
        //Así quitamos el toLowerCase en las validaciones del rol
        let user = await this.usuarioRepository.create(usuario);
        if (user.rol.includes('cliente')) {
            //Si el rol contiene 'cliente' ↓
            let client = {
                celular: user.celular,
                usuarioId: user.id,
            };
            let cliente = await this.clienteRepository.create(client);
        }
        else if (user.rol.includes('asesor')) {
            let asesor = {
                estado: user.estado,
                usuarioId: user.id,
            };
            let adviser = await this.asesorRepository.create(asesor);
        }
        // Notificar al usuario
        let destino = usuario.correo;
        let asunto = 'Registro en la plataforma';
        let asuntoReformateado = asunto.toString();
        let contenido = `Hola ${usuario.nombres}, su nombre de usuario es: ${usuario.correo} y su contraseña es: ${password}`;
        let contenidoFormateado = contenido.toString();
        fetch(`${Keys_1.Keys.urlnotificacion}/e-mail?correo_destino=${destino}&asunto=${asuntoReformateado}&contenido=${contenidoFormateado}`).then((data) => {
            console.log(data);
        });
        return user;
    }
    async count(where) {
        return this.usuarioRepository.count(where);
    }
    async find(filter) {
        return this.usuarioRepository.find(filter);
    }
    async updateAll(usuario, where) {
        return this.usuarioRepository.updateAll(usuario, where);
    }
    async findById(id, filter) {
        return this.usuarioRepository.findById(id, filter);
    }
    async updateById(id, usuario) {
        await this.usuarioRepository.updateById(id, usuario);
    }
    async replaceById(id, usuario) {
        await this.usuarioRepository.replaceById(id, usuario);
    }
    async deleteById(id) {
        await this.usuarioRepository.deleteById(id);
    }
    // METODOS CREADOS
    //Metodo para identificación de usuarios y token de seguridad.
    async identificarT(credenciales) {
        credenciales.password = this.servicioAutenticacion.EncriptarPassword(credenciales.password); //Encriptando la contraseña que se recibe
        let user = await this.servicioAutenticacion.IdentificarUsuario(credenciales);
        if (user) {
            let token = this.servicioAutenticacion.GenerarToken(user);
            return {
                datos: {
                    nombre: user.nombres,
                    id: user.id,
                },
                tk: token,
            };
        }
        else {
            throw new rest_1.HttpErrors[401]('Datos invalidos!');
        }
    }
    //*Recuperacion de la contraseña
    async recuperar(correo) {
        let user = await this.usuarioRepository.findOne({
            where: {
                correo: correo,
            },
        });
        if (user) {
            let contraseña = this.servicioAutenticacion.GenerarPassword();
            let clavecifrada = this.servicioAutenticacion.EncriptarPassword(contraseña);
            user.contrasena = clavecifrada;
            await this.usuarioRepository.updateById(user.id, user);
            //*Notificar el cambio de contraseña al usuario/
            let destino = user.correo;
            let asunto = 'Recuperacion de clave desde la APP-HogarColombia';
            let contenido = `Hola ${user.nombres}, se ha realizado la recuperación de su contraseña para el ingreso a nuestra App. Su nueva contraseña es: ${contraseña}`;
            fetch(`${Keys_1.Keys.urlnotificacion}/e-mail?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`).
                then((data) => {
                console.log(data);
            });
            console.log('Se ha enviado la nueva contraseña al usuario');
            return true;
        }
        else {
            console.log('el usuario no fue encontrado');
            return false;
        }
    }
    //*Modificar la contraseña por el usuario
    async modificar(datos) {
        //A CambioPass hay que contruirle un modelo para sus datos
        let user = await this.usuarioRepository.findOne({
            where: {
                contrasena: this.servicioAutenticacion.EncriptarPassword(datos.cActual),
            },
        });
        console.log(user);
        if (user) {
            if (datos.cNueva == datos.cValidada) {
                user.contrasena = this.servicioAutenticacion.EncriptarPassword(datos.cNueva);
                await this.usuarioRepository.updateById(user.id, user);
                //*Notificar el cambio de contraseña
                let destino = user.correo;
                let asunto = 'Modificacion de la contraseña por parte del usuar en la app HogarColombia';
                let contenido = `Hola, ${user.nombres}, usted a realizado un cambio en su contraseña. Su nueva contraseña es: ${datos.cNueva}, siga el siguiente link para modificarla: http://google.com`;
                fetch(`${Keys_1.Keys.urlnotificacion}/e-mail?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
                    .then((data) => {
                    console.log(data);
                });
                console.log('El cambio a sido exitoso');
                return true;
            }
            else {
                console.log('Las contraseñas no coinciden');
                return true;
            }
        }
        else {
            console.log('El usuario no existen en la BD');
            return false;
        }
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/Registro'),
    (0, rest_1.response)(200, {
        description: 'Registro de usuarios',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Usuario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Usuario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.post)('/Login'),
    (0, rest_1.response)(200, {
        description: 'Identificar a las personas y generar un token.',
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Credenciales]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "identificarT", null);
tslib_1.__decorate([
    (0, rest_1.post)('/RecuperarPass/{correo}'),
    (0, rest_1.response)(200, {
        description: 'Recuperacion de la contraseña de usuario',
    }),
    tslib_1.__param(0, rest_1.param.path.string('correo')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "recuperar", null);
tslib_1.__decorate([
    (0, rest_1.post)('/ModificarPass'),
    (0, rest_1.response)(200, {
        description: 'Modificar clave de parte del usuario',
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.CambioPass]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "modificar", null);
UsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    tslib_1.__param(3, (0, core_1.service)(services_1.AutenticacionService)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository,
        repositories_1.ClienteRepository,
        repositories_1.AsesorRepository,
        services_1.AutenticacionService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map