import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Body1Directive } from './shared/directives/body-1/body-1.directive';
import { H1Directive } from './shared/directives/h-1/h1.directive';
import { WordAppTemplateComponent } from './templates/word-app/impl';

@NgModule({
  imports: [CommonModule, WordAppTemplateComponent],
  declarations: [Body1Directive, H1Directive],
  exports: [WordAppTemplateComponent],
})
export class SharedUiModule {}
