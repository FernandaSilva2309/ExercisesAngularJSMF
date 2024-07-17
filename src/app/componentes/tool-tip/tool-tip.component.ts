import {Component} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tool-tip',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
  templateUrl: './tool-tip.component.html',
  styleUrl: './tool-tip.component.css'
})
export class ToolTipComponent {

}
