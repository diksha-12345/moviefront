import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
serveurl="http://localhost:9002/registration"
  constructor(private http:HttpClient) { }
  getAll():Observable<Registration[]>
  {
    return this.http.get<Registration[]>(this.serveurl)
  }

  register(r:Registration):Observable<Registration>
  {
    return this.http.post<Registration>(this.serveurl,r)
  }
  search(i:any):Observable<Registration>
  {
    return this.http.get<Registration>(this.serveurl+"/"+i)
  }
  del(i:any):Observable<any>
  {
    return this.http.delete(this.serveurl+"/"+i)
  }
  update(i:any,r:Registration):Observable<Registration>

  {
    return this.http.put<Registration>(this.serveurl+"/"+i,r)
  }
  login (em:any,ps:any):Observable<Registration[]>
  {
    return this.http.get<Registration[]>(this.serveurl+"/"+em+"/"+ps)
  }



}


