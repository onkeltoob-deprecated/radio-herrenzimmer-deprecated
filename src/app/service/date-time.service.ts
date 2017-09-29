import { Injectable } from '@angular/core';

// Service zum Manipulieren und Formatieren von Datums- und Zeitwerten
@Injectable()
export class DateTimeService {

  // Erstellt ein neues Objekt vom Typ DateTimeService
  constructor() { }

  // Ermittelt eine Zeitangabe (Dauer) für eine übergebene Zahl von Sekunden im ISO-Format
  getIso8601Duration(durationSeconds: number) {
    var hours = Math.floor(durationSeconds / 3600);
    var minutes = Math.floor((durationSeconds - (hours * 3600)) / 60);
    var seconds = durationSeconds - (hours * 3600) - (minutes * 60);

    return 'PT' + hours.toString() + 'H' + minutes.toString() + 'M' + seconds.toString() + 'S';
  }

  // Ermittelt eine menschenlesbare Zeitangabe (Dauer) für eine übergebene Zahl von Sekunden
  getDurationFromSeconds(durationSeconds) {
    var hours = Math.floor(durationSeconds / 3600);
    var minutes = Math.floor((durationSeconds - (hours * 3600)) / 60);
    var seconds = durationSeconds - (hours * 3600) - (minutes * 60);

    return '' + hours + ':' + ("00" + minutes).slice(-2) + ':' + ("00" + seconds).slice(-2)
  }
}
