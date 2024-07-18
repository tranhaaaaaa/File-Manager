import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService extends ApiService{

  constructor(protected override http : HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
   }
   StartUpload(
    filename: string,
    filesize: string,
    folderId: string,
    createdById: string,
    title: string,
    des: string
  ): Observable<any> {
    const url = `/Upload/StartUpload?fileName=${encodeURIComponent(filename)}&fileSize=${encodeURIComponent(filesize)}&folderId=${encodeURIComponent(folderId)}&createdById=${encodeURIComponent(createdById)}&title=${encodeURIComponent(title)}&des=${encodeURIComponent(des)}`;
    console.log("url",url)
    return super.getFile(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }
  FinishUpload(
    baseNodeId : string,
    docNodeId: string,
    docNodeVersionId : string,
    folderid : string,
    filename : string
  ): Observable<any>{
    let url = `/Upload/FinishUpload?baseNodeId=${baseNodeId}&docNodeId=${docNodeId}&docNodeVersionId=${docNodeVersionId}&folderId=${folderid}&fileName=${filename}`;
    return super.getFile(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }
  
}
