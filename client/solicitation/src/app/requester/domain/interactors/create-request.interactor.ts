import { Injectable } from '@angular/core';

import { RequesterGateway } from '../boundaries/requester.gateway';
import { Solicitation } from '../models/solicitation';

@Injectable()
export class CreateRequestInteractor {

  constructor(private gateway: RequesterGateway) { }

  createRequest(request: Solicitation) {
    return this.gateway.createRequest(request);
  }

}