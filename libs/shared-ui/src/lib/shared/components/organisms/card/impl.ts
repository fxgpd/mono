import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../../atoms/button/impl';
import { ListComponent } from '../../molecules/list/impl';
import { cardSelector } from './model';

@Component({
  selector: `${cardSelector}`,
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ListComponent],
})
export class CardComponent {}
