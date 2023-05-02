import {ChangeDetectorRef, Component} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-patched-nested',
  templateUrl: './patched-nested.component.html',
  styleUrls: ['./patched-nested.component.scss'],
  changeDetection: environment.changeDetection
})
export class PatchedNestedComponent {
  count: number = 1;

  constructor(private cdr:ChangeDetectorRef) { }

  increase(){
    this.count += 1;
    this.cdr.detectChanges();
  }
}
