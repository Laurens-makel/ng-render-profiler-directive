import {
  Directive,
  Input,
  AfterViewChecked,
  ChangeDetectorRef,
  ViewContainerRef,
  ApplicationRef
} from '@angular/core';
import {delay, of, take} from "rxjs";

@Directive({
  selector: '[renderProfiler]'
})
export class RenderProfilerDirective implements AfterViewChecked {

  @Input() enabled      = true;
  @Input() defaultBg    = 'white';
  @Input() transitionBg = 'blue';
  @Input() transition   = 'background-color 1s linear';

  private readonly name: string;

  private get style(){
    return this._view.element.nativeElement.style;
  }

  constructor(private cdr:ChangeDetectorRef, private _view: ViewContainerRef, private _app: ApplicationRef) {
    this.defaultBg = this.style.backgroundColor||this.defaultBg;
    this.style.backgroundColor = this.defaultBg;
    this.style.transition      = this.transition;
    // @ts-ignore
    this.name = this.cdr.context.constructor.name;
  }

  ngAfterViewChecked(){
    console.log(`Change detection triggered for ${this.name}`)
    this.style.backgroundColor = this.transitionBg;
    of(this.defaultBg).pipe(take(1), delay(750)).subscribe(bg => this.style.backgroundColor = bg);
  }

}
