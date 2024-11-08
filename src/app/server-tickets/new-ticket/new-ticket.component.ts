import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
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
  add = output<{ title: string; text: string }>();

  onSubmit(titleElement: string, descriptionElement: string) {
    this.add.emit({ title: titleElement, text: descriptionElement });
    console.log(titleElement, descriptionElement);

    this.form().nativeElement.reset();
  }
}
