/* eslint-disable no-unused-vars */

const Config = {
    wfsImgPath: "./ressources/img/",
    namedProjections: [
        ["EPSG:25832", "+title=ETRS89/UTM 32N +proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
        ["EPSG:25833", "+title=ETRS89/UTM 33N +proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"]
    ],
    footer: {
        urls: [
            {
                "bezeichnung": "Charlottenburg-Wilmersdorf",
                "url": "https://www.berlin.de/ba-charlottenburg-wilmersdorf/",
                "alias": "Daten des Bezirksamts Charlottenburg Wilmersdorf",
                "alias_mobil": "Geodaten CW"
            }
        ],
        showVersion: true
    },
    quickHelp: {
        imgPath: "./ressources/img/"
    },
    layerConf: "./ressources/services-internet.json",
    restConf: "./ressources/rest-services-internet.json",
    styleConf: "./ressources/style_v3.json",
    scaleLine: true,
    mouseHover: {
        numFeaturesToShow: 2,
        infoText: "(weitere Objekte. Bitte zoomen.)"
    },
    useVectorStyleBeta: true
};

/* eslint-enable no-unused-vars */
