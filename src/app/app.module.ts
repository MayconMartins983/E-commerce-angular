import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { EsquecerSenhaComponent } from './components/esquecer-senha/esquecer-senha.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoDetalhesComponent } from './shared/produto-detalhes/produto-detalhes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValorPipe } from './shared/pipes/valor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    EsquecerSenhaComponent,
    HomeComponent,
    ProdutosComponent,
    ProdutoDetalhesComponent,
    ValorPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
