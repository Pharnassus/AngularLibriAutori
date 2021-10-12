import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavIntesaSanpaoloComponent } from './nav-intesa-sanpaolo.component';

describe('NavIntesaSanpaoloComponent', () => {
  let component: NavIntesaSanpaoloComponent;
  let fixture: ComponentFixture<NavIntesaSanpaoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavIntesaSanpaoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavIntesaSanpaoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
