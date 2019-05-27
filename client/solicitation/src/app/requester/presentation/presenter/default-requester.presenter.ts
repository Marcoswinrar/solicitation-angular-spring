import { Injectable } from '@angular/core';

import { RequesterPresenter } from '../../domain/boundaries/requester.presenter';
import { LoadRequesterMenusInteractor } from '../../domain/interactors/load-requester-menus.interactor';
import { LoadRequestsInteractor } from '../../domain/interactors/load-requests.interactor';
import { CreateRequestInteractor } from '../../domain/interactors/create-request.interactor';
import { Solicitation } from '../../domain/models/solicitation';

@Injectable()
export class DefaultRequesterPresenter implements RequesterPresenter {

  constructor(
    private menu: LoadRequesterMenusInteractor,
    private requests: LoadRequestsInteractor,
    private request: CreateRequestInteractor
  ) { }

  getMenus() {
    return this.menu.getMenus();
  }

  getRequests() {
    return this.requests.getRequests();
  }

  createRequest(request: Solicitation) {
    return this.request.createRequest(request);
  }

}