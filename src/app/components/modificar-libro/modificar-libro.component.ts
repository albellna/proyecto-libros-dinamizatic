import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro } from '../../interfaces/libro';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})
export class ModificarLibroComponent implements OnInit {

  form: Libro = {
    title: '',
    subtitle: '',
    author: '',
    description: '',
    release: '',
    img: ''
  };
  id: any;
  creado = false;
  falloCrear = false;
  msgError = "";

  constructor(private router: Router, private librosService: LibrosService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(response => {
      this.id = response.id;
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.librosService.listarUnLibro(this.id).subscribe(data => {
      this.form = data;
    });
  }

  volverButton() {
      this.router.navigate(['/libro', this.id]);
  }


  onUpdate() {
    this.librosService.modificarLibro(this.form, this.id).subscribe(data => {
      this.creado = true;
      this.falloCrear = false;
      this.router.navigate(['/libro', this.id]);
    },
      (err: any) => {
        this.msgError = err;
        this.creado = false;
        this.falloCrear = true;
      }
    );
  }

}
