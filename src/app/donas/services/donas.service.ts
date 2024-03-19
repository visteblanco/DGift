import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Observable, catchError, map, of } from 'rxjs';
import { Dona } from '../interfaces/dona.interface';

@Injectable({providedIn: 'root'})
export class DonasService {

  private baseUrl: string = environments.baseurl;
  constructor(private http: HttpClient) { }
  getHeroes():Observable<Dona[]>{
      return this.http.get<Dona[]>(`${this.baseUrl}/donas`);
  }
  getHeroById(id:string): Observable<Dona|undefined>{
      return this.http.get<Dona>(`${this.baseUrl}/donas/${id}`)
      .pipe(
          catchError(error => of(undefined))
      );
  }
  getSuggestions(query: string): Observable<Dona[]>{
      return this.http.get<Dona[]>(`${this.baseUrl}/donas?q=${query}&_limit=6`);
  }

  addHero(dona:Dona):Observable<Dona>{
    return this.http.post<Dona>(`${this.baseUrl}/donas`,dona);
  }

  updateHero(dona:Dona):Observable<Dona>{
    if(!dona) throw Error('Dona Id is required ')
    return this.http.patch<Dona>(`${this.baseUrl}/donas/${dona.id}`,dona);
  }


  deleteHerById(id:string):Observable<boolean>{
    return this.http.delete<Dona>(`${this.baseUrl}/donas/${id}`)
  .pipe(
    map(resp => true),
    catchError(err=> of(false))
  );
  }


}
