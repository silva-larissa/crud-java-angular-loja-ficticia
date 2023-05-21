import { ProdutoCompraService } from './shared/services/produto-compra.service';
import { NotaFiscalService } from './shared/services/nota-fiscal.service';
import { ClienteService } from './shared/services/cliente.service';
import { ProdutoService } from './shared/services/produto.service';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoComponent } from './shared/components/produto/produto.component';
import { PaginaProdutoComponent } from './pages/pagina-produto/pagina-produto.component';
import { ClienteComponent } from './shared/components/cliente/cliente.component';
import { PaginaClienteComponent } from './pages/pagina-cliente/pagina-cliente.component';
import { PaginaNotaFiscalComponent } from './pages/pagina-nota-fiscal/pagina-nota-fiscal.component';
import { NotaFiscalComponent } from './shared/components/nota-fiscal/nota-fiscal.component';
import { DxTextBoxModule, DxDataGridModule, DxSelectBoxModule, DxBoxModule, DxTemplateModule, DxFormModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ValueDataPipe } from './shared/pipe/value-data.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    PaginaProdutoComponent,
    ClienteComponent,
    PaginaClienteComponent,
    NotaFiscalComponent,
    PaginaNotaFiscalComponent,
    ValueDataPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    AppRoutingModule,
    DxTextBoxModule,
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxBoxModule,
    DxTemplateModule,
    DxFormModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    ProdutoService,
    ClienteService,
    NotaFiscalService,
    ProdutoCompraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
