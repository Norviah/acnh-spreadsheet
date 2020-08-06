export interface Event {
    sourceSheet:              EventSourceSheet;
    event:                    string;
    northernHemisphereDates?: string;
    southernHemisphereDates?: string;
    times?:                   Times;
    versionAdded:             Version;
    translations:             Translations | null;
    availability?:            string;
    nookShoppingItems?:       string;
    region?:                  string;
    description?:             string[];
}

export enum EventSourceSheet {
    Events = "Events",
    NookShoppingSeasonal = "Nook Shopping Seasonal",
}

export enum Times {
    AllDay = "All day",
    The11Pm2Am = "11 PM – 2 AM",
    The7PMMidnight = "7 PM – Midnight",
    The9Am6Pm = "9 AM – 6 PM",
}

export interface Translations {
    sourceSheet:        TranslationsSourceSheet;
    id:                 number | string;
    version:            Version;
    english:            string;
    englishEurope:      string;
    german:             string;
    spanish:            string;
    spanishUs:          string;
    french:             string;
    frenchUs:           string;
    italian:            string;
    dutch:              string;
    chinese:            string;
    chineseTraditional: string;
    japanese:           string;
    korean:             string;
    russian:            string;
    plural:             boolean;
    internalIds:        string[];
}

export enum TranslationsSourceSheet {
    Events = "Events",
    HHAThemes = "HHA Themes",
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
}
