import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmovie } from '../models/bookmovie';


@Injectable({
  providedIn: 'root'
})
export class BookmovieService {
  serveurl="http://localhost:9002/BookMovie"
  
  constructor(private http:HttpClient) {} 
  getAll():Observable<Bookmovie[]>
  {

return this.http.get<Bookmovie[]>(this.serveurl)
  }
  bookmovie(b:Bookmovie):Observable<Bookmovie>
  {
    return this.http.post<Bookmovie>(this.serveurl,b)
  }
  search(i:any):Observable<Bookmovie>
  {
       return this.http.get<Bookmovie>(this.serveurl+"/"+i)

  }
  del(i:any):Observable<any>
  {
    return this.http.delete(this.serveurl+"/"+i)
  }
  update(i:any,b:Bookmovie):Observable<Bookmovie>
  {
    return this.http.put<Bookmovie>(this.serveurl+"/"+i,b)
  }
  
}
