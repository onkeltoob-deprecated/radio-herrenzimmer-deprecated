import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Configuration } from '../model/configuration.model';

// Service zum Auslesen von Konfigurationseinstellungen
@Injectable()
export class ConfigurationService implements OnInit {
  // Konfigurationsobjekt der Anwendung
  private configuration: Configuration;

  // Erstellt ein neues Objekt vom Typ ConfigurationService
  constructor(private http: HttpClient) {}

  // Wird beim Initialisieren des Services ausgeführt
  ngOnInit(): void {
    this.http.get('../app.config.json')
      .map((res: Response) => {
        return res['Genres'].map(function (config) {
          console.info(config);
          //return new Genre(genre.Genre);
        });
      });
  }

  // Gibt das Konfigurationsobjekt der Anwendung zurück
  getConfiguration(): Configuration {
    return this.configuration;
  }
}
