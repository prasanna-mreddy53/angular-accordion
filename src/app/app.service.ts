import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _http:HttpClient;
  constructor(private http:HttpClient) { 
    this._http=this.http;
  }
  ReadJsonData(){
    return this._http.get("./assets/faqs.json")
  }
}
