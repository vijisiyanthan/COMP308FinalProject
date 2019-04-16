import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { NurseComponent } from './pages/nurse/nurse.component';

const routes: Routes = [
  { path: 'nurse', component: NurseComponent, data: {title: 'Nurse Account'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
