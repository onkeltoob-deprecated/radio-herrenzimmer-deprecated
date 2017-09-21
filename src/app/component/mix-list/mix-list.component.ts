import { Component, OnInit } from '@angular/core';
import { MixService } from '../../service/mix.service';
import { Mix } from '../../model/mix.model';

@Component({
  selector: 'app-mix-list',
  templateUrl: './mix-list.component.html',
  styleUrls: ['./mix-list.component.scss']
})
export class MixListComponent implements OnInit {
  // Array der zur Verfügung stehenden Mixes
  mixes: Mix[];

  // Erstellt ein neues Objekt vom Typ MixListComponent
  constructor(mixService: MixService) {
    // Mixes über den entsprechenden Service ermitteln
    mixService.getMixes().subscribe(data => {
      this.mixes = data.reverse();
    });
  }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
  }

}
