import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasaComponent } from './barrasa.component';

describe('BarrasaComponent', () => {
  let component: BarrasaComponent;
  let fixture: ComponentFixture<BarrasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
