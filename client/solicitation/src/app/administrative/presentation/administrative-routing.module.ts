import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativeComponent } from './initial-page/administrative.component';

const routes: Routes = [

  {
    path: '', component: AdministrativeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeRouting { }