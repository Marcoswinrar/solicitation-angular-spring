import { Injectable } from '@angular/core';

import { RequesterGateway } from '../domain/boundaries/requester.gateway';
import { RequesterRepository } from './requester.repository';
import { Solicitation } from '../domain/models/solicitation';

@Injectable()
export class DefaultRequesterGateway implements RequesterGateway {

  constructor(private repository: RequesterRepository) { }

  getMenus() {
    return this.repository.getMenus();
  }

  getRequests() {
    return this.repository.getRequests();
  }

  createRequest(request: Solicitation) {
    return this.repository.createRequest(request);
  }

}