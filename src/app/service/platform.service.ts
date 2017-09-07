import { Injectable } from '@angular/core';
import { Platform } from '../model/platform.model';

@Injectable()
export class PlatformService {
  
  getPlatforms(): Platform[] {
    return [
      {
        url: 'http://radio-herrenzimmer.de/rss',
        title: 'Subscribe to RSS feed',
        icon: {
          path: 'rss.png',
          alternateText: 'RSS'
        }
      },
      {
        url: 'https://twitter.com/onkeltoob',
        title: 'Twitter',
        icon: {
          path: 'twitter.png',
          alternateText: 'Twitter'
        }
      },
      {
        url: 'https://soundcloud.com/onkeltoob',
        title: 'Soundcloud',
        icon: {
          path: 'soundcloud.png',
          alternateText: 'Soundcloud'
        }
      },
      {
        url: 'https://mixcloud.com/onkeltoob',
        title: 'Mixcloud',
        icon: {
          path: 'mixcloud.png',
          alternateText: 'Mixcloud'
        }
      },
      {
        url: 'https://hearthis.at/onkeltoob',
        title: 'hearthis.at',
        icon: {
          path: 'hearthis.png',
          alternateText: 'hearthis.at'
        }
      }
    ];
  }
}
