export class Cliente {

  constructor(value?: any){
    if(value){
      this.id = value.id;
      this.cpf = value.cpf;
      this.nome = value.nome;
    }
  }

  id?: number;
  cpf!: string;
  nome!: string;

}
