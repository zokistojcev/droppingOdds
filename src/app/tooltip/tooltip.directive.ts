import { Directive, Input, OnDestroy, ElementRef, HostListener } from "@angular/core";


@Directive({ selector: '[my-tooltip]' })
export class TooltipDirective implements OnDestroy {

  @Input() tooltipTitle: string = 'asarre';
  private id: number;

  constructor( private element: ElementRef) { }
  
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.element.nativeElement.innerHTML = this.tooltipTitle;
    // this.id = Math.random();
    // this.tooltipService.components.push({ 
    //   id: this.id, 
    //   ref: this.element, 
    //   title: this.tooltipTitle 
    // });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }
  // 
  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    // const idx = this.tooltipService.components.findIndex((t) => { 
    //   return t.id === this.id; 
    // });

    // this.tooltipService.components.splice(idx, 1);
  }
  
}