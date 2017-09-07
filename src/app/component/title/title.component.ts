import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { Image } from '../../model/image.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  // Titel der Anwendung
  title: string;

  // Untertitel der Anwendung
  subtitle: string;

  // Titelbild
  image: Image;

  // Erstellt ein neues Objekt vom Typ TitleComponent
  constructor(titleService: TitleService) {
    this.title = titleService.getTitle();
    this.subtitle = titleService.getSubtitle();
    this.image = titleService.getImage();
  }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
  }

}
