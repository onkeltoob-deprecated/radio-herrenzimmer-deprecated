import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../service/message.service';
import { Configuration } from '../../model/configuration.model';
import { Mix } from '../../model/mix.model';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  // Der abzuspielende Mix
  mix: Mix;

  // Liste der abzuspielenden Mixes
  played: Map<number, number>;

  // Das Abonnement auf dem Message-Dienst zum Empfangen neuer Mixe zum Abspielen
  subscription: Subscription;

  // Referenz auf den Audio-Player
  @ViewChild('audio') audio;

  // Erstellt ein neues Objekt vom Typ AudioPlayerComponent
  constructor(private messageService: MessageService<Mix>) {
  }

  // Spielt den aktuellen Mix ab
  start(): void {
    this.audio.nativeElement.src = this.mix.streamUrl;
    this.audio.nativeElement.play();
  }

  // Wird beim Pausieren des Mixes ausgeführt
  pause(): void {
    console.info('audio-player->pause');
  }

  // Wird beim Abspielen des Mixes ausgeführt
  play(): void {
    console.info('audio-player->play');
  }

  // Wird beim Initialisieren der Komponente aufgerufen
  ngOnInit() {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(message => {
        this.mix = message.data;
        this.start();
      });
  }

  // Wird beim Zerstören der Komponente aufgerufen
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
