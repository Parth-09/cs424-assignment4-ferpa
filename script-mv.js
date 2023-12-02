function js(dropdown) {
    var option_value = dropdown.options[dropdown.selectedIndex].value;   
    if (option_value == "n") {
        document.getElementById("p1").innerHTML = "";
        var n = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "width": 400,
            "height": 400,
            "title": {"text": "Chicago: All Community Areas","anchor": "start"},
            "data": {
              "url": "./gdfMV/boundaries-community_area.geojson",
              "format": {
                "type": "topojson",
                "feature": "features",
              }
            },
            "mark": {
              "type": "geoshape", 
            },
            "encoding": {
              "strokeWidth": {"value": 1},
              "stroke": {"value": "black"},
              "fill": {"value": "white"}
            },
            "projection": {
                "type": "mercator"
            },
          };
          vegaEmbed("#v", n);
          var nA = {};
          vegaEmbed("#v2", nA);

    } else if (option_value == "c") {
        document.getElementById("p1").innerHTML = "Central includes Community Areas 8, 32 and 33."; 
        var v1 = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Central: Community Areas Map",
                    "data": {
                        "url": "./gdfMV/gdf_ctl.geojson",
                        "format": {
                        "type": "topojson",
                        "feature": "features",
                        }
                    },
                    "mark": {
                        "type": "geoshape", 
                    },
                    "encoding": {
                        "strokeWidth": {"value": 1},
                        "stroke": {"value": "black"},
                        "fill": {"value": "white"},
                        "tooltip": {
                            "field": "properties.community",
                            "type": "nominal",
                            "title": "Community Area"
                        },
                    },
                    "projection": {
                        "type": "mercator"
                    },
        };
        vegaEmbed("#v", v1);

        var v1A = {
                "data": {
                    "url": "./dfMV/c.json"
                },
                "repeat": ["Phone Calls", "Internet", "Mobile Device"],
                "title": "Total Amount of Requests Origin Types per Community Area",
                "spec": {
                    "mark": {"type": "bar", "tooltip": true},
                    "encoding": {
                        "x": {"field": "COMMUNITY_AREA"},
                        "y": { 
                            "field": {"repeat":"repeat"},
                            "type": "quantitative"
                        },
                        "color": {
                            "field":"COMMUNITY_AREA",
                        },
                    }
            }
        }
        vegaEmbed("#v2", v1A);
    } else if (option_value == "fns") {
        document.getElementById("p1").innerHTML = "Far North Side includes Community Areas 1, 2, 3, 4, 9, 10, 11, 12, 13, 14 and 77."; 
        var v2 = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Far Northside: Community Areas Map",
            "hconcat": [
                {
                    "data": {
                        "url": "./gdfMV/gdf_fns.geojson",
                        "format": {
                        "type": "topojson",
                        "feature": "features",
                        }
                    },
                    "mark": {
                        "type": "geoshape", 
                    },
                    "encoding": {
                        "strokeWidth": {"value": 1},
                        "stroke": {"value": "black"},
                        "fill": {"value": "white"}
                    },
                    "projection": {
                        "type": "mercator"
                },
            }
            ]
        };
        vegaEmbed("#v", v2);

        var v2A = {
            "data": {
                "url": "./dfMV/fns.json"
            },
            "repeat": ["Phone Calls", "Internet", "Mobile Device"],
            "title": "Total Amount of Requests Origin Types per Area",
            "spec": {
                "mark": {"type": "bar", "tooltip": true},
                "encoding": {
                    "x": {"field": "COMMUNITY_AREA"},
                    "y": { 
                        "field": {"repeat":"repeat"},
                        "type": "quantitative"
                    },
                    "color": {
                        "field":"COMMUNITY_AREA",
                    },
                }
        }
    }
        vegaEmbed("#v2", v2A);
    } else if (option_value == "fss") {
        document.getElementById("p1").innerHTML = "Far South Side includes Community Areas 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54 and 55."; 
        var v3 = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Far South Side: Community Areas Map",
            "hconcat": [
                {
                    "data": {
                        "url": "./gdfMV/gdf_fss.geojson",
                        "format": {
                        "type": "topojson",
                        "feature": "features",
                        }
                    },
                    "mark": {
                        "type": "geoshape", 
                    },
                    "encoding": {
                        "strokeWidth": {"value": 1},
                        "stroke": {"value": "black"},
                        "fill": {"value": "white"}
                    },
                    "projection": {
                        "type": "mercator"
                },
            }
            ]
        };
        vegaEmbed("#v", v3);

        var v3A = {
            "data": {
                "url": "./dfMV/fss.json"
            },
            "repeat": ["Phone Calls", "Internet", "Mobile Device"],
            "title": "Total Amount of Requests Origin Types per Area",
            "spec": {
                "mark": {"type": "bar", "tooltip": true},
                "encoding": {
                    "x": {"field": "COMMUNITY_AREA"},
                    "y": { 
                        "field": {"repeat":"repeat"},
                        "type": "quantitative"
                    },
                    "color": {
                        "field":"COMMUNITY_AREA",
                    },
                }
        }
    }
        vegaEmbed("#v2", v3A);
    } else if (option_value == "fsw") {
        document.getElementById("p1").innerHTML = "Far Southwest Side includes Community Areas 70, 71, 72, 73, 74 and 75.";
        var v4 = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Far South Side: Community Areas Map",
            "hconcat": [
                {
                    "data": {
                        "url": "./gdfMV/gdf_fsw.geojson",
                        "format": {
                        "type": "topojson",
                        "feature": "features",
                        }
                    },
                    "mark": {
                        "type": "geoshape", 
                    },
                    "encoding": {
                        "strokeWidth": {"value": 1},
                        "stroke": {"value": "black"},
                        "fill": {"value": "white"}
                    },
                    "projection": {
                        "type": "mercator"
                },
            }
            ]
        };
        vegaEmbed("#v", v4);

        var v4A = {
            "data": {
                "url": "./dfMV/fsw.json"
            },
            "repeat": ["Phone Calls", "Internet", "Mobile Device"],
            "title": "Total Amount of Requests Origin Types per Community Area",
            "spec": {
                "mark": {"type": "bar", "tooltip": true},
                "encoding": {
                    "x": {"field": "COMMUNITY_AREA"},
                    "y": { 
                        "field": {"repeat":"repeat"},
                        "type": "quantitative"
                    },
                    "color": {
                        "field":"COMMUNITY_AREA",
                    },
                }
            }
        }
        vegaEmbed("#v2", v4A);

    } else if (option_value == "ns") {
        document.getElementById("p1").innerHTML = "North Side includes Community Areas 5, 6, 7, 21 and 22.";
        var v5 = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "North Side: Community Areas Map",
            "hconcat": [
                {
                    "data": {
                        "url": "./gdfMV/gdf_ns.geojson",
                        "format": {
                        "type": "topojson",
                        "feature": "features",
                        }
                    },
                    "mark": {
                        "type": "geoshape", 
                    },
                    "encoding": {
                        "strokeWidth": {"value": 1},
                        "stroke": {"value": "black"},
                        "fill": {"value": "white"},
                    },
                    "projection": {
                        "type": "mercator"
                },
            }
            ]
        };
        vegaEmbed("#v", v5);

        var v5A = {
            "data": {
                "url": "./dfMV/ns.json"
            },
            "repeat": ["Phone Calls", "Internet", "Mobile Device"],
            "title": "Total Amount of Requests Origin Types per Area",
            "spec": {
                "mark": {"type": "bar", "tooltip": true},
                "encoding": {
                    "x": {"field": "COMMUNITY_AREA"},
                    "y": { 
                        "field": {"repeat":"repeat"},
                        "type": "quantitative"
                    },
                    "color": {
                        "field":"COMMUNITY_AREA",
                    },
                }
            }
        }
        vegaEmbed("#v2", v5A);
    } else if (option_value == "nws") {
        document.getElementById("p1").innerHTML = "Northwest Side includes Community Areas 15, 16, 17, 18, 19 and 20.";
        var v6 = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Northwest Side: Community Areas Map",
            "hconcat": [
                {
                    "data": {
                        "url": "./gdfMV/gdf_nws.geojson",
                        "format": {
                        "type": "topojson",
                        "feature": "features",
                        }
                    },
                    "mark": {
                        "type": "geoshape", 
                    },
                    "encoding": {
                        "strokeWidth": {"value": 1},
                        "stroke": {"value": "black"},
                        "fill": {"value": "white"}
                    },
                    "projection": {
                        "type": "mercator"
                },
            }
            ]
        };
        vegaEmbed("#v", v6);

        var v6A = {
            "data": {
                "url": "./dfMV/nws.json"
            },
            "repeat": ["Phone Calls", "Internet", "Mobile Device"],
            "title": "Total Amount of Requests Origin Types per Community Area",
            "spec": {
                "mark": {"type": "bar", "tooltip": true},
                "encoding": {
                    "x": {"field": "COMMUNITY_AREA"},
                    "y": { 
                        "field": {"repeat":"repeat"},
                        "type": "quantitative"
                    },
                    "color": {
                        "field":"COMMUNITY_AREA",
                    },
                }
            }
        }
        vegaEmbed("#v2", v6A);
    } else if (option_value == "ss") {
        document.getElementById("p1").innerHTML = "South Side includes Community Areas 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 60 and 69.";
        var v7 = {
        
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "title": "South Side: Community Areas Map",
        "hconcat": [
            {
                "data": {
                    "url": "./gdfMV/gdf_ss.geojson",
                    "format": {
                    "type": "topojson",
                    "feature": "features",
                    }
                },
                "mark": {
                    "type": "geoshape", 
                },
                "encoding": {
                    "strokeWidth": {"value": 1},
                    "stroke": {"value": "black"},
                    "fill": {"value": "white"}
                },
                "projection": {
                    "type": "mercator"
            },
        }
        ]
    };
        vegaEmbed("#v", v7);

        var v7A = {
            "data": {
                "url": "./dfMV/ss.json"
            },
            "repeat": ["Phone Calls", "Internet", "Mobile Device"],
            "title": "Total Amount of Requests Origin Types per Community Area",
            "spec": {
                "mark": {"type": "bar", "tooltip": true},
                "encoding": {
                    "x": {"field": "COMMUNITY_AREA"},
                    "y": { 
                        "field": {"repeat":"repeat"},
                        "type": "quantitative"
                    },
                    "color": {
                        "field":"COMMUNITY_AREA",
                    },
                }
            }
        }
        vegaEmbed("#v2", v7A);
    } else if (option_value == "sws") {
        document.getElementById("p1").innerHTML = "Southwest Side includes Community Areas 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67 and 68."
        var v8 = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Southwest Side: Community Areas Map",
            "hconcat": [
                {
                    "data": {
                        "url": "./gdfMV/gdf_ssw.geojson",
                        "format": {
                        "type": "topojson",
                        "feature": "features",
                        }
                    },
                    "mark": {
                        "type": "geoshape", 
                    },
                    "encoding": {
                        "strokeWidth": {"value": 1},
                        "stroke": {"value": "black"},
                        "fill": {"value": "white"}
                    },
                    "projection": {
                        "type": "mercator"
                },
            }
            ]
        };
        vegaEmbed("#v", v8);

        var v8A = {
            "data": {
                "url": "./dfMV/sws.json"
            },
            "repeat": ["Phone Calls", "Internet", "Mobile Device"],
            "title": "Total Amount of Requests Origin Types per Community Area",
            "spec": {
                "mark": {"type": "bar", "tooltip": true},
                "encoding": {
                    "x": {"field": "COMMUNITY_AREA"},
                    "y": { 
                        "field": {"repeat":"repeat"},
                        "type": "quantitative"
                    },
                    "color": {
                        "field":"COMMUNITY_AREA",
                    },
                }
            }
        }
        vegaEmbed("#v2", v8A);
    } else if (option_value == "ws") {
        document.getElementById("p1").innerHTML = "West Side includes Community Areas 23, 24, 25, 26, 27, 29, 30 and 31."
        var v9 = {"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "West Side: Community Areas Map",
            "hconcat": [
                {
                    "data": {
                        "url": "./gdfMV/gdf_ws.geojson",
                        "format": {
                        "type": "topojson",
                        "feature": "features",
                        }
                    },
                    "mark": {
                        "type": "geoshape", 
                    },
                    "encoding": {
                        "strokeWidth": {"value": 1},
                        "stroke": {"value": "black"},
                        "fill": {"value": "white"}
                    },
                    "projection": {
                        "type": "mercator"
                },
            }
            ]
        };
        vegaEmbed("#v", v9);

        var v9A = {
            "data": {
                "url": "./dfMV/ws.json"
            },
            "repeat": ["Phone Calls", "Internet", "Mobile Device"],
            "title": "Total Amount of Requests Origin Types per Community Area",
            "spec": {
                "mark": {"type": "bar", "tooltip": true},
                "encoding": {
                    "x": {"field": "COMMUNITY_AREA"},
                    "y": { 
                        "field": {"repeat":"repeat"},
                        "type": "quantitative"
                    },
                    "color": {
                        "field":"COMMUNITY_AREA",
                    },
                }
            }
        }
        vegaEmbed("#v2", v9A);
    }
}