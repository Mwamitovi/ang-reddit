import { Component, OnInit, HostBinding } from '@angular/core';
// import the class "Article"
import { Article } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  // votes: number;
  // title: string;
  // link: string;
  article: Article;

  constructor() {
    // this.title = 'MwamiTovi';
    // this.link = 'http://mwamitovi-newsletter.co.ug';
    // this.votes = 10;
    this.article = new Article(
        'MwamiTovi',
        'http://mwamitovi-newsletter.co.ug',
        10
      );
  }

  voteUp(): boolean {
    // this.votes += 1;
    // this.article.votes += 1;
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    // this.votes -= 1;
    // this.article.votes -= 1;
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
