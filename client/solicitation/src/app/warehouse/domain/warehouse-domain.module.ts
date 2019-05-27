import { NgModule } from '@angular/core';

import { AprovesRequestInteractor } from './interactors/aproves-request.interactor';
import { LoadWarehouseRequestsInteractor } from './interactors/load-warehouse-requests.interactor';

@NgModule({
  providers: [
    LoadWarehouseRequestsInteractor,
    AprovesRequestInteractor
  ]
})
export class WarehouseDomainModule { }