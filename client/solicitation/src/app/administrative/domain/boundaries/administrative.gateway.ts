import { Observable } from 'rxjs';

import { Solicitation } from 'src/app/requester/domain/models/solicitation';

export abstract class AdministrativeGateway {
  abstract getRequests(): Observable<Solicitation[]>;
}