import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraBusquedaComponent } from './components/barra-busqueda/barra-busqueda.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { DetallesLibroComponent } from './components/detalles-libro/detalles-libro.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListadoLibrosComponent } from './components/listado-libros/listado-libros.component';
import { ModificarLibroComponent } from './components/modificar-libro/modificar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraBusquedaComponent,
    CrearLibroComponent,
    DetallesLibroComponent,
    FooterComponent,
    ListadoLibrosComponent,
    ModificarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
