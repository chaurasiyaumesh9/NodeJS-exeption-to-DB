import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IException } from './exception';

@Injectable()
export class ExceptionService {
   private _serviceurl='https://meanstack-exceptiontodb.herokuapp.com/exceptions';
   //private _serviceurl='http://localhost:3000/exceptions';
   constructor(private _http: Http){}
   
   getExceptions(): Observable<IException[]> {
      return this._http.get(this._serviceurl)
      .map((response: Response) => <IException[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
   
   addException(ex:IException): Observable<IException> {
   		let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._serviceurl, {exception:ex}, options)
        .map((response: Response) => <IException> response.json())
      	.do(data => console.log(JSON.stringify(data)));
    }
}