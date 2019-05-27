import { Injectable } from '@angular/core';

import { RequesterGateway } from '../boundaries/requester.gateway';

@Injectable()
export class LoadRequestsInteractor {

  constructor(private gateway: RequesterGateway) { }

  getRequests() {
    return this.gateway.getRequests();
  }

}