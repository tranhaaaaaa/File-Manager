import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseNode } from 'src/app/core/model/database/db.model';
import { BasenodeService } from 'src/app/core/service/basenode.service';
import { FileUploadService } from 'src/app/core/service/file-upload.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-taxonomi',
  templateUrl: './taxonomi.component.html',
  styleUrls: ['./taxonomi.component.scss']
})
export class TaxonomiComponent implements AfterViewInit, OnInit {
  rightPanelStyle = {};
  searchVal: string = '';
  isAlert: boolean = false;
  public file: any;
  public fileUpload: any;
  public listBaseNode: BaseNode[] = [];
  private oReq = new XMLHttpRequest();
  public percentComplete: number = 0; 
  constructor(
    private elementRef: ElementRef,
    private service: BasenodeService,
    private uploadService: FileUploadService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.closeContextMenu();
    // Uncomment the line below if you want to fetch all base nodes on component init
     this.onGetAllBaseNode();
  }

  onGetAllBaseNode(): void {
    this.service.getAllBaseNode('orderby = Type desc').subscribe(res => {
      this.listBaseNode = res.value;
      console.log('listBaseNode', this.listBaseNode);
    });
  }

  detectRightMouseClick(event: MouseEvent): void {
    if (event.which === 3) {
      this.rightPanelStyle = {
        display: 'block',
        position: 'absolute',
        left: `${event.clientX}px`,
        top: `${event.clientY}px`
      };
    }
  }

  closeContextMenu(): void {
    this.rightPanelStyle = {
      display: 'none'
    };
  }

  ngAfterViewInit(): void {
    this.setupResizeHandler();
  }

  private setupResizeHandler(): void {
    const resizer = this.elementRef.nativeElement.querySelector('.resize-handle') as HTMLElement;
    const header1 = resizer.previousElementSibling as HTMLElement;
    const x = this.elementRef.nativeElement.querySelector('#ul-height') as HTMLElement;
    const setHeight = x.offsetHeight;

    console.log('Chiều cao của div là: ' + setHeight + 'px');

    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
      isResizing = true;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    const onMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const offsetY = e.clientY - resizer.getBoundingClientRect().top;
      const newHeight = header1.offsetHeight + offsetY;
      const changeHeight = setHeight + (625 - newHeight);

      console.log('Chiều cao của div sau khi thay đổi: ' + newHeight + 'px');
      console.log('setHeight', setHeight);
      console.log('changeHeight', changeHeight);

      header1.style.height = `${newHeight}px`;
      x.style.height = `${changeHeight}px`;
    };

    const onMouseUp = () => {
      isResizing = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }

  fileChange(event: any): void {
    this.file = event.files[0].name;
    this.fileUpload = event.files[0];
  }

  upload(): void {
    console.log('fileUpload', this.fileUpload);
    console.log('file', this.file);

    const chunkSize = 1024 * 1024 * 100;
    const fileName = this.fileUpload.name;
    const numberOfChunks = Math.ceil(this.fileUpload.size / chunkSize);
    let start = 0;
    let chunkEnd = start + chunkSize;
    let chunkCounter = 0;

    this.uploadService.StartUpload(fileName, this.fileUpload.size.toString(), '163c8f34-1654-4078-b62d-d6681a193555', 'a726cba0-e9ac-44d3-89ad-6a36d5fd5be8', 'title', 'des').subscribe(res => {
      console.log('res', res);
      console.log(start);
      console.log("chunkend", chunkEnd);
      this.createChunk(
        res.DocNodeVersionId,
        start,
        chunkEnd,
        chunkSize,
        chunkCounter,
        fileName,
        numberOfChunks,
       res.BaseNodeId,
       res.DocNodeId
      );
     console.log("hihihi",res.DocNodeVersionId,
      start,
      chunkEnd,
      chunkSize,
      chunkCounter,
      fileName,
      numberOfChunks)
    });
  }

  createChunk(
    docNodeVersionId: string,
    start: any,
    chunkEnd: number,
    chunkSize: number,
    chunkCounter: number,
    fileName: string,
    numberOfChunks: number,
    baseNodeId: string,
    docNodeId: string
  ) {
    chunkCounter++;
    chunkEnd = Math.min(start + chunkSize, this.fileUpload.size);
    const chunk = this.fileUpload.slice(start, chunkEnd);
    const chunkForm: FormData = new FormData();
    var x = '163c8f34-1654-4078-b62d-d6681a193555';
    if (docNodeVersionId) {
      chunkForm.append('id', docNodeVersionId);
      chunkForm.append('folderId', x);
  }
  chunkForm.append('file', chunk,fileName);

    this.uploadChunk(
      docNodeVersionId,
      chunkForm,
      start,
      chunkEnd,
      chunkSize,
      chunkCounter,
      numberOfChunks,
      baseNodeId,
      docNodeId
    );
  } 
  uploadChunk(
    docNodeVersionId: string,
    chunkForm: FormData,
    start: any,
    chunkEnd: any,
    chunkSize: any,
    chunkCounter: any,
    numberOfChunks: number,
    baseNodeId: string,
    docNodeId: string
  ) {
    this.oReq.timeout = 300000;
    // this.oReq.upload.onprogress = (oEvent: ProgressEvent) => {
    //   if (oEvent.lengthComputable) {
    //     const percentComplete = Math.round((oEvent.loaded / oEvent.total) * 100);
    //     const totalPercentComplete = Math.round(
    //       ((chunkCounter - 1) / numberOfChunks) * 100 +
    //         percentComplete / numberOfChunks
    //     );
    //     this.percentComplete = totalPercentComplete;
    //     // console.log('totalPercentComplete', this.percentComplete);
    //   } else {
    //     // console.log('not computable');
    //     // Unable to compute progress information since the total size is unknown
    //   }
    // };
    this.oReq.open('POST', environment.uploadUrl + '/Upload/UploadPart', true);
    const blobEnd = chunkEnd - 1;
    const contentRange = 'bytes ' + start + '-' + blobEnd + '/' + this.file.size;
    this.oReq.setRequestHeader('Content-Range', contentRange);
    this.oReq.onload = (event: any) => {
      const resp = JSON.parse(this.oReq.response);
      start += chunkSize;
      if (start < this.fileUpload.size) {
        this.createChunk(
          docNodeVersionId,
          start,
          chunkEnd,
          chunkSize,
          chunkCounter,
          this.fileUpload.name,
          numberOfChunks,
          baseNodeId,
          docNodeId
        );
      } else {
        this.uploadService
          .FinishUpload(
            baseNodeId,
            docNodeId,
            docNodeVersionId,
            '163c8f34-1654-4078-b62d-d6681a193555',
            this.fileUpload.name
          )
          .subscribe(
            (data) => {
              this.file = '';
              this.fileUpload = undefined;
            },
            () => {
              // Handle error case here
            }
          );
      }
    };
    this.oReq.onerror = (event: any) => {
      // Handle error case here
    };
    this.oReq.send(chunkForm);
  }
  onChange(event : any){
  this.router.navigate(['/root-node', event.Id]);
    
  }
}
