import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RenderProfilerDirective } from './render-profiler.directive';
import { SubComponent } from './sub/sub.component';
import { NestedComponent } from './nested/nested.component';
import {UnpatchModule} from "@rx-angular/template/unpatch";
import { PatchedNestedComponent } from './patched-nested/patched-nested.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderProfilerDirective,
    SubComponent,
    NestedComponent,
    PatchedNestedComponent
  ],
  imports: [
    BrowserModule, UnpatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
