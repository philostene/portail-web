import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserApplisComponent } from './test-user-applis.component';

describe('TestUserApplisComponent', () => {
  let component: TestUserApplisComponent;
  let fixture: ComponentFixture<TestUserApplisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUserApplisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUserApplisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
