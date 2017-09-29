// Repräsentiert ein Track-Objekt für einen
// konkreten "Song" eines Mixes
export class Track {
    // Nummer im Mix
    number: number;

    // Name des Tracks
    title: string;

    // Name des oder der Produzenten
    artist: string;

    // Label des Tracks
    label: string;

    // Erstellt ein neues Objekt vom Typ Track
    constructor(number: number, title: string, artist: string, label: string) {
        this.number = number;
        this.title = title;
        this.artist = artist;
        this.label = label;
    }
}