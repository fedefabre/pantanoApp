import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreServiceService {

  constructor(public http: HttpClient) { }

  public getQuestions(): Observable<any>{
    return this.http.get('./assets/questionsObj.json');
  }
}
