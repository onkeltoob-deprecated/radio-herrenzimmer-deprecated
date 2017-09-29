import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mix } from '../../model/mix.model';
import { MixService } from '../../service/mix.service';

@Component({
  selector: 'app-router-example',
  templateUrl: './router-example.component.html',
  styleUrls: ['./router-example.component.css']
})
export class RouterExampleComponent implements OnInit {
  // Der anzuzeigende Mix
  public mix: Mix;

  // Subscription für die Route
  private routeSubscription: any;

  // Subscription des Dienstes zum Auslesen von Mix-Daten
  private mixServiceSubscription: any;

  // Erstellt ein neues Objekt vom Typ MixComponent
  constructor(private route: ActivatedRoute, private mixService: MixService) {}

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      if (params['title']) {
        let title: string = params['title'];

        // Mix über den entsprechenden Service ermitteln
        this.mixServiceSubscription = this.mixService.getMix(title).subscribe(data => {
          this.mix = data[0];
        });
      }
    });
  }

  // Wird beim Zerstören der Komponente aufgerufen
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.mixServiceSubscription.unsubscribe();
  }
}
