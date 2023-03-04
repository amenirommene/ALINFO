import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { } //utile pour les injections des services

  //appelé automatiquement une seule fois aprés la création du composant
  ngOnInit(): void { //utile pour initialiser les propriétés du composants
  }

}
