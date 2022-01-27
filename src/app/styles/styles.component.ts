import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {
  test: string = "toto";
  check: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(): string {
    return 'red'
  }

}
