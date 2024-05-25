import { Mapper } from "@base/mapper"
import { IFormRegisterEntity } from "../entities/register.entity"
import { IFormRegisterModel } from "@data/register/models/formRegister.model"

export class RegistroMapper extends Mapper<IFormRegisterEntity, IFormRegisterModel> {
  override mapFrom(param: IFormRegisterEntity): IFormRegisterModel {
    return {
      nombre: param.nombre,
      razonSocial: param.razonSocial,
      ruc: param.ruc,
      telefono: param.telefono,
      direccion: param.direccion,
      email: param.email,
      firstName: param.firstName,
      lastName: param.lastName,
      userEmail: param.userEmail,
      confirmPassword: param.confirmPassword,
      password: param.password,
    }
  }
  override mapTo(param: IFormRegisterModel): IFormRegisterEntity {
    return {
      nombre: param.nombre,
      razonSocial: param.razonSocial,
      ruc: param.ruc,
      telefono: param.telefono,
      direccion: param.direccion,
      email: param.email,
      firstName: param.firstName,
      lastName: param.lastName,
      userEmail: param.userEmail,
      confirmPassword: param.confirmPassword,
      password: param.password,
    }
  }
}