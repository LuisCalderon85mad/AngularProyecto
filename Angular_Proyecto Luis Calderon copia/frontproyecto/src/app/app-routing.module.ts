import { FileComponent } from './pages/detail/file/file.component';
import { MyHomeComponent } from './pages/my-home/my-home.component';
import { ManageComponent } from './pages/manage/manage.component';
import { FilmsComponent } from './pages/films/films.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "films", component: FilmsComponent
  },
  {
    path: "manage", component: ManageComponent
  },
  {
    path: "", pathMatch: "full", component: MyHomeComponent
  },
  {
    path: "detail/:id", component: FileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
