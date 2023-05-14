import { WordAppTemplateComponent } from 'libs/shared-ui/src/lib/templates/word-app/impl';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@fx/shared-ui/index';

@Component({
  standalone: true,
  selector: 'fxgpd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [SharedUiModule, RouterModule, WordAppTemplateComponent],
})
export class AppComponent {
  title = 'word-app';
}
