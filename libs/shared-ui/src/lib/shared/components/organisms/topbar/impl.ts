import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../../atoms/button/impl';
import { ImageComponent } from '../../atoms/image/impl';
import { topbarSelector } from './model';

@Component({
  selector: `${topbarSelector}`,
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
  standalone: true,
  imports: [CommonModule, ImageComponent, ButtonComponent],
})
export class TopbarComponent {}
