# odis-masterportal
Dockerized version of the masterportal.org  for exploration. Original source can be found under https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/dev/
Based on Masterportal Version 2.5.4

## service-prototype

### mastercode
A few bug fixes were completed since the last official version, which are neccessary for the WFS-T module. Therefore, the folder `source/mastercode/2_6_1` holds a build of the masterportal code from the latest development version (as of 10.02.2021). When there is a new stable release, this should replace this custom build. 

In addition to the compilation there was one more bug I had to fix manually (not sure if this is going to be fixed in the next release). In the WFS-T module, the projection is hard-coded into the source. (see: https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/ac189fbbca970b72b1409c9ca244057b8ecc630a/modules/wfsTransaction/model.js?at=dev#model.js-86) 

Note: wfst is being replaces by wfsTransaction.

### ServicesBasic

This setup is based on `Basic` and extended through the new services and its using the new mastercode/2_6_1.

#### Mapfish print

Inside ServicesBasic go to `resources/rest-services-internet.json` and add (or modify the print service):

```json
{
  "id": "mapfish",
  "name": "Print Service Prod",
  "url": "https://tsb-mapfishprint.onrender.com/print/",
  "typ": "Print"
}
```

Next edit the config.json (mapfishServiceId must match the id from the previous json):

```json
{
	"Portalconfig": {
		"menu": {
			"tools": {
				"children": {
					"print": {
            "name": "translate#common:menu.tools.print",
						"glyphicon": "glyphicon-print",
						"mapfishServiceId": "mapfish",
						"printAppId": "master",
						"filename": "Ausdruck",
						"title": "Mein Titel",
						"version": "mapfish_print_3"
					}
        }
      }
    }
  }
}
```

#### WFS-T

Inside ServicesBasic go to `resources/services-internet.json` and add (or modify the wfs-t service):

```json
{
    "id": "wfs_t_id",
    "name": "WFS-T Test",
    "url": "https://tsb-tinyows.onrender.com",
    "typ": "WFS",
    "format":"image/png",
    "featurePrefix":"tows",
    "featureType": "tows:test_points",
    "version": "1.1.0",
    "featureNS": "http://www.mapserver.org/tinyows/",
    "outputFormat": "XML",
    "gfiAttributes": {
      "name":"name"
    },
    "layerAttribution": "nicht vorhanden",
    "legend": true,
    "datasets": []
  }
```

Most importantly:

- **id**: for the next json as identifier
- **featurePrefix**: prefix from wfs-service (if using tinyOWS with default settings: tows)
- **featureType**: name of layer from the wfs-t service (name of table in postgres)
- **gfiAttributes**: if attributes of service should be accessible and editable write down here

Next edit the config.json:


```json
{
	"Portalconfig": {
		"menu": {
			"tools": {
				"children": {
					"wfst": {
						"name": "WFS-T Tool",
						"glyphicon": "glyphicon-globe",
						"layerIds": ["wfs_t_id"],
						"toggleLayer": true,
						"layerSelect": "TestLayer",
						"pointButton": [
								{
										"layerId":"wfs_t_id",
										"caption": "Point test",
										"show": true
								}
						],
						"lineButton": false,
						"edit": "Edit",
						"delete": true
					}
        }
      }
    }
  }
}
```

- **layerIds**: Array of IDs from the services-internet.json file
- **pointButton**: Interface for creating new points

For more details check: https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/dev/doc/config.json.md#markdown-header-portalconfigmenutoolwfst

