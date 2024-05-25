import { Mapper } from "@base/mapper"
import { IFormLoginEntity } from "../entities/login.entity"
import { IFormLoginModel } from "@data/login/models/formLogin.model"

export class LoginMapper extends Mapper<IFormLoginEntity, IFormLoginModel> {
  override mapFrom(param: IFormLoginEntity): IFormLoginModel {
    return {
      correo: param.email,
      password: param.password,
    }
  }
  override mapTo(param: IFormLoginModel): IFormLoginEntity {
    return {
      email: param.correo,
      password: param.password,
    }
  }
}