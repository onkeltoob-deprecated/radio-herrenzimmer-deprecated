// Repräsentiert ein Konfigurationsobjekt mit allen
// Eigenschaften aus der Konfigurationsdatei app.config.json
export class Configuration {

    // Key der App zur Anmeldung an der Soundcloud-API
    MixListEndpoint: string;

    // Endpunkt der RH-API für die Liste aller Mixe
    MixEndpoint: string;
}