import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCheckerComponent } from './todo-checker.component';

describe('TodoCheckerComponent', () => {
  let component: TodoCheckerComponent;
  let fixture: ComponentFixture<TodoCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCheckerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
