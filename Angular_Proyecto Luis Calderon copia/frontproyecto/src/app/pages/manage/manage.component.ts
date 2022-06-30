import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilmsService } from 'src/app/services/films.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
 
  public filmForm!: FormGroup; 
  public newFilm = this.FilmsService.filmData;
  public filmID = this.FilmsService.filmData.id;

  constructor(private formBuilder: FormBuilder, private FilmsService: FilmsService, private router: Router) { }

  ngOnInit(): void {
    //Vacío el film al arrancar el formulario 
    this.FilmsService.clearFilm();

    //Construyo el formulario
    this.filmForm = this.formBuilder.group({
      title: [this.newFilm.title, [Validators.required]],
      author: [this.newFilm.author, [Validators.required]],
      company: [this.newFilm.company,[Validators.required]],
      cover: [this.newFilm.cover, [Validators.required]], 
      year:[this.newFilm.year, [Validators.required]], 
      rate:[this.newFilm.rate, [Validators.required]] 
    })

    this.filmForm.valueChanges.subscribe((changes) => {
      this.newFilm = changes;
      // console.log(this.newFilm)
    })
  }

  // Defino la función que se ejecuta al enviar el formulario 
  public onSubmit() {
    if (this.filmID !== "") {
      this.FilmsService.editFilm(this.filmID, this.newFilm).subscribe();
      alert("Película editada")
    } else {
      this.FilmsService.postFilm(this.newFilm).subscribe();
      alert("Película añadida correctamente")
    }

    this.filmForm.reset();

    this.router.navigate(["/films"])
  }

  public delete() {
    this.FilmsService.deleteFilm(this.filmID).subscribe();
    this.filmForm.reset();
    alert("Película eliminada");
    this.router.navigate(["/films"])
  }

}
