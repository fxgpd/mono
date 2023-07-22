import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TopbarComponent } from '../../shared/components/organisms/topbar/impl';

@Component({
  selector: 'fx-word-app-template',
  standalone: true,
  imports: [CommonModule, TopbarComponent],
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
})
export class WordAppTemplateComponent {}
