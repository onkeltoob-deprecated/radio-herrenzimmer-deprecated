import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  // constructor(private metaService: Meta){
  //   this.metaService.addTags([
  //     { name: 'twitter:title', content: 'Content Title' },
  //     { property: 'og:title', content: 'Content Title' }
  //   ]);

  //   this.metaService.updateTag({
  //     content: 'http://example.com/new-movie.swf'
  //   },
  //    "property='og:video'"
  //   );
  // }

}

