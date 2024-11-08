import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from '../../control/control.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(titleElement: string, descriptionElement: string) {
    console.log(titleElement, descriptionElement);

    this.form().nativeElement.reset();
  }
}
