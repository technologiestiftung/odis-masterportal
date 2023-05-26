const Config = {
    wfsImgPath: "../resources/img/",
    metadata: {
        useProxy: [
            "https://metaver.de/csw"
        ]
    },
    namedProjections: [[
        "EPSG:25833", "+title=ETRS89/UTM 33N +proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    ]],
    footer: {
        urls: [{
            "bezeichnung": "Kartographie und Gestaltung: ",
            "url": "https://www.berlin.de/ba-reinickendorf/",
            "alias": "Bezirksamt Reinickendorf von Berlin, Abteilung Stadtentwicklung, Fachbereich Vermessung",
            "alias_mobil": "BA RDF, VermA"
        }],
        showVersion: true
    },
    quickHelp: {
        imgPath: "../resources/img/",
        searchbarAllgemeines1: "allgemein.png",
        searchbarAllgemeines2: "allgemein_2.png",
        searchbarAllgemeines3: "allgemein_3.png",
        searchbarFlurstueckssuche: "allgemein_4.png"
    },
    layerConf: "../resources/services-internet.json",
    restConf: "../resources/rest-services-internet.json",
    styleConf: "../resources/style_v3.json",
    scaleLine: true,
    mouseHover: {
        numFeaturesToShow: 2,
        infoText: "(Weitere Objekte. Bitte zoomen.)"
    },
    useVectorStyleBeta: true
};

// conditional export to make config readable by e2e tests
if (typeof module !== "undefined") {
    module.exports = Config;
}