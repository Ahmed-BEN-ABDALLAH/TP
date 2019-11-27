import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Livre, LivrePage} from '../model/Livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivresService{
  public host:string="http://localhost:8085";
  constructor(private httpClient:HttpClient) { }

  public searchBooks(keyword: string, page:number, size:number):Observable<LivrePage>{
    return this.httpClient.get<LivrePage>("https://www.googleapis.com/books/v1/volumes?q="+keyword+"&page="+page+"&size="+size);

  }

}
