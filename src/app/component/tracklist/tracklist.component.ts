import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../model/track.model';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})
export class TracklistComponent implements OnInit {

  // Die anzuzeigenden Tracks
  @Input() tracks: Track[];

  // Erstellt ein neues Objekt vom Typ TracklistComponent
  constructor() { }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
  }
}
