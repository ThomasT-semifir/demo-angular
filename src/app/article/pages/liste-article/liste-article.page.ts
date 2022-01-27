import { Article } from './../../../models/Article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.page.html',
  styleUrls: ['./liste-article.page.scss']
})
export class ListeArticlePage implements OnInit {

  listeArticles: Article[] = [
    {nom: "souris", prix:20},
    {nom: "clavier", prix:30},
    {nom: "ecran", prix:100},
  ]

  articleParent: Article = {nom: "souris", prix:20}

  constructor() { }

  ngOnInit(): void {
  }

  afficher(): void {
    console.log(this.listeArticles);
  }

  addComment(event: string, index: number) {
    this.listeArticles[index].commentaire = event;
  }
}
