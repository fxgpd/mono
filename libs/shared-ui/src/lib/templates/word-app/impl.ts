import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/atoms/button/impl';
import { ImageComponent } from '../../shared/components/atoms/image/impl';
import { LinkComponent } from '../../shared/components/atoms/link/impl';
import { ChipComponent } from '../../shared/components/molecules/chip/impl';

@Component({
  selector: 'fx-word-app-template',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    LinkComponent,
    ImageComponent,
    ChipComponent,
  ],
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
})
export class WordAppTemplateComponent {}
