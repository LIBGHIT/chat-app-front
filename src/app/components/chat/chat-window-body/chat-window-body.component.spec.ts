import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWindowBodyComponent } from './chat-window-body.component';

describe('ChatWindowBodyComponent', () => {
  let component: ChatWindowBodyComponent;
  let fixture: ComponentFixture<ChatWindowBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatWindowBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatWindowBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
