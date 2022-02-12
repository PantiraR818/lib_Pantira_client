import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private url = `${environment.serviceUrl}/staff`
  constructor(private http: HttpClient) { }

  getstaffById(id: any) {
    console.log(id);
    let getUrl = `${this.url}/${id}`;
    console.log(getUrl);
    return this.http.get<any>(getUrl);
  }
  getStaff(): any {
    console.log(this.url);
    return this.http.get<any>(this.url);
  }

  addStaff(staff: any) {
    return this.http.post<any>(this.url, staff)
      .pipe(map((res) => {
        return res;
      }))
  }

  updateStaff(id: any, staff: any) {
    let putUrl = `${this.url}/${id}`;
    console.log(putUrl);
    return this.http.put<any>(putUrl, staff)
      .pipe(map((res) => {
        return res;
      }));
  }

  deleteStaff(id: any){
    let deleteUrl = `${this.url}/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
}
