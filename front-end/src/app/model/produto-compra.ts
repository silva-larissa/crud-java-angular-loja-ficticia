import { Produto } from './produto';
import { NotaFiscal } from "./notafiscal";

export class ProdutoCompra {

  constructor(value?: any){
    if(value){
      this.id = value.id;
      this.codigo = value.codigo;
      this.notaFiscal = value.notaFiscal;
      this.produto = value.produto;
      this.quantidade = value.quantidade;
      this.valorParcial = value.valorParcial;
    }
  }

  id!: number;
  codigo!: string;
  notaFiscal!: NotaFiscal;
  produto!: Produto;
  quantidade!: number;
  valorParcial!: number;
}
