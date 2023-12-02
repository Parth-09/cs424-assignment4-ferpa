var v1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {"url": "multiview02.json"},
    "params": [
    {
        "name": "Origin",
        "select": {"type": "point", "fields": ["Area"]},
        "bind": "legend"
    },
],
    "vconcat": [

    {
        "hconcat": [
            {
                "mark": {"type": "bar", "tooltip":true},
                "title": "Total Amount of Service Requests per Area",
                "encoding": {
                    "x":{"field":"Area"},
                    "y": {
                        "aggregate": "sum", 
                        "field": "Service Request Amount",
                        "type": "quantitative"
                    },
                    "color": {
                        "field":"Area"
                    },
                    "opacity": {
                        "condition": {"param": "Origin", "value": 1},
                        "value": 0.1
                    },
                },
            },

            {
                "repeat": ["Morning (AM) Requests", "Afternoon (PM) Requests"],
                "title": "Total Amount of Requests Origin Types per Area",
                "spec": {
                    "mark": {"type": "bar", "tooltip": true},
                    "encoding": {
                        "x": {"field": "Area"},
                        "y": {
                            "aggregate": "sum", 
                            "field": {"repeat": "repeat"}
                        },
                        "color": {
                            "field":"Area",
                        },
                        "opacity": {
                            "condition": {"param": "Origin", "value": 1},
                            "value": 0.1
                        },
                    }
                },
            },

        ]
    },


    {
        "repeat": ["Phone Calls", "Internet", "Mobile Device"],
        "title": "Total Amount of Requests Origin Types per Area",
        "spec": {
            "mark": {"type": "bar", "tooltip": true},
            "encoding": {
                "x": {"field": "Area"},
                "y": {
                    "aggregate": "sum", 
                    "field": {"repeat": "repeat"}
                },
                "color": {
                    "field":"Area",
                },
                "opacity": {
                    "condition": {"param": "Origin", "value": 1},
                    "value": 0.1
                },
            }
        },
    },
    ],

    "config": {
        "legend": {
            "padding": 5, 
            "cornerRadius": 4, 
            "fillColor": "#fff", 
            "strokeColor": "#ccc",
            "orient": "top"
        }
    }
}
vegaEmbed("#vis", v1);