import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from './../../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})

export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];

  constructor (private service: ProdutoService){}

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos(){
    this.service.getProdutos().subscribe(_produtos => this.produtos = _produtos);
  }

  criarProduto(ev: any){
    this.service.create(ev.data).subscribe(_produto => ev.data = _produto);
  }

  atualizarProduto(ev: any){
    this.service.update(ev.data).subscribe();
  }

  removerProduto(ev: any){
    this.service.delete(ev.data?.id).subscribe();
  }

}
