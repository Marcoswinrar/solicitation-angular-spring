import { Injectable } from '@angular/core';
import { HeaderGateway } from '../boundaries/header.gateway';

@Injectable()
export class LoadHeaderMenusInteractor {

  constructor(private gateway: HeaderGateway) { }

  getMenus() {
    return this.gateway.getMenus();
  }

}