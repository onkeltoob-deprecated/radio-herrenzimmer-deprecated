import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Genre } from '../model/genre.model';
import { Mix } from '../model/mix.model';
import { Track } from '../model/track.model';

// Service zum Auslesen von Mix-Daten
@Injectable()
export class MixService implements OnInit {

  // Erstellt ein neues Objekt vom Typ MixService
  constructor(private http: HttpClient) {
  }

  // Ermittelt die Mixes über die API
  getMixes(): Observable<Mix[]> {
    return this.http.get('http://api.radio-herrenzimmer.de/mixes')
      .map((res: Response) => {
        return res['Mixes'].map(function (resultMix) {
          let mix: Mix = new Mix();
          mix.id = resultMix.MixId;
          mix.title = resultMix.Title;
          mix.genre = new Genre(resultMix.Genre);
          mix.durationSeconds = resultMix.DurationSeconds;
          mix.descriptionHtml = resultMix.DescriptionHtml;
          mix.trackId = resultMix.TrackId;
          mix.trackUrl = resultMix.TrackUrl;
          mix.urlTitle = resultMix.UrlTitle;
          mix.uploaded = new Date(resultMix.Uploaded * 1000);
          mix.playbacks = resultMix.PlaybackCount;
          mix.downloads = resultMix.DownloadCount;
          mix.comments = resultMix.CommentCount;
          mix.favorites = resultMix.FavoritingsCount;
          mix.reposts = resultMix.RepostCount;

          mix.tracks = JSON
          .parse(resultMix.TracklistJson)
          .map(
            track => new Track(track['Number'], track['Title'], track['Artist'], track['Label'])
          );

console.info(mix);

          return mix;
        });
      });
  }

  // Wird beim Initialisieren des Services ausgeführt
  ngOnInit(): void { }
}
