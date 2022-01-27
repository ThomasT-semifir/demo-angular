import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  @Input() articleEnfant: Article = {nom: "", prix: 0};
  @Output() ajouterCommentaire: EventEmitter<string> = new EventEmitter<string>();

  commentaire: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }
  
  envoyerCommentaire(): void {
    this.ajouterCommentaire.emit(this.commentaire)
  }


}
