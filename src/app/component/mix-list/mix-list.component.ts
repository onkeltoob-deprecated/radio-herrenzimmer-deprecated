import { Component, OnInit, OnDestroy } from '@angular/core';
import { MixService } from '../../service/mix.service';
import { Mix } from '../../model/mix.model';

@Component({
  selector: 'app-mix-list',
  templateUrl: './mix-list.component.html',
  styleUrls: ['./mix-list.component.scss']
})
export class MixListComponent implements OnInit, OnDestroy {
  // Array der zur Verfügung stehenden Mixes
  mixes: Mix[];

  // Subscription des Dienstes zum Auslesen von Mix-Daten
  private mixServiceSubscription: any;

  // Erstellt ein neues Objekt vom Typ MixListComponent
  constructor(private mixService: MixService) { }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
    // Mixes über den entsprechenden Service ermitteln
    this.mixServiceSubscription = this.mixService.getMixes().subscribe(data => {
      this.mixes = data.reverse();
    });
  }

  // Wird beim Zerstören der Komponente aufgerufen
  ngOnDestroy() {
    if (this.mixServiceSubscription) {
      this.mixServiceSubscription.unsubscribe();
    }
  }
}
