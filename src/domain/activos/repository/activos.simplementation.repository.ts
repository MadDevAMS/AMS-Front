import { Observable, of } from 'rxjs';
import { ActivosMapper } from '../mappers/activos.mapper';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@base/environment';
import { IApiResponse } from '@base/response';
import { ActivoRepository } from '@data/activos/repository/activos.repository';
import { IActivoEntity } from '../entities/activo.entity';

export class ActivosImplementationRepository extends ActivoRepository {

  mapper = new  ActivosMapper();

  dataFalsa: IActivoEntity = {
    id: 'entidad1',
    nombre: 'AMS-Entity',
    type: 'entidad',
    hijos: [
      {
        id: 'folder1',
        nombre: 'AMS-Folder',
        type: 'folder_ambiente',
        hijos: [
          {
            id: 'folder2',
            nombre: 'AMS-Folder',
            type: 'folder_ambiente',
            hijos: []
          },
        ]
      },
      {
        id: 'folder3',
        nombre: 'AMS-Folder',
        type: 'folder_proceso',
        hijos: [
          {
            id: 'maquina1',
            nombre: 'AMS-Maquina',
            type: 'maquina',
            hijos: [
              {
                id: 'comp1',
                nombre: 'AMS-Componente',
                type: 'componente',
                hijos: [
                  {
                    id: 'punto1',
                    nombre: 'AMS-Punto',
                    type: 'punto_monitoreo',
                    hijos: [
                      {
                        id: 'metrica1',
                        nombre: 'AMS-Metrica1',
                        type: 'metrica',
                        hijos: []
                      },
                      {
                        id: 'metrica2',
                        nombre: 'AMS-Metrica2',
                        type: 'metrica',
                        hijos: []
                      },
                      {
                        id: 'metrica3',
                        nombre: 'AMS-Metrica3',
                        type: 'metrica',
                        hijos: []
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        id: 'folder9',
        nombre: 'AMS-Folder',
        type: 'folder_ambiente',
        hijos: [
          {
            id: 'maquina4',
            nombre: 'AMS-Maquina',
            type: 'maquina',
            hijos: [
              {
                id: 'comp4',
                nombre: 'AMS-Componente',
                type: 'componente',
                hijos: [
                  {
                    id: 'punto9',
                    nombre: 'AMS-Punto',
                    type: 'punto_monitoreo',
                    hijos: [
                      {
                        id: 'metrica5',
                        nombre: 'AMS-Metrica1',
                        type: 'metrica',
                        hijos: []
                      },
                      {
                        id: 'metrica6',
                        nombre: 'AMS-Metrica2',
                        type: 'metrica',
                        hijos: []
                      },
                      {
                        id: 'metrica7',
                        nombre: 'AMS-Metrica3',
                        type: 'metrica',
                        hijos: []
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
    ],
  }

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getActivos(): Observable<IApiResponse<IActivoEntity>> {
    return of({
      status: 201,
      message: 'Recuperaciòn de datos exitosa',
      totalRecords: 1,
      data: this.dataFalsa,
      errors: null
    })
    // return this.http.get<IApiResponse<IActivoEntity>>(`${API_URL}/Activos`)
  }
  
}