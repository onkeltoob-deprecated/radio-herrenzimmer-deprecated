import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import { Configuration } from '../model/configuration.model';

// Service zum Auslesen von Konfigurationseinstellungen
@Injectable()
export class ConfigurationService {
  // Konfigurationsobjekt der Anwendung
  private configuration: Configuration;

  // Subscription für das Auslesen der Konfiguration
  private configSubscription: any;

  // Erstellt ein neues Objekt vom Typ ConfigurationService
  constructor(private http: HttpClient) {
  }

  // Lädt die Konfiguration aus der entsprechenden Datei
  load(): Promise<Configuration> {
    this.configuration = null;

    return this.http
      .get('/assets/app.config.json')
      .toPromise()
      .then((data: any) => this.configuration = data)
      .catch((err: any) => {
        Promise.resolve();
        console.error(err);
      });
  }

  // Gibt das Konfigurationsobjekt der Anwendung zurück
  public getConfiguration(): Configuration {
    return this.configuration;
  }
}
