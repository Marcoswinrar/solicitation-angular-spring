import { Observable } from 'rxjs';

import { Solicitation } from 'src/app/requester/domain/models/solicitation';

export abstract class WarehouseGateway {
  abstract getRequests(): Observable<Solicitation[]>;
  abstract aprovesRequest(id: number, solicitation: Solicitation): Observable<Solicitation>;
}