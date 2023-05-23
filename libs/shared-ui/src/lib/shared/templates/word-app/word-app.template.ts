import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../components/atoms/button/button.component';

@Component({
  selector: 'fx-word-app-template',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './word-app.template.html',
  styleUrls: ['./word-app.template.scss'],
})
export class WordAppTemplateComponent {
  @Input() buttonType = '';
}
