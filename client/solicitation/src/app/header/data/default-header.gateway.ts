import { Injectable } from '@angular/core';

import { HeaderGateway } from '../domain/boundaries/header.gateway';
import { HeaderRepository } from './header.repository';

/**
 * Implementation of gateway to comunicate with repository and interactor.
 */
@Injectable()
export class DefaultHeaderGateway implements HeaderGateway {

  constructor(private repository: HeaderRepository) { }

  getMenus() {
    return this.repository.getMenus();
  }
}