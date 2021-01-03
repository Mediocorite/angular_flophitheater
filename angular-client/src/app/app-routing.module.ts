import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheatreShowcaseMdComponent } from './components/theatre-showcase-md/theatre-showcase-md.component';

const routes: Routes = [
  { path:'', component: TheatreShowcaseMdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
