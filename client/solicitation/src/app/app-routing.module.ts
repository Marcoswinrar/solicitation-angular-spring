import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'solicitante', pathMatch: 'full' },
  { path: 'solicitante', loadChildren: './requester/requester.module#RequesterModule' },
  { path: 'almoxarifado', loadChildren: './warehouse/warehouse.module#WarehouseModule' },
  { path: 'administrativo', loadChildren: './administrative/administrative.module#AdministrativeModule' },
  { path: '**', redirectTo: 'solicitante' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
