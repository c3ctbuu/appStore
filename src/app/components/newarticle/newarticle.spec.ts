import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newarticle } from './newarticle';

describe('Newarticle', () => {
  let component: Newarticle;
  let fixture: ComponentFixture<Newarticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newarticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newarticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
