import { Observable } from 'rxjs';

import { Menu } from 'src/app/shared/models/menu';
import { Solicitation } from '../models/solicitation';

export abstract class RequesterGateway {
  abstract getMenus(): Observable<Menu[]>;
  abstract getRequests(): Observable<Solicitation[]>;
  abstract createRequest(request: Solicitation): Observable<Solicitation>;
}