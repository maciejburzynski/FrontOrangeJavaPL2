import {Injectable} from '@angular/core';
import {environment} from "../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bread} from "./Bread";


@Injectable({
  providedIn: 'root'
})
export class BreadService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getBreads(): Observable<Bread[]> {
    return this.http.get<Bread[]>(`${this.apiServerUrl}/api/breads`);
  }

}
