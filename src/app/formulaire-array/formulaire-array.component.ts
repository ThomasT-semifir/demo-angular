import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire-array',
  templateUrl: './formulaire-array.component.html',
  styleUrls: ['./formulaire-array.component.scss']
})
export class FormulaireArrayComponent implements OnInit {

  equipe: FormGroup

  constructor() {
    this.equipe = new FormGroup({
      nomEquipe: new FormControl(),
      membres: new FormArray([
        this.formulaireMembreFactory()
      ])
    })
  }

  private formulaireMembreFactory(){
    return new FormGroup({
      nom: new FormControl(),
      pseudo: new FormControl()
    })
  }
  
  get membresArray() {
    return this.equipe.get("membres") as FormArray
  }

  ngOnInit(): void {
  }

  ajouterMembre(): void {
    this.membresArray.push(this.formulaireMembreFactory())
  }

  onSubmit(): void {
    console.log(this.equipe.value);
  }

  supprimerMembre(index: number):void{
    this.membresArray.removeAt(index)
  }

}
