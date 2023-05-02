import {Component} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss'],
  changeDetection: environment.changeDetection
})
export class NestedComponent {
  count: number = 1;

  constructor() { }

  increase(){
    this.count += 1;
  }

}
