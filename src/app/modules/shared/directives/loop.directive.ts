import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appLoop]'
})
export class LoopDirective {
  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef) { }

  @Input('appLoop') set loop(num: number) {
    for (let i = 0; i < num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
