import {Component} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss'],
  changeDetection: environment.changeDetection
})
export class SubComponent {

  constructor() { }

}
