![](https://img.shields.io/badge/Build%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiesitftung%20Berlin-blue)

# ODIS Masterportal
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


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Lisa-Stubert"><img src="https://avatars.githubusercontent.com/u/61182572?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Lisa-Stubert</b></sub></a><br /><a href="#data-Lisa-Stubert" title="Data">🔣</a> <a href="https://github.com/technologiestiftung/odis-masterportal/commits?author=Lisa-Stubert" title="Code">💻</a> <a href="https://github.com/technologiestiftung/odis-masterportal/commits?author=Lisa-Stubert" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.sebastianmeier.eu/"><img src="https://avatars.githubusercontent.com/u/302789?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Sebastian Meier</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-masterportal/commits?author=sebastian-meier" title="Code">💻</a></td>
    <td align="center"><a href="https://fabianmoronzirfas.me/"><img src="https://avatars.githubusercontent.com/u/315106?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Fabian Morón Zirfas</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-masterportal/commits?author=ff6347" title="Code">💻</a> <a href="#maintenance-ff6347" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/vogelino"><img src="https://avatars.githubusercontent.com/u/2759340?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Lucas Vogel</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-masterportal/commits?author=vogelino" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Credits

<table>
  <tr>
    <td>
      <a src="https://odis-berlin.de">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-odis-berlin.svg" />
      </a>
    </td>
    <td>
      Together with: <a src="https://citylab-berlin.org/en/start/">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-citylab-berlin.svg" />
      </a>
    </td>
    <td>
      A project by: <a src="https://www.technologiestiftung-berlin.de/en/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-en.svg" />
      </a>
    </td>
    <td>
      Supported by: <a src="https://www.berlin.de/rbmskzl/en/">
        <br />
        <br />
        <img width="80" src="https://logos.citylab-berlin.org/logo-berlin-senweb-en.svg" />
      </a>
    </td>
  </tr>
</table>

