import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
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

  // Gibt an, ob alle Mixe hintereinander gespielt werden sollen
  @Input() playContinuously: boolean;

  // Gibt an, ob die Mixe in zufälliger Reihenfolge gespielt werden sollen
  @Input() playRandomly: boolean;

  // Das Abonnement auf dem Message-Dienst zum Empfangen neuer Mixe zum Abspielen
  subscription: Subscription;

  // Referenz auf den Audio-Player
  @ViewChild('audio') audio;

  // Erstellt ein neues Objekt vom Typ AudioPlayerComponent
  constructor(private messageService: MessageService<Mix>) {
    this.playContinuously = true;
    this.playRandomly = false;
  }

  // Spielt den aktuellen Mix ab
  start(fromBeginning: boolean): void {
    if (fromBeginning) {
      this.audio.nativeElement.src = this.mix.streamUrl;
    }

    this.audio.nativeElement.play();
  }

  // Wird beim Pausieren des Mixes ausgeführt
  onPause(): void {
    console.info('audio-player->pause');
  }

  // Wird beim Abspielen des Mixes ausgeführt
  onPlay(): void {
    console.info('audio-player->play');
  }

  // Wird beim Beenden des Mixes ausgeführt
  onEnd(): void {
    console.info('audio-player->end');
    if (this.playContinuously) {
      this.playNext();
    }
  }

  // Sorgt für das Abspielen des nächsten Mixes
  private playNext() {
    console.info('audio-player->playNext');
  }

  // Wird beim Initialisieren der Komponente aufgerufen
  ngOnInit() {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(message => {
        if (!this.mix || this.mix.id != message.data.id) {
          this.mix = message.data;
          this.start(true);
        } else if (this.audio.nativeElement.paused) {
          this.start(false);
        }
      });
  }

  // Wird beim Zerstören der Komponente aufgerufen
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
