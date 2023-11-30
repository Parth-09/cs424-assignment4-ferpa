const spec1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
  width: 300,
  height: 300,
  title: "Top 5 Duplicated Service Request Types (by Number of SRs)",
  data: {
    url: "s1.json",
  },
  layer: [
    {
      mark: { type: "arc", innerRadius: 20, stroke: "#fff", tooltip: true },
    },
    {
      mark: { type: "text", radiusOffset: 17},
      encoding: {
        text: { field: "Count", type: "quantitative"},
      },
    },
  ],
  encoding: {
    theta: { field: "Count", type: "quantitative", stack: true },
    radius: {
      field: "Count",
      scale: { type: "sqrt", zero: true, rangeMin: 10 },
    },
    color: { field: "Type", type: "nominal", legend: true },
  },
};
vegaEmbed("#vis1", spec1);

const spec2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
  width: 300,
  height: 300,
  title: "Completed Service Requests per Top 5 Community Area",
  data: {
    url: "s2-ca.json",
  },
  layer: [
    {
      mark: { type: "arc", outerRadius: 90, tooltip: true },
      encoding: {
        theta: { field: "Count", type: "quantitative" },
        color: { field: "Community Area", type: "nominal" },
      },
    },
    {
      mark: { type: "text", radiusOffset: 30 },
      encoding: {
        text: { field: "Community Area", type: "nominal" },
        theta: { field: "Count", type: "quantitative", stack: true },
        radius: {
          field: "Count",
          scale: { type: "sqrt", zero: true, rangeMin: 10 },
        },
      },
    },
  ],
};
vegaEmbed("#vis2", spec2);

const spec3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 300,
  "height": 300,
  "title": {"text": "Amount of Service Requests Received (Time of Day)", "anchor": "start"},
  "data": {
    "url": "s3-meanAMPM.json",
  },
  "mark": {"type": "bar", "point": true, "tooltip": true},
  "encoding": {
    "x": {"field": "Time", "type": "ordinal"}, // Assuming 'Time' is an ordinal data type
    "y": {"field": "Count", "type": "quantitative"}
  }
};
vegaEmbed("#vis3", spec3);

const spec4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 300,
  "height": 300,
  "title": {"text": "Amount of Service Requests Recieved (by Hour)", "anchor": "start"},
  "data": {
    "url": "s3-meanhour.json",
  },
  "mark": {"type": "line", "point": true, "tooltip": true},
  "encoding": {
    "x": {"timeUnit": "hours", "field": "Time", "type": "temporal",
    "axis": {
      "labelAngle": -45,
      "format": "%H:%M",
      "labelLimit": 100 
    },
  },
    "y": {"field": "Count", "type": "quantitative"}
  }
};
vegaEmbed("#vis4", spec4);


const spec5 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 300,
  "height": 300,
  "title": {"text": "Amount of Service Requests Recieved (by Month)", "anchor": "start"},
  "data": {
    "url": "s3-meanMonth.json",
  },
  "mark": {"type": "line", "point": true, "tooltip": true},
  "encoding": {
    "x": {"timeUnit": "month", "field": "Time", "type": "temporal",
    "axis": {
      "labelAngle": -45,
      "format": "%b",
      "labelLimit": 100 
    },
  },
    "y": {"field": "Count", "type": "quantitative"}
  }
};
vegaEmbed("#vis5", spec5);

const spec6 = {
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
  "mark": "geoshape",
  "encoding": {
    "color": {
    "field": "SR_COUNT",
    "type": "quantitative",
    "legend": {
        "title": null,
      },
    "scale": {
        "scheme": "goldred"
      }
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
};
vegaEmbed("#vis6", spec6);

const spec7 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {
    "url": "L2-Line.json"
  },
  "width": 400,
  "height": 400,
  "mark": "line",
  "encoding": {
    "x": {"field": "OWNER_DEPARTMENT", "type": "nominal", "title": "Departments"},
    "y": {"field": "COUNT", "type": "quantitative", "title": "Number of Requests"},
    "color": {"field": "STATUS", "type": "nominal", "legend": {"title": "Status"}},
    "column": {"field": "STATUS", "type": "nominal", "spacing": 10},
    "tooltip": [
        {"field": "OWNER_DEPARTMENT", "type": "nominal", "title": "Department"},
        {"field": "COUNT", "type": "quantitative", "title": "Requests"},
        {"field": "STATUS", "type": "nominal", "title": "Status"}
    ]
  }
};
vegaEmbed("#vis7", spec7);

const spec8 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 400,
  "height": 400,
  "title": {"text": "Popular Forms of Service Request Origin by Chicago Area", "anchor": "start"},
  "data": {
    "url": "L3-Stacked.json"
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "Area"},
    "y": {"field": "Count", "type": "quantitative"},
    "xOffset": {"field": "Origin"},
    "color": {"field": "Origin"}
  }
};
vegaEmbed("#vis8", spec8);

const spec9 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 400,
  "height": 400,
  "title": {"text": "Average Number of Days taken per Service Request", "anchor": "start"},
  "data": {
      "url": "L4-Scatter.json"
  },
  "mark": "point",
  "encoding": {
      "x": {
          "field": "SR_TYPE",
          "type": "nominal",
          "title": "Service Request Type"
      },
      "y": {
          "field": "DURATION_DAYS",
          "type": "quantitative",
          "title": "Average Number Of Days"
      },
      "tooltip": [
          {"field": "SR_TYPE", "type": "nominal"},
          {"field": "DURATION_DAYS", "type": "quantitative"}
      ]
  }
};
vegaEmbed("#vis9", spec9);

const spec10 = {
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
  "mark": "geoshape",
  "encoding": {
    "color": {
      "field": "properties.COUNT", 
      "type": "quantitative",
      "scale": {
        "scheme": "viridis"
      },
      "title": "Count"
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
    ]
  },
  "projection": {
    "type": "mercator"
  },
};
vegaEmbed("#vis10", spec10);

const test = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 300,
  "height": 300,
  "title": {"text": "Amount of Service Requests Received (Time of Day)", "anchor": "start"},
  "data": {
    "url": "s3-meanAMPM.json",
  },

  "params": [
    {
      "name": "highlight",
      "select": {"type": "point", "on": "pointerover"}
    },
    {"name": "select", "select": "point"}
  ],

  "mark": {
    "type": "bar", 
    "point": true, 
    "tooltip": true,
    "stroke": "black",
    "cursor": "pointer"
  },
  "encoding": {
    "x": {"field": "Time", "type": "ordinal"}, // Assuming 'Time' is an ordinal data type
    "y": {"field": "Count", "type": "quantitative"},
    "fillOpacity": {
      "condition": {"param": "select", "value": 1},
      "value": 0.3
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
    }
  },
  "config": {
    "scale": {
      "bandPaddingInner": 0.2
    }
  }
};
vegaEmbed("#visT", test);