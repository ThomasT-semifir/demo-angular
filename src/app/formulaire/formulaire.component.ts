import { Utilisateur } from './../models/Utilisateur';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  profilUtilisateur: FormGroup;
  deuxiemeProfilUtilisateur: FormGroup;
  utilisateur: {nom:string, prenom:string}

  constructor() { 
    this.utilisateur = {
      nom:"Jean",
      prenom:"Toto"
    }
    this.profilUtilisateur = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl()
    });

    this.deuxiemeProfilUtilisateur = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmitFirst(): void {
    this.deuxiemeProfilUtilisateur.setValue(this.utilisateur);
    // this.deuxiemeProfilUtilisateur.patchValue({
    //   nom: this.profilUtilisateur.controls['nom'].value,
    //   prenom: this.profilUtilisateur.controls['prenom'].value,
    // })
  }

  onSubmitSecond(): void{
    console.log(this.deuxiemeProfilUtilisateur.value);
  }

}
