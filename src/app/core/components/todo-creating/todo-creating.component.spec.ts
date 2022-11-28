import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreatingComponent } from './todo-creating.component';

describe('TodoCreatingComponent', () => {
  let component: TodoCreatingComponent;
  let fixture: ComponentFixture<TodoCreatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCreatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
