import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheyMessageComponent } from './they-message.component';

describe('TheyMessageComponent', () => {
  let component: TheyMessageComponent;
  let fixture: ComponentFixture<TheyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheyMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
