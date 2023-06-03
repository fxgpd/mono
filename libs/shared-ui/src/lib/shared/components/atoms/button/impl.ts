import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: '[fx-button]',
  standalone: true,
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
})
export class ButtonComponent implements OnInit {
  constructor(private elementRef: ElementRef<HTMLElement>) {}
  @Input() text = '';
  @Input() buttonType = '';

  ngOnInit() {
    this.elementRef.nativeElement.classList.add('button');
  }

  @HostBinding('class.filled') get getClassTypeFilled() {
    return this.buttonType === 'filled';
  }

  @HostBinding('class.outlined') get getClassTypeOutlined() {
    return this.buttonType === 'outlined';
  }

  @HostBinding('class.text') get getClassTypeText() {
    return this.buttonType === 'text';
  }
}
