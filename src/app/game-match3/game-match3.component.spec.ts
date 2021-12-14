import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMatch3Component } from './game-match3.component';

describe('GameMatch3Component', () => {
  let component: GameMatch3Component;
  let fixture: ComponentFixture<GameMatch3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMatch3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMatch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
