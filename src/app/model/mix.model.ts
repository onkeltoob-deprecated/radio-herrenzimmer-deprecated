import { Genre } from './genre.model';
import { Track } from './track.model';

// Repräsentiert ein Mix-Objekt
export class Mix {
    // ID des Mixes in der Datenbank
    id: number;

    // Name des Mixes
    title: string;

    // Genre des Mixes
    genre: Genre;

    // Dauer des Mixes in Sekunden
    durationSeconds: number;

    // Einleitungstext im HTML-Format
    descriptionHtml: string;

    // ID des Tracks beim Hoster (zum Beispiel Soundcloud)
    trackId: string;

    // URL des Tracks beim Hoster (zum Beispiel Soundcloud)
    trackUrl: string;

    // Liste der verwendeten Tracks
    tracks: Track[];

    // Identifier des Tracks zur Verwendung in URLs
    urlTitle: string;

    // Zeitpunkt des Uploads beim Hoster (zum Beispiel Soundcloud)
    uploaded: Date;

    // Anzahl der Downloads
    downloads: number;

    // Anzahl der Reposts
    reposts: number;

    // Anzahl der Likes
    favorites: number;

    // Anzahl der Kommentare
    comments: number;

    // Anzahl der Abspielvorgänge
    playbacks: number;
}