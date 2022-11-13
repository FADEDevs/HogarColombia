import {service} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Keys} from '../configuracion/Keys';
import {Asesor, CambioPass, Cliente, Credenciales, Usuario} from '../models';
import {
  AsesorRepository,
  ClienteRepository,
  UsuarioRepository,
} from '../repositories';
import {AutenticacionService} from '../services';
const fetch = require('node-fetch');

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
    @repository(AsesorRepository)
    public asesorRepository: AsesorRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService,
  ) {}

  @post('/Registro')
  @response(200, {
    description: 'Registro de usuarios',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'id'>,
  ): Promise<Usuario> {
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
      let cliente: Cliente = await this.clienteRepository.create(client);
    } else if (user.rol.includes('asesor')) {
      let asesor = {
        estado: user.estado,
        usuarioId: user.id,
      };
      let adviser: Asesor = await this.asesorRepository.create(asesor);
    }

    // Notificar al usuario
    let destino = usuario.correo;
    let asunto = 'Registro en la plataforma';
    let asuntoReformateado = asunto.toString();
    let contenido = `Hola ${usuario.nombres}, su nombre de usuario es: ${usuario.correo} y su contraseña es: ${password}`;
    let contenidoFormateado = contenido.toString();
    fetch(
      `${Keys.urlnotificacion}/e-mail?correo_destino=${destino}&asunto=${asuntoReformateado}&contenido=${contenidoFormateado}`,
    ).then((data: any) => {
      console.log(data);
    });

    return user;
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Usuario) where?: Where<Usuario>): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'})
    filter?: FilterExcludingWhere<Usuario>,
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
  // METODOS CREADOS
  // Metodo para la identificación de usuarios
  @post('/Login', {
    responses: {
      '200': {
        description: 'Identificación de los usuarios',
      },
    },
  })
  async identificar(
    @requestBody() credenciales: Credenciales, //Objeto de las credenciales
  ): Promise<Usuario | null> {
    let passwordE = this.servicioAutenticacion.EncriptarPassword(
      credenciales.password,
    );
    let user = await this.usuarioRepository.findOne({
      where: {
        correo: credenciales.email,
        contrasena: passwordE, //Aquí se compara la contraseña encriptada de la BD, con la contraseña que llega del login (Sin encriptar)
      },
    });
    return user;
  }
  //Metodo para identificación de usuarios y token de seguridad.
  @post('/LoginToken')
  @response(200, {
    description: 'Identificar a las personas y generar un token.',
  })
  async identificarT(@requestBody() credenciales: Credenciales) {
    credenciales.password = this.servicioAutenticacion.EncriptarPassword(
      credenciales.password,
    ); //Encriptando la contraseña que se recibe
    let user = await this.servicioAutenticacion.IdentificarUsuario(
      credenciales,
    );
    if (user) {
      let token = this.servicioAutenticacion.GenerarToken(user);
      return {
        datos: {
          nombre: user.nombres,
          id: user.id,
        },
        tk: token,
      };
    } else {
      throw new HttpErrors[401]('Datos invalidos!');
    }
  }

  //*Recuperacion de la contraseña
  @post('/RecuperarPass')
  @response(200, {
    description: 'Recuperacion de la contraseña de usuario',
  })
  async recuperar(@requestBody() correo: string): Promise<boolean> {
    let user = await this.usuarioRepository.findOne({
      where: {
        correo: correo,
      },
    });
    if (user) {
      let contraseña = this.servicioAutenticacion.GenerarPassword();
      let clavecifrada =
        this.servicioAutenticacion.EncriptarPassword(contraseña);
      user.contrasena = clavecifrada;
      await this.usuarioRepository.updateById(user.id, user);

      //*Notificar el cambio de contraseña al usuario/

      let destino = user.correo;
      let asunto = 'Recuperacion de clave desde la APP-HogarColombia';
      let contenido = `Hola ${user.nombres}, se ha realizado la recuperación de su contraseña para el ingreso a nuestra App. Su nueva contraseña es: ${contraseña}`;

      fetch(
        //`http://localhost:5000/e-mail?email_destino=${destino}&asunto=${asunto}&mensaje=${contenido}`,
        `${Keys.urlnotificacion}/e-mail?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`,
      ).then((data: any) => {
        console.log(data);
      });
      console.log('Se ha enviado la nueva contraseña al usuario');
      return true;
    } else {
      console.log('el usuario no fue encontrado');
      return false;
    }
  }

  //*Modificar la contraseña por el usuario
  @post('/ModificarPass')
  @response(200, {
    description: 'Modificar clave de parte del usuario',
  })
  async modificar(@requestBody() datos: CambioPass): Promise<boolean> {
    //A CambioPass hay que contruirle un modelo para sus datos
    let user = await this.usuarioRepository.findOne({
      where: {
        contrasena: this.servicioAutenticacion.EncriptarPassword(datos.cActual),
      },
    });
    console.log(user);
    if (user) {
      if (datos.cNueva == datos.cValidada) {
        user.contrasena = this.servicioAutenticacion.EncriptarPassword(
          datos.cNueva,
        );
        await this.usuarioRepository.updateById(user.id, user);
        //*Notificar el cambio de contraseña
        let destino = user.correo;
        let asunto =
          'Modificacion de la contraseña por parte del usuar en la app HogarColombia';
        let contenido = `Hola, ${user.nombres}, usted a realizado un cambio en su contraseña. Su nueva contraseña es: ${datos.cNueva}, siga el siguiente link para modificarla: http://google.com`;

        fetch(
          `${Keys.urlnotificacion}/e-mail?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`,
          // `http://localhost:5000/e-mail?email_destino=${destino}&asunto=${asunto}&contenido=${contenido}`,
        ).then((data: any) => {
          console.log(data);
        });
        console.log('El cambio a sido exitoso');
        return true;
      } else {
        console.log('Las contraseñas no coinciden');
        return true;
      }
    } else {
      console.log('El usuario no existen en la BD');
      return false;
    }
  }
}
