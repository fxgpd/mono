import { EventEmitter } from '@angular/core';

export const chipComponentSelector = 'fx-chip';

export interface ChipData {
  id: string;
  title: string;
  img?: string;
  type?: string;
}

export interface ChipInputs extends ChipData {}

export interface ChipOutputs {
  chipClose: EventEmitter<Pick<ChipInputs, 'id'>>;
  onChipClose: () => void;
}

export interface ChipComponentAPI extends ChipInputs, ChipOutputs {}
