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
    id: 'abcdefg',
    nombre: 'AMS-Entity',
    type: 'entidad',
    hijos: [
      {
        id: 'abcdefh',
        nombre: 'AMS-Folder',
        type: 'folder',
        hijos: [
          {
            id: 'abcdefi',
            nombre: 'AMS-Folder',
            type: 'folder',
            hijos: []
          },
        ]
      },
      {
        id: 'abcdefgj',
        nombre: 'AMS-Folder',
        type: 'folder',
        hijos: [
          {
            id: 'abcdefi1',
            nombre: 'AMS-Maquina',
            type: 'maquina',
            hijos: [
              {
                id: 'abcdefi2',
                nombre: 'AMS-Componente',
                type: 'componente',
                hijos: [
                  {
                    id: 'abcdefi5',
                    nombre: 'AMS-Punto',
                    type: 'punto_monitoreo',
                    hijos: [
                      {
                        id: 'abcdef11',
                        nombre: 'AMS-Metrica1',
                        type: 'metrica',
                        hijos: []
                      },
                      {
                        id: 'abcdef12',
                        nombre: 'AMS-Metrica2',
                        type: 'metrica',
                        hijos: []
                      },
                      {
                        id: 'abcdef13',
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
        id: 'abcdefgj',
        nombre: 'AMS-Folder',
        type: 'folder',
        hijos: [
          {
            id: 'abcdefi1',
            nombre: 'AMS-Maquina',
            type: 'maquina',
            hijos: [
              {
                id: 'abcdefi2',
                nombre: 'AMS-Componente',
                type: 'componente',
                hijos: [
                  {
                    id: 'abcdefi5',
                    nombre: 'AMS-Punto',
                    type: 'punto_monitoreo',
                    hijos: [
                      {
                        id: 'abcdef11',
                        nombre: 'AMS-Metrica1',
                        type: 'metrica',
                        hijos: []
                      },
                      {
                        id: 'abcdef12',
                        nombre: 'AMS-Metrica2',
                        type: 'metrica',
                        hijos: []
                      },
                      {
                        id: 'abcdef13',
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