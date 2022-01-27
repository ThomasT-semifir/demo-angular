import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nom-dynamique',
  templateUrl: './nom-dynamique.component.html',
  styleUrls: ['./nom-dynamique.component.scss']
})
export class NomDynamiqueComponent implements OnInit {

  utilisateur: {nom: string, age: number} = {nom: "Jules", age: 32};
  date: string = new Date().toUTCString();
  constructor() { }

  ngOnInit(): void {
  }

  changeUtilisateur(): void {
    this.utilisateur.nom = "blablabla"
  }

}
