import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { ConfigurationService } from './configuration.service';
import { Configuration } from '../model/configuration.model';
import { Genre } from '../model/genre.model';
import { Mix } from '../model/mix.model';
import { Track } from '../model/track.model';

// Service zum Auslesen von Mix-Daten
@Injectable()
export class MixService {

  // Konfigurationsobjekt
  private configuration: Configuration;

  // Erstellt ein neues Objekt vom Typ MixService
  constructor(private configurationService: ConfigurationService, private http: HttpClient) {
    this.init();
  }

  // Wird beim Initialisieren des Services ausgeführt
  private init(): void {
    this.configuration = this.configurationService.getConfiguration();
  }

  // Ermittelt die Mixes über die API
  getMixes(): Observable<Mix[]> {
    return this.http.get(this.configuration.mixListEndpoint)
      .map((res: Response) => {
        let config: Configuration = this.configuration;
        return res['Mixes'].map(function (resultMix) {
          let mix: Mix = new Mix();
          mix.id = resultMix.MixId;
          mix.title = resultMix.Title;
          mix.genre = new Genre(resultMix.Genre);
          mix.durationSeconds = resultMix.DurationSeconds;
          mix.descriptionHtml = resultMix.DescriptionHtml;
          mix.trackId = resultMix.TrackId;
          mix.trackUrl = resultMix.TrackUrl;
          mix.artworkUrl = resultMix.Artwork;
          mix.streamUrl = resultMix.StreamUrl + '?client_id=' + config.soundcloudApiClientId;
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

          return mix;
        });
      });
  }

  // Ermittelt einen Mix anhand des URL-Titels über die API
  getMix(urlTitle: string): Observable<Mix> {
    return this.http.get(this.configuration.mixEndpoint.replace('{urlTitle}', urlTitle))
      .map((res: Response) => {
        let config: Configuration = this.configuration;
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
          mix.artworkUrl = resultMix.Artwork;
          mix.streamUrl = resultMix.StreamUrl + '?client_id=' + config.soundcloudApiClientId;
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

          return mix;
        });
      });
  }
}
