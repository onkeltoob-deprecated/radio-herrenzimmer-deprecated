import { Component, OnInit } from '@angular/core';
import { Platform } from '../../model/platform.model';
import { PlatformService } from '../../service/platform.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})

export class PlatformsComponent implements OnInit {
  // Liste der anzuzeigenden Social-Media-Plattformen
  platforms: Platform[];

  // Erstellt ein neues Objekt vom Typ PlatformsComponent
  constructor(platformService: PlatformService) {
    this.platforms = platformService.getPlatforms();
  }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
  }

}
