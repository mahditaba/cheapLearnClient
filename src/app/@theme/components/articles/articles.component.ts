import { Component, Input, OnInit } from '@angular/core';

interface InformationObjInterface {
  picture: any,
  title: string,
  description: string
}

@Component({
  selector: 'show-articles',
  styleUrls: ['./articles.component.scss'],
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {

  @Input() informationObj: InformationObjInterface;

  constructor() {
  }

  ngOnInit() {
  }
}
