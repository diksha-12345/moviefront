import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 serveurl="http://localhost:9002/admin"
   constructor(private http:HttpClient) { }
    login (em:any,ps:any):Observable<Admin>
     {
       return this.http.get<Admin>(this.serveurl+"/"+em+"/"+ps)
     }
   
}
