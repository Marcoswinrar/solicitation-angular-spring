import { Injectable } from '@angular/core';

import { HeaderPresenter } from '../../domain/boundaries/header.presenter';
import { LoadHeaderMenusInteractor } from '../../domain/interactors/load-header-menus.interactor';

/**
 * Provides presentation metadata for component.
 */
@Injectable()
export class DefaultHeaderPresenter implements HeaderPresenter {

  constructor(private menu: LoadHeaderMenusInteractor) { }

  getMenus() {
    return this.menu.getMenus();
  }
}