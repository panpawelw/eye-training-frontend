import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGaborComponent } from './game-gabor.component';

describe('GameGaborComponent', () => {
  let component: GameGaborComponent;
  let fixture: ComponentFixture<GameGaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameGaborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
