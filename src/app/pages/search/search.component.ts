import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.setupResizeHandler();
  }

  private setupResizeHandler(): void {
    const resizer = this.elementRef.nativeElement.querySelector('.resize-handle') as HTMLElement;
    const header1 = resizer.previousElementSibling as HTMLElement;
    const x = this.elementRef.nativeElement.querySelector('#ul-height') as HTMLElement;
    const setheight = x.offsetHeight;
    console.log('Chiều cao của div là: ' + setheight + 'px');
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
      console.log('Chiều cao của div sau khi thay đổi: ' + newHeight + 'px');
      header1.style.height = `${newHeight}px`;
      const changeheight = setheight + (625 - newHeight);
      console.log("setheight", setheight);
      console.log("changeheight", changeheight);
      x.style.height = `${changeheight}px`;
    };

    const onMouseUp = () => {
      isResizing = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }

}