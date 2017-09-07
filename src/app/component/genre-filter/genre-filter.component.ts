import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../service/genre.service';
import { Genre } from '../../model/genre.model';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.scss']
})
export class GenreFilterComponent implements OnInit {
  // Array der zur Verfügung stehenden Genres
  genres: Genre[];

  // Erstellt ein neues Objekt vom Typ GenreFilterComponent
  constructor(genreService: GenreService) {
    // Genres über den entsprechenden Service ermitteln
    genreService.getGenres().subscribe(data => {
      this.genres = data;
    });
  }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {

  }

}
