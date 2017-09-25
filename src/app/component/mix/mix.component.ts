import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Mix } from '../../model/mix.model';
import { DateTimeService } from '../../service/date-time.service';
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
  constructor(public dateTimeService: DateTimeService) { 
  }

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
}
