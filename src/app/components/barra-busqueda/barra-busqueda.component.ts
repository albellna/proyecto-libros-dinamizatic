import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  @Output() resultadoBusqueda = new EventEmitter<any>();
  
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }
    this.librosService.buscarLibro(valor).subscribe(data => {
      this.resultadoBusqueda.emit(data);
    });
    this.txtBuscar.nativeElement.value = '';
  }

  resetBusqueda() {
    this.librosService.listarLibros().subscribe(data => {
      this.resultadoBusqueda.emit(data);
    });
    this.txtBuscar.nativeElement.value = '';
  }

}
