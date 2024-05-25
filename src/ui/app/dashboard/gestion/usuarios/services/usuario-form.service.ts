import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IGrupoModel } from "@data/grupos/models/grupo.model";
import { IUsuarioModel } from "@data/usuarios/models/usuario.model";

@Injectable({ 
  providedIn: 'platform' 
})
export class UsuarioFormService {
  hidePassword: boolean = false;
  usuarioSeleccionado: IUsuarioModel | null = null;
  formUsuario: FormGroup;

  constructor() {
    this.formUsuario = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      grupos: new FormControl([])
    });
    this.setValidators();
  }

  private setValidators() {
    if (this.usuarioSeleccionado) {
      this.formUsuario.get('password')?.clearValidators();
      this.formUsuario.get('confirmPassword')?.clearValidators();
    } else {
      this.formUsuario.get('password')?.setValidators([Validators.required]);
      this.formUsuario.get('confirmPassword')?.setValidators([Validators.required]);
    }
    this.formUsuario.get('password')?.updateValueAndValidity();
    this.formUsuario.get('confirmPassword')?.updateValueAndValidity();
  }

  onCheckboxChange(e: any, grupo: IGrupoModel) {
    const grupos = this.formUsuario.get('grupos');
    if (e.checked) {
      grupos?.value.push(grupo)
    } else {
      const index = grupos?.value.findIndex((x: IGrupoModel) => x.id === grupo.id);
      grupos?.value.splice(index, 1);
    }
  }

  isChecked(grupo: IGrupoModel): boolean {
    const grupos = this.formUsuario.get('grupos');
    return grupos?.value?.some((x: IGrupoModel) => x.id === grupo.id);
  }

  toggleSeleccionar(usuario: IUsuarioModel) {
    if (this.usuarioSeleccionado) {
      this.limpiar();
    } else {
      this.usuarioSeleccionado = usuario;
      this.formUsuario.reset({
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        correo: usuario.correo,
        password: '',
        confirmPassword: '',
        grupos: []
      });
      this.setValidators();
    }
  }

  hasError(field: string, type: string) {
    return this.formUsuario.get(field)?.hasError(type);
  }

  limpiar() {
    this.usuarioSeleccionado = null;
    this.formUsuario.reset({
      nombres: '',
      apellidos: '',
      correo: '',
      password: '',
      confirmPassword: '',
      grupos: []
    });
    this.setValidators();
  }

  submit() {
    this.formUsuario.markAllAsTouched();
    if (this.formUsuario.valid) {
      if (this.usuarioSeleccionado) {
        console.log("ACTUALIZAR", this.formUsuario);
      } else {
        console.log("GENERAR", this.formUsuario);
      }
    }
  }
}
