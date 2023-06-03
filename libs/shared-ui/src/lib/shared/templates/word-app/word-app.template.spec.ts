import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAppTemplateComponent } from './word-app.template';

describe('TemplateMarkupComponent', () => {
  let component: WordAppTemplateComponent;
  let fixture: ComponentFixture<WordAppTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordAppTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordAppTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
