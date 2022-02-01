import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundBackgroundComponent } from './page-not-found-background.component';

describe('PageNotFoundBackgroundComponent', () => {
  let component: PageNotFoundBackgroundComponent;
  let fixture: ComponentFixture<PageNotFoundBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
