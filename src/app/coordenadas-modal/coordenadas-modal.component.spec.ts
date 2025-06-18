import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadasModalComponent } from './coordenadas-modal.component';

describe('CoordenadasModalComponent', () => {
  let component: CoordenadasModalComponent;
  let fixture: ComponentFixture<CoordenadasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordenadasModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordenadasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
