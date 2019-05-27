import { Injectable } from '@angular/core';

import { AdministrativePresenter } from '../../domain/boundaries/administrative.presenter';
import { LoadAdministrativeRequestsInteractor } from '../../domain/interactors/load-administrative-requests.interactor';

@Injectable()
export class DefaultAdministrativePresenter implements AdministrativePresenter {

  constructor(private requests: LoadAdministrativeRequestsInteractor) { }

  getRequests() {
    return this.requests.getRequests();
  }

}