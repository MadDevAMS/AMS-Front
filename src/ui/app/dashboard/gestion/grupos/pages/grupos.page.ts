import { Component } from '@angular/core';
import { CardLayout } from '../../../../shared/layouts/card.layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { TablaModule } from '../components/tabla/tabla.module';
import { GrupoDataModule } from '../../../../../../data/grupos/grupo.data.module';
import { PermisoDataModule } from '../../../../../../data/permisos/permiso.data.module';
import { GetAllPermisosUsecase } from '../../../../../../data/permisos/usecases/get-all-permisos.usecase';
import { GetAllGruposUsecase } from '../../../../../../data/grupos/usecases/get-all-grupos.usecase';
import { IPermisoModel } from '../../../../../../data/permisos/models/permiso.model';
import { IGrupoModel } from '../../../../../../data/grupos/models/grupo.model';

@Component({
  selector: 'grupos-page',
  standalone: true,
  imports: [
    CardLayout,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckbox,
    MatRippleModule,
    ReactiveFormsModule,
    MatExpansionModule,
    TablaModule,
    FormsModule,

    GrupoDataModule,
    PermisoDataModule
  ],
  templateUrl: './grupos.page.html',
})
export class GruposPage {

  permisos: IPermisoModel[] = []
  grupos: IGrupoModel[] = []

  formGrupo!: FormGroup
  grupoSeleccionado: IGrupoModel | null = null

  constructor(
    private getAllPermisosUsecase: GetAllPermisosUsecase,
    private getAllGruposUsecase: GetAllGruposUsecase
  ) {
    this.formGrupo = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl(''),
    })

    this.getAllPermisosUsecase.execute().subscribe(permisos => {
      this.permisos = permisos
    })

    this.getAllGruposUsecase.execute().subscribe(grupos => {
      this.grupos = grupos
    })
  }

  hasError(field: string, type: string) {
    return this.formGrupo.get(field)?.hasError(type);
  }

  limpiar() {
    this.formGrupo.reset({
      nombre: '',
      descripcion: ''
    })
  }

  seleccionar(grupo: IGrupoModel) {
    this.grupoSeleccionado = grupo
    this.formGrupo.reset({
      nombre: grupo.nombre,
      descripcion: grupo.descripcion
    })
  }

  generarGrupo() {
    this.formGrupo.markAllAsTouched()
  }
}
