import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { ButtonComponent } from '../../atoms/button/impl';
import { ImageComponent } from '../../atoms/image/impl';
import { chipComponentSelector, ChipData, ChipInputs } from './model';

@Component({
  selector: `${chipComponentSelector}`,
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ImageComponent],
})
export class ChipComponent {
  private _type: string | undefined;

  @Input() id: ChipInputs['id'] = '';
  @Input() title: ChipInputs['title'] = '';
  @Input() img: ChipInputs['img'] = '';
  @Input()
  get type(): ChipInputs['type'] {
    return this._type;
  }
  set type(type: ChipInputs['type']) {
    this._type = type;
  }
  @Input() src: string | undefined;

  @HostBinding('class.fx-chip') getIsChipClass() {
    return true;
  }

  @HostBinding('class.fx-chip-suggestion') get isChipSuggestionTypeClass() {
    return this.type && this.type === 'suggestion';
  }

  @HostBinding('class.fx-chip-filter') get isChipFilterTypeClass() {
    return this.type && this.type === 'filter';
  }

  @HostBinding('class.fx-chip-input') get isChipInputTypeClass() {
    return this.type && this.type === 'input';
  }

  @Output() chipClose = new EventEmitter<Pick<ChipData, 'id'>>();

  onChipClose() {
    this.chipClose.emit({ id: this.id });
  }
}
