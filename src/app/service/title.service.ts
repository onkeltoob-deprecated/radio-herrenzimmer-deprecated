import { Injectable } from '@angular/core';
import { Image } from '../model/image.model';

@Injectable()
export class TitleService {
  // Titel der Anwendung
  getTitle(): string {
    return "Radio Herrenzimmer";
  }

  // Untertitel der Anwendung
  getSubtitle(): string {
    return "Finest in techno - mixed by Onkel Toob";
  }

  // Titelbild
  getImage(): Image {
    return {
      path: '/assets/img/equalizer-upsidedown.png',
      alternateText: 'Radio Herrenzimmer - techno and friends mixed by Onkel Toob'
    }
  }
}
