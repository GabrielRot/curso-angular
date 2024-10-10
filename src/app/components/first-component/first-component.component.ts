import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Gabriel';
  age: number = 21;
  job = "Desenvolvedor";
  hobbies = ["Programar", "Treinar", "Jogar"]
  moto = {
    name: "CB 300",
    year: 2015
  }
}
