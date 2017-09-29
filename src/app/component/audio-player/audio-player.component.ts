import { Component, Input, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../service/message.service';
import { Mix } from '../../model/mix.model';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  // Der abzuspielende Mix
  mix: Mix;

  // Das Abonnement auf dem Message-Dienst zum Empfangen neuer Mixe zum Abspielen
  subscription: Subscription;

  // Erstellt ein neues Objekt vom Typ AudioPlayerComponent
  constructor(private messageService: MessageService<Mix>) {
  }

  // Wird beim Initialisieren der Komponente aufgerufen
  ngOnInit() {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(message => { 
        this.mix = message.data;
        console.info(message.data);
      });
  }

  // Wird beim Zerstören der Komponente aufgerufen
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
