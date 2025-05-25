import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosUsuarioComponent } from './graficos-usuario.component';

describe('GraficosUsuarioComponent', () => {
  let component: GraficosUsuarioComponent;
  let fixture: ComponentFixture<GraficosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficosUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
