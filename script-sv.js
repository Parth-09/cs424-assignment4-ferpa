var spec6 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": 500,
    "height": 500,
    "title": {"text": "Chicago Wards & 311 Service Requests","anchor": "start"},
    "data": {
      "url": "boundaries-ward.geojson",
      "format": {"property": "features"},
    },
    "transform": [{
          "lookup": "properties.ward",
          "from": {
            "data": {"url": "L1-wardSRs.json"},
            "key": "WARD",
            "fields": ["WARD", "SR_COUNT"]
          }
      }],
      "params": [
        {
        "name": "highlight",
        "select": {"type": "point", "on": "pointerover"}
        },
        {"name": "select", "select": "point"}
        ],
  
  
    "mark": {
      "type": "geoshape",
      "cursor": "pointer"
  },
    "encoding": {
      "color": {
      "field": "SR_COUNT",
      "type": "quantitative",
      "legend": {
        "title": "Service Requests",
      },
      "scale": {
          "scheme": "goldred"
        }
      },
      "fillOpacity": {
        "condition": {"param": "select", "value": 1},
        "value": 0.3
      },
      "tooltip": [{
        "field": "properties.ward",
        "type": "nominal",
        "title": "Ward"
      },
      {
        "field": "SR_COUNT",
        "type": "quantitative",
        "title": "Service Requests"
      }
      ]
    },
    "strokeWidth": {
      "condition": [
        {
          "param": "select",
          "empty": false,
          "value": 2
        },
        {
          "param": "highlight",
          "empty": false,
          "value": 1
        }
      ],
      "value": 0
    },
    "projection": {
      "type": "mercator"
    }
  };
  vegaEmbed("#vis6", spec6);

  var spec10 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": 500,
    "height": 500,
    "title": {"text": "Chicago Zipcodes & 311 Service Requests","anchor": "start"},
    "data": {
      "url": "gdf_m.geojson",
      "format": {
        "type": "json",
        "property": "features"
      }},
    "transform": [{
        "type": "geojson",
        "field": "geometry",
        "filter": "datum.properties.zipcode !== 60666 && datum.properties.zipcode !== 60612"
      }],
  
      "params": [
  {
  "name": "highlight",
  "select": {"type": "point", "on": "pointerover"}
  },
  {"name": "select", "select": "point"}
  ],
  
    "mark": {
        "type": "geoshape",
        "cursor": "pointer"
    },
    "encoding": {
      "color": {
        "field": "properties.COUNT", 
        "type": "quantitative",
        "scale": {
          "scheme": "viridis"
        },
        "title": "Service Requests"
      },
      "fillOpacity": {
        "condition": {"param": "select", "value": 1},
        "value": 0.3
      },
      "tooltip": [
        {
          "field": "properties.zipcode",
          "type": "quantitative",
          "title": "Zip Code"
        },
        {
          "field": "properties.COUNT",
          "type": "quantitative",
          "title": "Count"
        }
      ],
      "strokeWidth": {
        "condition": [
          {
            "param": "select",
            "empty": false,
            "value": 2
          },
          {
            "param": "highlight",
            "empty": false,
            "value": 1
          }
        ],
        "value": 0
      }
    },
    "projection": {
      "type": "mercator"
    },
  };
  vegaEmbed("#vis10", spec10);