import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Solicitation } from 'src/app/requester/domain/models/solicitation';
import { Injectable } from '@angular/core';

/**
 * Provides data for warehouse module.
 */
@Injectable()
export class WarehouseRepository {

  readonly API = environment.api;

  constructor(private http: HttpClient) { }

  /**
   * Returns all requests for warehouse
   */
  getRequests(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(this.API + 'solicitation');
  }

  /**
   * Aproves status of warehouse request
   * @param request object of solicitation
   */
  aprovesRequest(id: number, request: Solicitation): Observable<Solicitation> {
    request.id = id;
    return this.http.put<Solicitation>(this.API + 'solicitation/' + id, request);
  }

}