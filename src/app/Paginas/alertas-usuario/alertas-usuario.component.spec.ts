import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasUsuarioComponent } from './alertas-usuario.component';

describe('AlertasUsuarioComponent', () => {
  let component: AlertasUsuarioComponent;
  let fixture: ComponentFixture<AlertasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertasUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
