import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinispinnerComponent } from './minispinner.component';

describe('MinispinnerComponent', () => {
  let component: MinispinnerComponent;
  let fixture: ComponentFixture<MinispinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinispinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinispinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
