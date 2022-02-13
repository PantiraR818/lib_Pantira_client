import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { map, Observable, retry } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = `${environment.serviceUrl}/book`

  constructor(private http: HttpClient) { }

  getBooks(): any {
    console.log(this.url);
    return this.http.get<any>(this.url);
  }
  addBook(book: any) {
    let getUrl = `${this.url}/addbook`;
    return this.http.post<any>(getUrl, book)
      .pipe(map((res) => {
        return res;
      }));
  }
  getBookById(id : any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }

  getBookByTitle(title : any){
    let getUrl = `${this.url}/title/${title}`;
    return this.http.get<any>(getUrl);
  }

  updateBook(id: any, book: any) {
    let putUrl = `${this.url}/${id}`;
    console.log(putUrl);
    return this.http.put<any>(putUrl, book)
      .pipe(map((res) => {
        return res;
      }));
  }

  deleteBook(id: any) {
    let deleteUrl = `${this.url}/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
}
