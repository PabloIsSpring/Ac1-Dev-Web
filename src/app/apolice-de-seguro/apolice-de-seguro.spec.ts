import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceDeSeguro } from './apolice-de-seguro';

describe('ApoliceDeSeguro', () => {
  let component: ApoliceDeSeguro;
  let fixture: ComponentFixture<ApoliceDeSeguro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApoliceDeSeguro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoliceDeSeguro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
