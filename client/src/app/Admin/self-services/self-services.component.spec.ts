import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfServicesComponent } from './self-services.component';

describe('SelfServicesComponent', () => {
  let component: SelfServicesComponent;
  let fixture: ComponentFixture<SelfServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
