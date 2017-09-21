import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Mix } from '../../model/mix.model';
import * as moment from 'moment';

@Component({
  selector: 'app-mix',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MixComponent implements OnInit {
  // Der anzuzeigende Mix
  @Input() mix: Mix;

  // Erstellt ein neues Objekt vom Typ MixComponent
  constructor() { }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
  }

  // Gibt den gesamten Einleitungstext zurück
  getIntroduction() {
    return this.getMixDate() + ': ' + this.mix.descriptionHtml;
  }

  // Gibt den aktuellen Status der Detailinformationen zurück
  getMixDate() {
    return moment(this.mix.uploaded).format('MMMM Do, YYYY');;
  }

  // Ermittelt die Dauer des Mixes im ISO-Format
  getIso8601Duration() {
    var hours = Math.floor(this.mix.durationSeconds / 3600);
    var minutes = Math.floor((this.mix.durationSeconds - (hours * 3600)) / 60);
    var seconds = this.mix.durationSeconds - (hours * 3600) - (minutes * 60);

    return 'PT' + hours.toString() + 'H' + minutes.toString() + 'M' + seconds.toString() + 'S';
  }
}
