import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Genre } from '../model/genre.model';

// Service zum Auslesen von Genre-Daten
@Injectable()
export class GenreService implements OnInit {

  // Erstellt ein neues Objekt vom Typ GenreService
  constructor(private http: HttpClient) {
  }

  // Ermittelt die Genres über die API
  getGenres() : Observable<Genre[]> {
    return this.http.get('http://api.radio-herrenzimmer.de/genres')
      .map((res: Response) => {
        return res['Genres'].map(function (genre) {
          return new Genre(genre.Genre);
        });
      });
  }

  // Wird beim Initialisieren des Services ausgeführt
  ngOnInit(): void { }
}
