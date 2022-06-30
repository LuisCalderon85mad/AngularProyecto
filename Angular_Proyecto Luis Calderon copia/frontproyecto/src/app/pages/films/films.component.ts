import { FilmsService } from './../../services/films.service';
import { FilmInterface } from './../../models/film.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  public filmList: FilmInterface[] = [];
  public searchText: any = " ";

// almaceno el servicio de pelis en una variable
  constructor(private filmsService: FilmsService, private router: Router) { }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((data:any) => {
      this.filmList = data
    })
  }

public catchFilm(film:any) {
  this.filmsService.editItem(film);
  this.router.navigate(["/manage"])
}

// Forma 1 de hacer pipe 
/*
search(busqueda: { detail: { value: any; }; }) {
  this.searchText = busqueda.detail.value; 
} */


}
