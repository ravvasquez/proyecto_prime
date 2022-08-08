import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoExitoComponent } from './caso-exito.component';

describe('CasoExitoComponent', () => {
  let component: CasoExitoComponent;
  let fixture: ComponentFixture<CasoExitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasoExitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasoExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
