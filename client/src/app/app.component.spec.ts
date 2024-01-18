import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('When the App starts', () => {
  it('displays the resources section', () => {
    TestBed.configureTestingModule({ declarations: [AppComponent] });

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const sectionHeading: HTMLHeadElement = fixture.debugElement.query(
      By.css('[data-testid="heading-resources"]')
    ).nativeElement;

    expect(sectionHeading.innerHTML).toBe('Resources');
  });
});
