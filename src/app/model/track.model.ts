// Repräsentiert ein Track-Objekt für einen
// konkreten "Song" eines Mixes
export interface Track {

    // Nummer im Mix
    number: number;

    // Name des Tracks
    title: string;

    // Name des oder der Produzenten
    artist: string;

    // Label des Tracks
    label: string;
}