import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Solicitation } from 'src/app/requester/domain/models/solicitation';
import { environment } from 'src/environments/environment';

/**
 * Provides data for administrative module.
 */
@Injectable()
export class AdministrativeRepository {

  readonly API = environment.api;

  constructor(private http: HttpClient) { }

  /**
   * Get all requests of API.
   */
  getRequests(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(this.API + 'solicitation');    
  }
}