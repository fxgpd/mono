import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { listItemSelector } from './model';

@Component({
  selector: `${listItemSelector}`,
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ListItemComponent {
  @Input() value: string = '';
}
