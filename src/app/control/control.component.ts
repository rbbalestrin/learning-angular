import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  private el = inject(ElementRef);

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  label = input.required<string>();
  onCLick() {
    console.log(this.control);
  }
}
