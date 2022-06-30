
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrayFilm: any[], year: any): any [] {
    
    //console.log(arrayFilm);
    if (year === '') {
      return arrayFilm
    }

    arrayFilm.filter(film => {
      return film.year.includes(year);
    })

    return arrayFilm;
  }

} 
