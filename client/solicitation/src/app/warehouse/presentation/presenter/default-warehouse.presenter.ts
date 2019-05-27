import { Injectable } from '@angular/core';

import { WarehousePresenter } from '../../domain/boundaries/warehouse.presenter';
import { AprovesRequestInteractor } from '../../domain/interactors/aproves-request.interactor';
import { Solicitation } from 'src/app/requester/domain/models/solicitation';
import { LoadWarehouseRequestsInteractor } from '../../domain/interactors/load-warehouse-requests.interactor';

@Injectable()
export class DefaultWarehousePresenter implements WarehousePresenter {

  constructor(
    private requests: LoadWarehouseRequestsInteractor,
    private aprove: AprovesRequestInteractor
  ) { }

  getRequests() {
    return this.requests.getRequests();
  }

  aprovesRequest(id:number, request: Solicitation) {
    return this.aprove.aprovesRequest(id, request);
  }

}