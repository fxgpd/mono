import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ListItemComponent } from '../list-item/impl';
import { listSelector } from './model';

@Component({
  selector: `${listSelector}`,
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
  standalone: true,
  imports: [CommonModule, ListItemComponent],
})
export class ListComponent {
  @Input() typeList!: 'common' | 'numeric';
  @Input() headerValue!: string;
  @Input() textValue!: string;
}
