import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoQuickAddComponent } from './todo-quick-add.component';

describe('TodoQuickAddComponent', () => {
  let component: TodoQuickAddComponent;
  let fixture: ComponentFixture<TodoQuickAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoQuickAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoQuickAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
