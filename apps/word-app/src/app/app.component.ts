import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@fx/shared-ui';

@Component({
  standalone: true,
  imports: [SharedUiModule, RouterModule],
  selector: 'fxgpd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'word-app';
}
