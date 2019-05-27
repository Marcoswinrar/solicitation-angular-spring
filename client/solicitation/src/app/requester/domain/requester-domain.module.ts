import { NgModule } from '@angular/core';

import { LoadRequesterMenusInteractor } from './interactors/load-requester-menus.interactor';
import { LoadRequestsInteractor } from './interactors/load-requests.interactor';
import { CreateRequestInteractor } from './interactors/create-request.interactor';

@NgModule({
  providers: [ 
    LoadRequesterMenusInteractor,
    LoadRequestsInteractor,
    CreateRequestInteractor
  ]
})
export class RequesterDomainModule { }
