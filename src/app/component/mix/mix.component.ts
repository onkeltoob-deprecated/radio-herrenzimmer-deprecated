import { Component, Input, Output, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mix } from '../../model/mix.model';
import { MessageService } from '../../service/message.service';
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
  constructor(
    private route: ActivatedRoute, 
    private mixService: MixService, 
    public dateTimeService: DateTimeService,
    private messageService: MessageService<Mix>) { }

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
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }

    if (this.mixServiceSubscription) {
      this.mixServiceSubscription.unsubscribe();
    }
  }

  // Gibt den gesamten Einleitungstext zurück
  getIntroduction() {
    return this.getMixDate() + ': ' + this.mix.descriptionHtml;
  }

  // Gibt den aktuellen Status der Detailinformationen zurück
  getMixDate() {
    return moment(this.mix.uploaded).format('MMMM Do, YYYY');;
  }

  // Schickt den Mix zum Abspielen an den Message-Dienst,
  // auf den die Abspiel-Komponente lauscht
  playMix(){
    this.messageService.sendMessage(this.mix);
  }
}
