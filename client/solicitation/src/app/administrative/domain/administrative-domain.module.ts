import { NgModule } from '@angular/core';

import { LoadAdministrativeRequestsInteractor } from './interactors/load-administrative-requests.interactor';

@NgModule({
  providers: [LoadAdministrativeRequestsInteractor]
})
export class AdministrativeDomainModule { }