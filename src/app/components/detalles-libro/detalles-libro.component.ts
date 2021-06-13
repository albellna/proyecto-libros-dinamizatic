import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/interfaces/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styleUrls: ['./detalles-libro.component.css']
})
export class DetallesLibroComponent implements OnInit {

  id: any;
  libro: Libro = {
    title: '',
    subtitle: '',
    author: '',
    description: '',
    release: '',
    img: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService, private router: Router) {
    this.activatedRoute.params.subscribe(response => {
      this.id = response.id;
    });
  }

  ngOnInit(): void {
    this.detallesLibro();
    
  }

  public modificarLibro(id: number) {
    this.router.navigate(['/modificarlibro', id]);
  }

  public detallesLibro() {
    this.librosService.listarUnLibro(this.id).subscribe(data => {
      this.libro = data;
    });  
  }

  volverButton() {
    this.router.navigate(['/']);
  }
}
