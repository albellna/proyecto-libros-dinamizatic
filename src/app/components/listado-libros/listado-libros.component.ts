import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {LibrosService} from 'src/app/services/libros.service';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {
  
  libros: any[] = [];
  mostrarGrupos: boolean = true;

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private librosService: LibrosService, private router: Router) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  public mostrarDatos() {
    if(this.libros.length != 0){
      this.mostrarGrupos = true;
    } else {
      this.mostrarGrupos = false;
    }
  }

  public cargarLibros(){
    this.librosService.listarLibros().subscribe(data => {
      this.libros = data;
      this.mostrarDatos();
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  public resultados(res: any){
    this.libros = res;
    this.mostrarDatos();
  }

  public detallesLibro(id: number) {
    this.router.navigate(['/libro', id]);
  }

  public crearGrupo() {
    this.router.navigate(['/crearlibro']);
  }

  public borrarGrupo(id: string) {
    if (confirm('¿Quieres borrar el grupo con ID '+id+'?')){
      this.librosService.borrarLibro(id).subscribe(data => {
        this.cargarLibros();
      });
    }
  }
}
