import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCarrouselComponent } from './tarjeta-carrousel.component';

describe('TarjetaCarrouselComponent', () => {
  let component: TarjetaCarrouselComponent;
  let fixture: ComponentFixture<TarjetaCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
