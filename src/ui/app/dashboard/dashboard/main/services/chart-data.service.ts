import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@base/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {

  constructor(private http: HttpClient){}

  uploadRMSFile(file:File):Observable<any>{
    const formData = new FormData();
    formData.append('file',file);

    return this.http.post(`${API_URL}/metricas/aceleracion`, formData);
  }

  uploadTemperatureFile(file:File):Observable<any>{
    const formData = new FormData();
    formData.append('file',file);
    return this.http.post(`${API_URL}/metricas/temperatura`,formData);
  }

  uploadVelocidadFile(file:File):Observable<any>{
    const formData = new FormData();
    formData.append('file',file);
    return this.http.post(`${API_URL}/metricas/velocidad`,formData)
  }
}
