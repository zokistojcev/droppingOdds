import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppingRowComponent } from './dropping-row.component';

describe('DroppingRowComponent', () => {
  let component: DroppingRowComponent;
  let fixture: ComponentFixture<DroppingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroppingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
