import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class AuthorizationService {
    constructor(private http: HttpClient) { }
       
    public getAuthList() {    
       return this.http.get(`api/AuthorizationRequest/AuthorizationRequestList`);
    }

  }

