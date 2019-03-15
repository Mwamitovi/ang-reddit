import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'MwamiTovi';
    this.link = 'http://mwamitovi-newsletter.co.ug';
    this.votes = 10;
  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }
  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
