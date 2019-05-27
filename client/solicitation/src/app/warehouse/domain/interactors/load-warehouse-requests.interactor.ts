import { Injectable } from '@angular/core';

import { WarehouseGateway } from '../boundaries/warehouse.gateway';

@Injectable()
export class LoadWarehouseRequestsInteractor {

  constructor(private gateway: WarehouseGateway) { }

  getRequests() {
    return this.gateway.getRequests();
  }
}