import { Observable } from 'rxjs';

import { Menu } from 'src/app/shared/models/menu';

export abstract class HeaderPresenter {
  abstract getMenus(): Observable<Menu[]>;
}