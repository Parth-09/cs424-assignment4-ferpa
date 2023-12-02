var spec1 = {
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

var spec2 = {
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

var spec3 = {
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

var spec4 = {
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


var spec5 = {
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

var spec7 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {
    "url": "L2-Line.json"
  },
  "width": 300,
  "height": 300,
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

var spec8 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": { "url": "csvjson.json"},
    "mark": {"type": "bar", "tooltip": true},
    "params": [
        {
        "name": "highlight",
        "select": {"type": "point", "on": "pointerover"}
        },
        {"name": "select", "select": "point"}
    ],
    "encoding": {
      "row": {"field": "Origin"},
      "x": {"field": "Area"},
      "y": {"field": "Count", "type": "quantitative"},
      "color": {
        "field": "Origin",
        "scale": {"range": ["#D62728FF", "#2CA01CFF", "#1F77B4FF"]}
      },
      "fillOpacity": {
        "condition": {"param": "select", "value": 1},
        "value": 0.3
      },
    }
};
vegaEmbed("#vis8", spec8);

var spec9 = {
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