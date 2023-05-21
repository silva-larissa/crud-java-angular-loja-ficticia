import { Observable } from 'rxjs';
import { NotaFiscal } from './../../model/notafiscal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotaFiscalService {

  private readonly API = 'api/notafiscal'

  constructor(private http: HttpClient) { }

  getNotasFiscais() {
    return this.http.get<NotaFiscal[]>(this.API);
  }

  getNotaFiscalPorId(id: number): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.get(url);
  }

  //CRUD

  create(notaFiscal: NotaFiscal) {
    return this.http.post<NotaFiscal>(this.API, notaFiscal);
  }

  update(notaFiscal: NotaFiscal) {
    const url = `${this.API}/${notaFiscal.id}`;
    return this.http.put<NotaFiscal>(url, notaFiscal);
  }

  delete(id: number): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.delete(url);
  }

}
