import { Injectable } from '@angular/core';

import { AdministrativeGateway } from '../domain/boundaries/administrative.gateway';
import { AdministrativeRepository } from './administrative.repository';

@Injectable()
export class DefaultAdministrativeGateway implements AdministrativeGateway {

  constructor(private repository: AdministrativeRepository) { }

  getRequests() {
    return this.repository.getRequests();
  }

}