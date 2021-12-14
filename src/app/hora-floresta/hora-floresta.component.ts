import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora-floresta',
  templateUrl: './hora-floresta.component.html',
  styleUrls: ['./hora-floresta.component.css']
})
export class HoraFlorestaComponent implements OnInit {

  hora_en_floresta:Date = new Date();

  constructor() { }

  ngOnInit(): void {

    

  }

}
