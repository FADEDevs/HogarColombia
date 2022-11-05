import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Keys} from '../configuracion/Keys';
import {Credenciales, Usuario} from '../models';
import {UsuarioRepository} from '../repositories/usuario.repository';
const generador = require('generate-password');
const cryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public repositoryUser: UsuarioRepository
  ) { }

  GenerarPassword() {
    let password = generador.generate({
      length: 8,//Indicamos la longitud de la contraseña a generar
      numbers: true//Indicamos que la contraseña se genere con números
    })
    return password;
  }

  EncriptarPassword(password: string) {
    let passwordE = cryptoJS.MD5(password);//Encriptamos la contraseña ingresada cómo argumento
    return passwordE;
  }
  //Metodo para identificarUsuario
  IdentificarUsuario(credenciales: Credenciales) {
    try {
      let user = this.repositoryUser.findOne({
        where: {
          correo: credenciales.email,
          contrasena: credenciales.password
        }
      });
      if (user) {
        return user; //Si User es verdadero (encontro el usuario) entonces retornara los datos
      } else {
        return false;
      }
    } catch {
      return false;
    }
  }
  //Generar el token
  GenerarToken(usuario: Usuario) {
    let token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombres + " " + usuario.apellidos,
        rol: usuario.rol
      }
    },
      //Llave para encriptar el dato
      Keys.llaveJwt
    );
    return token;
  }
  //Validar el token
  ValidarToken(token: string) {
    try {
      let datos = jwt.verify(token, Keys.llaveJwt);
      return datos;
    } catch {
      return false;
    }
  }
}
