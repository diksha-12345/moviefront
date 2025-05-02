import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cancelbooking } from '../models/cancelbooking';

@Injectable({
  providedIn: 'root'
})
export class CancelbookingService {
  serveurl="http://localhost:9002/cancelbooking"


  constructor(private http:HttpClient) { }
  getAll():Observable<Cancelbooking[]>
  {
    return this.http.get<Cancelbooking[]>(this.serveurl)
  }
  cancelbooking (c:Cancelbooking):Observable<Cancelbooking>
  {
    return this.http.post<Cancelbooking>(this.serveurl,c)
  }
  search(i:any):Observable<Cancelbooking>
  {
    return this.http.get<Cancelbooking>(this.serveurl+"/"+i)
  }
  del(i:any):Observable<any>
  {
    return this.http.delete(this.serveurl+"/"+i)
  }
  update(i:any,c:Cancelbooking):Observable<Cancelbooking>
  {
    return this.http.put<Cancelbooking>(this.serveurl+"/"+i,c)
  }
}
