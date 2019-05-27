import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Menu } from 'src/app/shared/models/menu';

/**
 * Provides data for header.
 */
@Injectable()
export class HeaderRepository {

  /**
   * Get navigation menu names of header.
   */
  getMenus(): Observable<Menu[]> {
    return of([
      new Menu('Solicitante', '/solicitante/'),
      new Menu('Almoxarifado', '/almoxarifado/'),
      new Menu('Administrativo', '/administrativo/')
    ])
  }

}