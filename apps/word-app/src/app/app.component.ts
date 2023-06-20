import { Component } from '@angular/core';
import { SharedUiModule } from '@fx/shared-ui/index';

@Component({
  standalone: true,
  imports: [SharedUiModule],
  selector: 'fxgpd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'word-app';
}
