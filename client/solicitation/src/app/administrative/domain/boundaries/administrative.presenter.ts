import { Observable } from 'rxjs';

import { Solicitation } from 'src/app/requester/domain/models/solicitation';

export abstract class AdministrativePresenter {
  abstract getRequests(): Observable<Solicitation[]>;
}