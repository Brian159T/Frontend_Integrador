import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaAlertasComponent } from './carga-alertas.component';

describe('CargaAlertasComponent', () => {
  let component: CargaAlertasComponent;
  let fixture: ComponentFixture<CargaAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargaAlertasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
