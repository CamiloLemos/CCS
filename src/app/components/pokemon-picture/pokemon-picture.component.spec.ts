import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPictureComponent } from './pokemon-picture.component';

describe('PokemonPictureComponent', () => {
  let component: PokemonPictureComponent;
  let fixture: ComponentFixture<PokemonPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonPictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
