import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hora-floresta',
	templateUrl: './hora-floresta.component.html',
	styleUrls: ['./hora-floresta.component.css']
})
export class HoraFlorestaComponent implements OnInit {

	hora_en_floresta: Date = new Date();

	mostrar = true;

	frase: any = {
		mensaje: "Un gran poder requiere una gran responsabilidad",
		autor: "Ben Parker"
	};

	personajes:string[] = ["John", "Ben", "Venom", "Ringo"]

	constructor() { }

	ngOnInit(): void {



	}

}
