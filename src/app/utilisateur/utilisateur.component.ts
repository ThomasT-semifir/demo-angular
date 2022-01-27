import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs: Utilisateur[] = [
    {nom: "Thomas", age: 35, photoUrl: "https://st2.depositphotos.com/1000877/5947/i/600/depositphotos_59478951-stock-photo-red-kitten.jpg" },
    {nom: "Jean", age: 12, photoUrl: "https://st2.depositphotos.com/1000877/5947/i/600/depositphotos_59478951-stock-photo-red-kitten.jpg" },
    {nom: "Juliette", age: 47, photoUrl: "https://st2.depositphotos.com/1000877/5947/i/600/depositphotos_59478951-stock-photo-red-kitten.jpg" },
  ]

  stringUtil: string = `L'utilisateur ${this.utilisateurs[0].nom} a ${this.utilisateurs[0].age} ans`

  variableDemo: string = "Hello World!"

  constructor() { }

  ngOnInit(): void {
  }

  ajouterUtilisateur(): void {
    let nouvelUtilisateur: Utilisateur = {nom: "toto", age: 65, photoUrl: "https://st2.depositphotos.com/1000877/5947/i/600/depositphotos_59478951-stock-photo-red-kitten.jpg"}
    this.utilisateurs.push(nouvelUtilisateur)
    console.log(this.utilisateurs);
  }

  changerPhoto(): void {
    this.utilisateurs[0].photoUrl = "https://media.istockphoto.com/photos/middle-age-man-portrait-picture-id1285124274?s=612x612"
  }

  direBonjour(utilisateur: Utilisateur): void {
    alert(`${utilisateur.nom} vous dit bonjour!`)
  }

  testEvent(event: Event): void {
    console.log(event);
  }
}

