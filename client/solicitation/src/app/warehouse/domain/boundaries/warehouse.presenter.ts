import { Observable } from 'rxjs';

import { Solicitation } from 'src/app/requester/domain/models/solicitation';

export abstract class WarehousePresenter {
  abstract getRequests(): Observable<Solicitation[]>;
  abstract aprovesRequest(id:number, solicitation: Solicitation): Observable<Solicitation>;
}