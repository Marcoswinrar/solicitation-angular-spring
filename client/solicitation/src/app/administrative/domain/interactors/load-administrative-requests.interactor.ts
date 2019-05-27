import { Injectable } from '@angular/core';

import { AdministrativeGateway } from '../boundaries/administrative.gateway';

@Injectable()
export class LoadAdministrativeRequestsInteractor {

  constructor(private gateway: AdministrativeGateway) { }

  getRequests() {
    return this.gateway.getRequests();
  }

}