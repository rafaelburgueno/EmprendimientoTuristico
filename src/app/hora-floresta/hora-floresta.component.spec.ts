import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraFlorestaComponent } from './hora-floresta.component';

describe('HoraFlorestaComponent', () => {
  let component: HoraFlorestaComponent;
  let fixture: ComponentFixture<HoraFlorestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoraFlorestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraFlorestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
