import { Component } from '@angular/core';

import { ButtonComponent } from '../../components/atoms/button/impl';
import { ImageComponent } from '../../components/atoms/image/impl';
import { LinkComponent } from '../../components/atoms/link/impl';

@Component({
  selector: 'fx-word-app-template',
  standalone: true,
  imports: [ButtonComponent, LinkComponent, ImageComponent],
  templateUrl: './word-app.template.html',
  styleUrls: ['./word-app.template.scss'],
})
export class WordAppTemplateComponent {}
