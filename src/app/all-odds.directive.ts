import { Directive, Input, HostListener, ComponentRef, ElementRef } from '@angular/core';
import { } from '@angular/cdk';
import { ComponentPortal } from '@angular/cdk/portal';
import { AllOddsComponent } from './all-odds/all-odds.component';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';

// -- 3rd party 
import { isNil, isArray } from 'lodash'

@Directive({
  selector: '[appAllOdds]'
})

export class AllOddsDirective {

  private overlayRef: OverlayRef;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay){}

  ngOnInit() {
      const positionStrategy = this.overlayPositionBuilder
        .flexibleConnectedTo(this.elementRef)
        .withPositions([{
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
      }]);      
      // Connect position strategy
      if(!isArray(positionStrategy)) {

      }
      this.overlayRef = this.overlay.create({ positionStrategy });
    }

  @Input('avram') text ;
  @Input('allOddsnumber') number = '';



  @HostListener('mouseenter')
  show() {
    // Create tooltip portal
    const tooltipPortal = new ComponentPortal(AllOddsComponent);

    // Attach tooltip portal to overlay
    const tooltipRef: ComponentRef<AllOddsComponent> = this.overlayRef.attach(tooltipPortal);
      
    // Pass content to tooltip component instance
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }




}
