import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WarehouseComponent } from './initial-page/warehouse.component';

const routes: Routes = [

  {
    path: '', component: WarehouseComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRouting { }