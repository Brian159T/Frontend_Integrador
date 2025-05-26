import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesUsuarioComponent } from './configuraciones-usuario.component';

describe('ConfiguracionesUsuarioComponent', () => {
  let component: ConfiguracionesUsuarioComponent;
  let fixture: ComponentFixture<ConfiguracionesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionesUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
