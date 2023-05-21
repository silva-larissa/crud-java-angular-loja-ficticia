import { Cliente } from './cliente';
import { ProdutoCompra } from './produto-compra';

export class NotaFiscal {

  constructor(value?: any){
    if(value){
      this.id = value.id;
      this.numeroNota = value.numeroNota;
      this.dataEmissao = value.dataEmissao;
      this.cliente = new Cliente(value.cliente);
      this.valorNotaFiscal = value.valorNotaFiscal;

      if(value.produtosCompra && !value.produtosCompra.isEmpty){
        this.produtosCompra = [];
        for (let obj of value.produtosCompra){
          this.produtosCompra.push(new ProdutoCompra(obj));
        }
      }
    }
  }

  id!: number;
  numeroNota!: number;
  dataEmissao!: Date;
  cliente!: Cliente;
  valorNotaFiscal!: number;
  produtosCompra!: ProdutoCompra[];
}
