import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculoaComponent } from './circuloa.component';

describe('CirculoaComponent', () => {
  let component: CirculoaComponent;
  let fixture: ComponentFixture<CirculoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
