import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  form: any = {};
  creado = false;
  falloCrear = false;
  msgError = '';
  msgOk = '';

  constructor(private librosService: LibrosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.librosService.crearLibro(this.form).subscribe(data => {
      this.creado = true;
      this.falloCrear = false;
    },
      (err: any) => {
        this.msgError = err;
        this.creado = false;
        this.falloCrear = true;
      }
    );
  }

  volverButton() {
    this.router.navigate(['/']);
  }

}
