import { Observable } from 'rxjs';
import { ProdutoCompra } from './../../model/produto-compra';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutoCompraService {

  private readonly API = 'api/produtocompra';

  constructor(private http: HttpClient) { }

  getItens(){
    return this.http.get<ProdutoCompra[]>(this.API);
  }

  create(item: ProdutoCompra): Observable<ProdutoCompra> {
    return this.http.post<ProdutoCompra>(this.API, item);
  }

  update(item: ProdutoCompra): Observable<ProdutoCompra> {
    console.log(item)
    const url = `${this.API}/${item.id}`;
    return this.http.put<ProdutoCompra>(url, item);
  }

  delete(id: number): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.delete(url);
  }

}
