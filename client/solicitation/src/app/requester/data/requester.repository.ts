import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Menu } from 'src/app/shared/models/menu';
import { environment } from 'src/environments/environment';
import { Solicitation } from '../domain/models/solicitation';

@Injectable()
export class RequesterRepository {

  readonly API = environment.api;

  constructor(private http: HttpClient) { }

  /**
   * Get menus of requests module.
   */
  getMenus(): Observable<Menu[]> {
    return of([
      new Menu('Solicitações', '/solicitante/solicitacoes'),
      new Menu('Nova solicitação', '/solicitante/nova')
    ])
  }

  /**
   * Get all requests in api.
   */
  getRequests(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(this.API + 'solicitation');
  }

  /**
   * Create a new request.
   * @param request 
   */
  createRequest(request: Solicitation): Observable<Solicitation> {
    return this.http.post<Solicitation>(this.API + 'solicitation', request);
  }

}