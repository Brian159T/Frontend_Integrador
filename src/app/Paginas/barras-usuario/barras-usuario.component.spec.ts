import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasUsuarioComponent } from './barras-usuario.component';

describe('BarrasUsuarioComponent', () => {
  let component: BarrasUsuarioComponent;
  let fixture: ComponentFixture<BarrasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrasUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
