/* eslint-disable no-unused-vars */

const Config = {
    wfsImgPath: "../spk-reinickendorf/ressources/img/",
    namedProjections: [[
        "EPSG:25833", "+title=ETRS89/UTM 33N +proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
        ]],
    footer: {
        urls: [{
            "bezeichnung": "Kartographie und Gestaltung: ",
            "url": "https://www.berlin.de/ba-reinickendorf/politik-und-verwaltung/aemter/stadtentwicklungsamt/vermessung/",
            "alias": "Bezirksamt Reinickendorf von Berlin, Fachbereich Vermessung",
            "alias_mobil": "BA RDF, Verm"
            }],
        showVersion: true
        },
    quickHelp: {
        imgPath: "./ressources/img/"
        },
    layerConf: "../spk-reinickendorf/ressources/services-internet.json",
    restConf: "../spk-reinickendorf/ressources/rest-services-internet.json",
    styleConf: "../spk-reinickendorf/ressources/style_v3.json",
    scaleLine: true,
    mouseHover: {
        numFeaturesToShow: 2,
        infoText: "(weitere Objekte. Bitte zoomen.)"
        },
    useVectorStyleBeta: true
    };

/* eslint-enable no-unused-vars */
