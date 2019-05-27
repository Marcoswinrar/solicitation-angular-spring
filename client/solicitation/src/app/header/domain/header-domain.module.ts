import { NgModule } from '@angular/core';

import { LoadHeaderMenusInteractor } from './interactors/load-header-menus.interactor';

@NgModule({
  providers: [
    LoadHeaderMenusInteractor
  ]
})
export class HeaderDomainModule { }