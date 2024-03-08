import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWindowHeaderComponent } from './contact-window-header.component';

describe('ContactWindowHeaderComponent', () => {
  let component: ContactWindowHeaderComponent;
  let fixture: ComponentFixture<ContactWindowHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactWindowHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactWindowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
