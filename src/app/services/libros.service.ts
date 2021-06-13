import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libro';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  localAPI: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listarLibros() {
    return this.http.get<any>(`${this.localAPI}/libros`, cabecera);
  }

  public listarUnLibro(id: string) {
    return this.http.get<any>(`${this.localAPI}/libro/${id}`, cabecera);
  }

  public buscarLibro(arg: string) {
    return this.http.get<any>(`${this.localAPI}/buscarlibro/${arg}`, cabecera);
  }

  public modificarLibro(arg: any, id: string) {
    return this.http.post<any>(`${this.localAPI}/actualizarlibro/${id}`,{
      title: arg.title,
      subtitle: arg.subtitle,
      author: arg.author,
      description: arg.description,
      release: arg.release,
      img: arg.img
    }, cabecera);
  }

  public crearLibro(arg: any) {
    return this.http.post<Libro>(`${this.localAPI}/crearlibro`,{
      title: arg.title,
      subtitle: arg.subtitle,
      author: arg.author,
      description: arg.description,
      release: arg.release,
      img: arg.img
    }, cabecera);
  }

  public borrarLibro(id: string) {
    return this.http.delete<any>(`${this.localAPI}/borrarlibro/${id}`, cabecera);
  }
}
