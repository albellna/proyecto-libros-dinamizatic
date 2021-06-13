import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { DetallesLibroComponent } from './detalles-libro/detalles-libro.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';


@NgModule({
  declarations: [
    BarraBusquedaComponent,
    CrearLibroComponent,
    DetallesLibroComponent,
    FooterComponent,
    ListadoLibrosComponent,
    ModificarLibroComponent
  ],
  exports: [
    ListadoLibrosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LibrosModule { }
