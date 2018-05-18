import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { FormsModule } from '@angular/forms';
import { CriaIngredienteComponent } from './ingrediente/cria-ingrediente/cria-ingrediente.component';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidenavComponent } from './template/sidenav/sidenav.component';
import { ListaIngredienteComponent } from './ingrediente/lista-ingrediente/lista-ingrediente.component';
import { IngredienteService } from './shared/ingrediente.service';
import { InputComponent } from './shared/input/input.component';

let routes = [
  { path: "ingrediente", component: ListaIngredienteComponent },
  { path: "cria-ingrediente", component: CriaIngredienteComponent },
  { path: "**", redirectTo: "/ingrediente" }
]

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    CriaIngredienteComponent,
    ListaIngredienteComponent,
    NavbarComponent,
    SidenavComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    IngredienteService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
