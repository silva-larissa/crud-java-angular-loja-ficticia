import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private readonly API = 'api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  getClientePorId(id: number): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.get(url);
  }

  //CRUD

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.API}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  delete(id: number): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.delete(url);
  }

}
