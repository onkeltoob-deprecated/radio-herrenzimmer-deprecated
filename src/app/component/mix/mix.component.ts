import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mix } from '../../model/mix.model';
import { MixService } from '../../service/mix.service';
import { DateTimeService } from '../../service/date-time.service';
import * as moment from 'moment';

@Component({
  selector: 'app-mix',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MixComponent implements OnInit, OnDestroy {
  // Der anzuzeigende Mix
  @Input() mix: Mix;

  // Subscription für die Route
  private routeSubscription: any;

  // Subscription des Dienstes zum Auslesen von Mix-Daten
  private mixServiceSubscription: any;

  // Erstellt ein neues Objekt vom Typ MixComponent
  constructor(private route: ActivatedRoute, private mixService: MixService, public dateTimeService: DateTimeService) { }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      if (params['title']) {
        let title: string = params['title'];

        // Mix über den entsprechenden Service ermitteln
        this.mixServiceSubscription = this.mixService.getMix(title).subscribe(data => {
          console.info(data);
          this.mix = data;
        });
      }
    });
  }

  // Wird beim Zerstören der Komponente aufgerufen
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.mixServiceSubscription.unsubscribe();
  }

  // Gibt den gesamten Einleitungstext zurück
  getIntroduction() {
    return this.getMixDate() + ': ' + this.mix.descriptionHtml;
  }

  // Gibt den aktuellen Status der Detailinformationen zurück
  getMixDate() {
    return moment(this.mix.uploaded).format('MMMM Do, YYYY');;
  }
}
