import { FilmInterface } from './../models/film.interface';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private httpClient: HttpClient) { }

// En este objeto almacenaré las cosas de cada película y cuando esté vacío sabre si la peli no está o existe
  public filmData = {
    title: "",
    author: "",
    company: "",
    cover: "",
    year: "",
    rate: "", 
    id: ""
  }

  // esta función reinicia el objeto 
  public clearFilm() {
    this.filmData = {
    title: "",
    author: "",
    company: "",
    cover: "",
    year: "",
    rate: "", 
    id: ""
    }
  }


  // Setear con una peli en concreto el filmData 
  public editItem(item:any) {
    this.filmData = item
  }


  // ACTUACIONES CON LA BBDD 
  
  // Recoger las pelis
  public getFilms() {
    return this.httpClient.get("http://localhost:3000/pelis")
  }

  // Postear una nueva peli (enviando un objeto peli como argumento de la función)
  public postFilm(newFilm:object) {
    return this.httpClient.post("http://localhost:3000/pelis", newFilm)
  }
 
  // Borrar una peli 
  public deleteFilm(filmID:string) {
    return this.httpClient.delete("http://localhost:3000/pelis/" + filmID)
  }

  // Editar una película desde el formulario 
  public editFilm(filmID:string, editedFilm:object) {
    return this.httpClient.put("http://localhost:3000/pelis/" + filmID, editedFilm)
  }

}
