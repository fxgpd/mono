import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WordAppTemplateComponent } from './templates/word-app/impl';

@NgModule({
  imports: [CommonModule, WordAppTemplateComponent],
  declarations: [],
  exports: [WordAppTemplateComponent],
})
export class SharedUiModule {}
