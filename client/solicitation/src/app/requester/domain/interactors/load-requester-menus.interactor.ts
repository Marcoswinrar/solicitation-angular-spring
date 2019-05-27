import { Injectable } from '@angular/core';
import { RequesterGateway } from '../boundaries/requester.gateway';

@Injectable()
export class LoadRequesterMenusInteractor {

  constructor(private gateway: RequesterGateway) { }

  getMenus() {
    return this.gateway.getMenus();
  }

}