import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: '[fx-link]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
})
export class LinkComponent {
  @HostBinding('class.fx-link') getFxLinkClass() {
    return true;
  }

  @HostBinding('class.fromLeft') getFromLeftClass() {
    return true;
  }
}
