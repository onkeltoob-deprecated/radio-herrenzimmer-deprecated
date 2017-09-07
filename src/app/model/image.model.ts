// Repräsentiert ein Bild-Objekt für die 
// Darstellung auf einer Webseite
export class Image {

    // Pfad des Bildes
    path: string;

    // Optionaler Titel zur Nutzung im title-Attribut
    title?: string = '';

    // Alternativtext für die Nutzung im alt-Attribut
    alternateText: string;
}