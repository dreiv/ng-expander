import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent {
  @Input() heading: string;
}
