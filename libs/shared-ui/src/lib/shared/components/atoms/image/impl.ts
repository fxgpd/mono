import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

import { imageComponentSelector } from './model';

@Component({
  selector: `${imageComponentSelector}`,
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
})
export class ImageComponent {
  @HostBinding('class.fx-img') getFxImageClass() {
    return true;
  }

  @Input() src = '';
  @Input() alt = '';
}
