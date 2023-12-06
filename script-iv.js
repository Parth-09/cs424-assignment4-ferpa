var v1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "L-01-wardSRs.csv"},
  "title": "Chicago Wards and Amount of Service Requests",
  "width": 500,
  "height": 500,
  "mark": "bar",
  "encoding": {
    "opacity": {
      "condition": [
        {
          "test": "search_input.length > 0 && test(regexp('^' + search_input + '$', 'i'), ''+datum.WARD)",
          "value": 1
        },
        {
          "test": "search_input.length == 0",
          "value": 1
        }
      ],
      "value": 0.1
    },
    "tooltip": {"field": "SR_COUNT", "type": "nominal"},
    "x": {
      "field": "WARD", 
      "type": "quantitative", 
      "title": "Ward",
      "axis": {
          "labelFontSize": 15
      }
  },
    "y": {
      "field": "SR_COUNT", 
      "type": "quantitative", 
      "title": "Service Requests",
      "axis": {
          "labelFontSize": 15
      }
      }
  },
  "params": [
    {
      "name": "search_input",
      "bind": {
        "input": "search",
        "placeholder": "Ward",
        "name": "Search for Ward: "
      },
      "value": ""
    }
  ]
};
vegaEmbed("#iv1", v1);

var v2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "MV-zipSRs.csv"},
  "mark": {"type":"bar","tooltip":true},
  "title": "Chicago Zipcodes and Amount of Service Requests",
  "width": 1000,
  "encoding": {
  "opacity": {
      "condition": [
        {
          "test": "search_input.length > 0 && test(regexp('^' + search_input + '$', 'i'), ''+datum.ZIP_CODE)",
          "value": 1
        },
        {
          "test": "search_input.length == 0",
          "value": 1
        }
      ],
      "value": 0.1
    },
    "x": {
      "field": "ZIP_CODE", 
      "type": "Nominal", 
      "title": "Zip Code",
      "axis": {
          "labelFontSize": 10
      }
  },
    "y": {
      "field": "COUNT", 
      "type": "quantitative", 
      "title": "Service Requests",
      "axis": {
          "labelFontSize": 15
      }
      }
  },
  "params": [
    {
      "name": "search_input",
      "bind": {
        "input": "search",
        "placeholder": "zipcode",
        "name": "Search for Zipcode: "
      },
      "value": ""
    }
  ]
};
vegaEmbed("#iv2", v2);


