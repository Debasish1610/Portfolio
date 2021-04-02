import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any ={
    'language': ['C', 'C++', 'Java', 'PHP', 'Javascript'],
    'framework': ['Angular', 'Angular material', 'Bootstrap'],
    'tools': ['git', 'vscode']
  };
  constructor() { }
  ngOnInit(): void {
  }

  

}
