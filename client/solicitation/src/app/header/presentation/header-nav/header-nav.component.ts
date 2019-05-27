import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Menu } from 'src/app/shared/models/menu';
import { HeaderPresenter } from '../../domain/boundaries/header.presenter';

@Component({
  selector: 'flux-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  menus$: Observable<Menu[]>;

  constructor(private presenter: HeaderPresenter) { }

  ngOnInit() {
    this.menus$ = this.presenter.getMenus();
  }

}