import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestsComponent } from './requests/requests.component';
import { RequesterComponent } from './initial-page/requester.component';
import { RequestsNewComponent } from './new/requests-new.component';

const routes: Routes = [

  {
    path: '', component: RequesterComponent,
    children: [
      { path: '', redirectTo: 'solicitacoes' },
      { path: 'solicitacoes', component: RequestsComponent },
      { path: 'nova', component: RequestsNewComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequesterRouting { }