import { Component, OnInit } from '@angular/core';
import { frameWorkAndTools, language } from '../../model/language-data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {

  //Pie grid chart
  language: any = language; // chart data
  view: any = [800, 300];  
  showLegend: boolean = false;
  showLabels: boolean = false;
  minWidth: number = 50;
  designatedTotal:number = 100;
  colorScheme = {
    domain: ['orange', 'blue', 'black', 'green', 'red'],
  };

  //Horizontal bar chart
  frameWorkAndTools: any = frameWorkAndTools;
  frameWorkAndToolsView: any = [800, 300];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  xScaleMax: number = 100;
  frameWorkAndToolsColorScheme = {
    domain: ['#e76f51', '#264653', '#e9c46a', '#2a9d8f', '#f4a261']
  }
  
  constructor() {
  }
  ngOnInit(): void {}

  onSelect(event: any){

  }
}
