import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesselectionComponent } from './datesselection.component';

describe('DatesselectionComponent', () => {
  let component: DatesselectionComponent;
  let fixture: ComponentFixture<DatesselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
