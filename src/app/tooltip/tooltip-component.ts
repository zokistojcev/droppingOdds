import { Component, AfterViewInit, Input, HostListener } from "@angular/core";

@Component({
    selector: 'tooltip-content',
    template: `
      <div class="my-tooltip" [innerHTML]="title"></div>
    `
  })
  export class TooltipContentComponent implements AfterViewInit {
  
    // @Input() title: string;
    // @Input() ref: any;
    // @Input() arr: any[];
  
    ngAfterViewInit(): void {
      // position based on `ref`\
      console.log('asdddddddddddddd')
    }
  
    // @HostListener('window:resize')
    // onWindowResize(): void {
    //   // update position based on `ref`
    // }
  
  }