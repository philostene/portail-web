import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {

  content = 'cette colonne';

}
