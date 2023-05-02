# NG Render Profiler Directive

Whilst investigating on Angular's change detection cycles, I went trough a process of manually adding the following code blocks to my components and their views:

some.component.html
```
<div *ngIf="profileRender()">
  ... 
</div>
```

some.component.ts
```
export class SomeComponent {

  ...

  profileRender(){
    console.log('Change detection triggered for: ', this.constructor.name);
    return true;
  }

  ...

}
```

This directive is aimed to simplify the process of identifying change detection to the following code:

some.component.html
```
<div renderProfiler>
  ... 
</div>
```

The directive will automatically pickup the class name of the related component and produce the following log line every time change detection is triggered.
```
render-profiler.directive.ts:35 Change detection triggered for AppComponent
```

## Attributes

### Transition Background

The directive changes the background color to a transition color, which defaults to `blue`, this helps to visualise which components have been rendered by change detection.

some.component.html
```
<div renderProfiler [transitionBg]="'purple'">
  ... 
</div>
```

### Default Background

The directive picks-up the set background color to the element or defaults to `white`, this is required for the transition to show which nested components are actually not rendered.

some.component.html
```
<div renderProfiler [bdefaultBg]="'purple'">
  ... 
</div>
```

### Enable/Disable Profiling
With the help of the `enabled` input variable, you could pass an expression to disable profiling change detection, for example in production mode:

some.component.html
```
<div renderProfiler [enabled]="!environment.production">
  ... 
</div>
```
