import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size: number = 40;
  font: string = 'Arial';
  color: string = 'red';

  classes = ["green-title", "small-title"];

  underline = 'underline-title';

}
