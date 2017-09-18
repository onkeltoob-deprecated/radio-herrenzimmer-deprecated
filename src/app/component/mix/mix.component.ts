import { Component, Input, OnInit } from '@angular/core';
import { Mix } from '../../model/mix.model';
import * as moment from 'moment';

@Component({
  selector: 'app-mix',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.scss']
})
export class MixComponent implements OnInit {
  // Der anzuzeigende Mix
  @Input() mix: Mix;

  // Erstellt ein neues Objekt vom Typ MixComponent
  constructor() { }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
  }

  // Gibt den aktuellen Status der Detailinformationen zurück
  getMixDate() {
    return moment(this.mix.uploaded).format('MMMM Do, YYYY');;
  }
}
