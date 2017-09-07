import { Genre } from './genre.model';

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

    // Liste der verwendeten Tracks im JSON-Format
    tracklistJson: string;

    // Identifier des Tracks zur Verwendung in URLs
    urlTitle: string;

    // Zeitpunkt des Uploads beim Hoster (zum Beispiel Soundcloud)
    uploaded: number;
}