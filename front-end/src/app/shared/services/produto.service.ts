import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/model/produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private readonly API = 'api/produtos';

  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get<Produto[]>(this.API);
  }

  getProdutoPorId(id: number): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.get(url);
  }

  //CRUD

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API, produto);
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.API}/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }

  delete(id: number): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.delete(url);
  }

}




