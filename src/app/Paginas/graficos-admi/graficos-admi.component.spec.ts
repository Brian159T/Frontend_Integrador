import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosAdmiComponent } from './graficos-admi.component';

describe('GraficosAdmiComponent', () => {
  let component: GraficosAdmiComponent;
  let fixture: ComponentFixture<GraficosAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficosAdmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
