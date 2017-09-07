import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('detailsState', [
      state('showDetails', style({
        opacity: 1,
        display: 'block'
      })),
      state('hideDetails', style({
        opacity: 0,
        display: 'none'
      })),
      transition('showDetails => hideDetails', animate('0ms ease-out')),
      transition('hideDetails => showDetails', animate('2000ms 500ms ease-in'))
    ]),
    trigger('detailsLinkState', [
      state('hideDetails', style({
        opacity: 1,
        display: 'block'
      })),
      state('showDetails', style({
        opacity: 0,
        display: 'none'
      })),
      transition('hideDetails => showDetails', animate('0ms ease-out')),
      transition('showDetails => hideDetails', animate('2000ms 500ms ease-in'))
    ])
  ]
})
export class IntroComponent implements OnInit {

  // Gibt an, ob die lange Version des Intros angezeigt werden soll
  showDetails: boolean;

  // Erstellt ein neues Objekt vom Typ IntroComponent
  constructor() {
    this.showDetails = false;
  }

  // Gibt den aktuellen Status der Detailinformationen zurück
  get currentDetailsState() {
    return this.showDetails ? 'showDetails' : 'hideDetails'
  }

  // Steuert das Umschalten der Sichtbarkeit der Intro-Details
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
  }
}
