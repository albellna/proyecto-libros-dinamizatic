import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { DetallesLibroComponent } from './components/detalles-libro/detalles-libro.component';
import { ListadoLibrosComponent } from './components/listado-libros/listado-libros.component';
import { ModificarLibroComponent } from './components/modificar-libro/modificar-libro.component';

const routes: Routes = [
  {path: '', component: ListadoLibrosComponent},
  {path: 'libro/:id', component: DetallesLibroComponent},
  {path: 'crearlibro', component: CrearLibroComponent},
  {path: 'modificarlibro/:id', component: ModificarLibroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
