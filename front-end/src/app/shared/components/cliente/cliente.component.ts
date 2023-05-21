import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import {Cliente} from "../../../model/cliente";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers: [ClienteService]
})

export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private service: ClienteService){}

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes(){
    this.service.getClientes().subscribe(_clientes => this.clientes = _clientes);
  }
  criarCliente(ev: any){
    this.service.create(ev.data).subscribe(_cliente => ev.data = _cliente);
  }

  atualizarCliente(ev: any){
    this.service.update(ev.data).subscribe();
  }

  removerCliente(ev: any){
    this.service.delete(ev.data?.id).subscribe();
  }

}
