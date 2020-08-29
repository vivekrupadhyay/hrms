import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponentHost]',
})
export class ComponentHostDirective {
  @Input() instanceKey: string;
  constructor(public viewContainerRef: ViewContainerRef) {}
}
