import { Injectable } from '@angular/core';
import { OMDBApiType } from "../models/OMDBApiType";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApicallerService {

  constructor(private http: HttpClient) { }

  // OMDB Congiuration and Fetcher
  URL = environment.omdbConfig.apiURL;
  Key = environment.omdbConfig.apiKey;
  omdbfetch(searchTitle: string):Observable<OMDBApiType> {
    return this.http.get<OMDBApiType>(`${this.URL}${this.Key}&t=${searchTitle}`);
  }

}
