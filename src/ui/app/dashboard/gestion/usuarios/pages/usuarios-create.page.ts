import { Component, Injectable } from '@angular/core';
import { UsuariosModule } from '../usuarios.module';
import { UsuarioUsecaseService } from '../services/usuario-usecase.service';
import { UsuarioFormService } from '../services/usuario-form.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { IGrupoModel, IGrupoPermisoModel } from '@data/grupos/models/grupo.model';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = `Primera pagina`;
  itemsPerPageLabel = `Items por pagina:`;
  lastPageLabel = `Última pagina`;

  nextPageLabel = 'Siguiente';
  previousPageLabel = 'Anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `0 - 0 de 0`;
    }
    const startIndex = page * pageSize;
    const endIndex = Math.min(startIndex + pageSize, length);
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }
}

@Component({
  selector: 'usuarios-create-page',
  standalone: true,
  imports: [
    UsuariosModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  templateUrl: './usuarios-create.page.html',
})
export class UsuariosCreatePage {

  constructor(
    public servicio: UsuarioUsecaseService,
    public servicioForm: UsuarioFormService
  ) { }

  getPermisos() {
    const permisos = this.servicioForm.gruposSeleccionados.reduce((acc: IGrupoPermisoModel[], curr: IGrupoModel) => {
      const newPermisos = curr.permisos.filter(p => !acc.some(ap => ap.id === p.id))
      return acc.concat(newPermisos)
    }, [] as IGrupoPermisoModel[])
    return permisos
  }

}
