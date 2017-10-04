// Repräsentiert ein Konfigurationsobjekt mit allen
// Eigenschaften aus der Konfigurationsdatei app.config.json
export class Configuration {

    // Key der App zur Anmeldung an der Soundcloud-API
    mixListEndpoint: string;

    // Endpunkt der RH-API für die Liste aller Mixe
    mixEndpoint: string;

    // App-ID für die API-Kommunikation mit Soundcloud
    soundcloudApiClientId: string;
}