import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LibrosService} from 'src/app/services/libros.service';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {
  
  libros: any[] = [];
  mostrarLibros: boolean = true;
  valorBusqueda: string = "";
  p: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(response => {
      this.valorBusqueda = response.valorBusqueda;
    });

    if (this.valorBusqueda != null){
      this.librosService.buscarLibro(this.valorBusqueda).subscribe((data) => {
          this.libros = data;
          this.mostrarDatos();
      });
    } else {
      this.cargarLibros();
    }
  }

  public mostrarDatos() {
    if(this.libros.length != 0){
      this.mostrarLibros = true;
    } else {
      this.mostrarLibros = false;
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
    this.p = 1;
  }

  public detallesLibro(id: number) {
    this.router.navigate(['/libro', id]);
  }


  public borrarLibro(id: string) {
    if (confirm('¿Quieres borrar el libro con ID '+id+'?')){
      this.librosService.borrarLibro(id).subscribe(data => {
        this.cargarLibros();
      });
    }
  }
}
