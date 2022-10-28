import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador = require('generate-password');
const cryptoJS = require('crypto-js');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  GenerarPassword(){
    let password = generador.generate({
      length: 8,//Indicamos la longitud de la contraseña a generar
      numbers: true//Indicamos que la contraseña se genere con números
    })
    return password;
  }

  EncriptarPassword(password:string){
    let passwordE = cryptoJS.MD5(password);//Encriptamos la contraseña ingresada cómo argumento
    return passwordE;
  }
}
