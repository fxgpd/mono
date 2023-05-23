import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WordAppTemplateComponent } from './shared/templates/word-app/word-app.template';

@NgModule({
  imports: [CommonModule, WordAppTemplateComponent],
  declarations: [],
  exports: [WordAppTemplateComponent],
})
export class SharedUiModule {}
