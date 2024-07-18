import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { ODataResponse } from '../model/odata-response.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { BaseNode } from '../model/database/db.model';

@Injectable({
  providedIn: 'root'
})
export class BasenodeService extends ApiService{

  constructor(protected override http : HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
   }
   getAllBaseNode(queryParams: string): Observable<ODataResponse> {
    let url = `/BaseNodes?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<BaseNode> = this.jsonConvert.deserializeArray(
          odataRes.value,
          BaseNode
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
