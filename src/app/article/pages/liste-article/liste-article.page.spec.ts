import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticlePage } from './liste-article.page';

describe('ListeArticlePage', () => {
  let component: ListeArticlePage;
  let fixture: ComponentFixture<ListeArticlePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeArticlePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
