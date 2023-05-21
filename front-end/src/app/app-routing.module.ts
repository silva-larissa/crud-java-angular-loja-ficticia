import { PaginaNotaFiscalComponent } from './pages/pagina-nota-fiscal/pagina-nota-fiscal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { PaginaProdutoComponent } from './pages/pagina-produto/pagina-produto.component';
import { PaginaClienteComponent } from './pages/pagina-cliente/pagina-cliente.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: PaginaClienteComponent,
  },
  {
    path: 'produtos',
    component: PaginaProdutoComponent,
  },
  {
    path: 'notafiscal',
    component: PaginaNotaFiscalComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
  ]
})
export class AppRoutingModule { }
