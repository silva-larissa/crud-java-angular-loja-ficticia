import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { NotaFiscalService } from '../../services/nota-fiscal.service';
import { ProdutoService } from './../../services/produto.service';
import { ProdutoCompra } from './../../../model/produto-compra';
import { NotaFiscal } from './../../../model/notafiscal';
import { Cliente } from 'src/app/model/cliente';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-nota-fiscal',
  templateUrl: './nota-fiscal.component.html',
  styleUrls: ['./nota-fiscal.component.scss']
})

export class NotaFiscalComponent implements OnInit {

  notas: NotaFiscal[] = [];
  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  itensNota: ProdutoCompra[] = [];

  constructor(
    private service: NotaFiscalService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService) {}

  ngOnInit() {
    this.listarNotasFiscais();
    this.listarClientes();
    this.listarProdutos();
  }

  listarNotasFiscais(){
    this.service.getNotasFiscais().subscribe(notas => {
      this.notas = [];
      for (let nota of notas){
        this.notas.push(new NotaFiscal(nota));
      }
    });
  }

  listarClientes(){
    this.clienteService.getClientes().subscribe(_clientes => {
      for (let cliente of _clientes){
        this.clientes.push(new Cliente(cliente));
      }
    });
  }

  listarProdutos(){
    this.produtoService.getProdutos().subscribe(_produtos => {
      this.produtos = _produtos;
    });
  }

  //Tratamento do erro E1052 do dx-data-grid
  onInitProdutoCompra(ev: any){
    if(ev.data && !ev.data.produtosCompra) {
      ev.data.produtosCompra = [];
    }
  }

  valueChangeProduto(ev: any, data: any){
    data.setValue(ev);
  }

  salvarItem(ev: any, data: any){
    let valorParcial;

    if (ev.changes && ev.changes.length > 0){

      switch(ev.changes[0].type){

        case 'insert':
          for(let item of ev.changes){
            valorParcial = item.data.produto.valorUnitario * item.data.quantidade;
            item.data.valorParcial = valorParcial;
          }
          break;

        case 'update':
          for(let item of ev.changes){
            let quantidade = item.data.quantidade;
            let produto = item.data.produto;
            let key = item.key;

            switch(true){
              case (quantidade != null && produto != null):
                valorParcial = produto.valorUnitario * quantidade;
                item.data.valorParcial = valorParcial;
                break;

              case (quantidade == null && produto !== null):
                valorParcial = produto.valorUnitario * key.quantidade;
                item.data.valorParcial = valorParcial;
                break;

              case (quantidade != null && produto == null):
                valorParcial = key.produto.valorUnitario * quantidade;
                item.data.valorParcial = valorParcial;
                break;
            }
          }
          break;
      }
    }
  }

  getValueCliente(value: Cliente): Cliente {
    if(value){
      for (let cliente of this.clientes){
        if(value.id == cliente.id){
          return cliente;
        }
      }
    }
    return value;
  }

  setValueCliente(cliente: Cliente, data: any){
    data.setValue(cliente);
  }

  getValueProduto(value: Produto): Produto {
    if(value && value){
      for (let produto of this.produtos){
        if(value.id == produto.id){
          return produto;
        }
      }
    }
    return value;
  }

  setValueProduto(produto: Produto, data: any){
    data.setValue(produto);
  }

  onSavedNotaFiscal(ev: any){
    if (ev.changes && ev.changes.length > 0) {
      for (let change of ev.changes) {
        switch (change.type) {
          case 'insert':
            this.criarNotaFiscal(change.data as NotaFiscal);
          break;

          case 'update':
            this.atualizarNotaFiscal(change.key as NotaFiscal);
          break;

          case 'remove':
            this.removerNotaFiscal(change.key.id);
          break;
        }
      }
    }
  }

  criarNotaFiscal(data: NotaFiscal){
    let _nota = this.service.create(data);
    return lastValueFrom(_nota);
  }

  atualizarNotaFiscal(data: NotaFiscal){
    let _nota = this.service.update(data);
    return lastValueFrom(_nota);
  }

  removerNotaFiscal(id: number){
    let _nota = this.service.delete(id);
    return lastValueFrom(_nota);
  }

}
