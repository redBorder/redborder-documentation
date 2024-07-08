
# Example queries to the *API*

## `rb_flow`

??? example "Get the flows generated on each sensor"

        {
          "queryType": "topN",
          "dataSource": "rb_flow",
          "granularity": "all",
          "dimension": "sensor_name",
          "threshold": 1000,
          "metric": "flows",
          "aggregations": [
            {
              "type": "longSum",
              "name": "flows",
              "fieldName": "events"
            }
          ],
          "intervals": [
            "2015-04-30T21:22:00/2015-04-30T23:02:00"
          ]
        }

??? example "Show the bytes downloaded in each campus"

        {
          "dataSource": "rb_flow",
          "granularity": "all",
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ],
          "queryType": "groupBy",
          "aggregations": [
            {
              "type": "longSum",
              "name": "bytes",
              "fieldName": "sum_bytes"
            }
          ],
          "dimensions": [
            "campus"
          ],
          "orderBy": {
            "type": "default",
            "limit": 25,
            "columns": [
              {
                "dimension": "bytes",
                "direction": "DESCENDING"
              }
            ]
          }
        }

??? example "Show the bytes downloaded from YouTube in each campus"

        {
          "dataSource": "rb_flow",
          "granularity": "all",
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ],
          "filter": {
            "type": "regex",
            "dimension": "http_host",
            "pattern": "(?i)^.*youtube.com.*$"
          },
          "queryType": "groupBy",
          "aggregations": [
            {
              "type": "longSum",
              "name": "bytes",
              "fieldName": "sum_bytes"
            }
          ],
          "dimensions": [
            "campus"
          ],
          "orderBy": {
            "type": "default",
            "limit": 25,
            "columns": [
              {
                "dimension": "bytes",
                "direction": "DESCENDING"
              }
            ]
          }
        }

??? example "Show the bytes downloaded from YouTube or Instagram in each campus"

        {
          "dataSource": "rb_flow",
          "granularity": "all",
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ],
          "filter": {
            "type": "or",
            "fields": [
              {
                "type": "regex",
                "dimension": "http_host",
                "pattern": "(?i)^.*youtube.com.*$"
              },
              {
                "type": "regex",
                "dimension": "http_host",
                "pattern": "(?i)^.*instagram.*$"
              }
            ]
          },
          "queryType": "groupBy",
          "aggregations": [
            {
              "type": "longSum",
              "name": "bytes",
              "fieldName": "sum_bytes"
            }
          ],
          "dimensions": [
            "campus"
          ],
          "orderBy": {
            "type": "default",
            "limit": 25,
            "columns": [
              {
                "dimension": "bytes",
                "direction": "DESCENDING"
              }
            ]
          }
        }

??? example "Show the access points (AP) used per minute (active access point) accessing YouTube or Instagram"

        {
          "dataSource": "rb_flow",
          "granularity": {
            "type": "period",
            "period": "pt5m",
            "timeZone": "Europe/Berlin",
            "origin": "2013-12-12T12:00:00.000+01:00"
          },
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ],
          "filter": {
            "type": "or",
            "fields": [
              {
                "type": "regex",
                "dimension": "http_host",
                "pattern": "(?i)^.*youtube.com.*$"
              },
              {
                "type": "regex",
                "dimension": "http_host",
                "pattern": "(?i)^.*instagram.*$"
              }
            ]
          },
          "queryType": "timeseries",
          "aggregations": [
            {
              "type": "cardinality",
              "name": "result",
              "fieldNames": [
                "wireless_station"
              ]
            }
          ]
        }

??? example "Show the main URL visited by the client (MAC: "94:39:e5:74:3e:36")"

        {
          "dataSource": "rb_flow",
          "granularity": "all",
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ],
          "filter": {
            "type": "and",
            "fields": [
              {
                "type": "not",
                "field": {
                  "type": "selector",
                  "dimension": "http_host",
                  "value": ""
                }
              },
              {
                "type": "selector",
                "dimension": "client_mac",
                "value": "94:39:e5:74:3e:36"
              }
            ]
          },
          "queryType": "groupBy",
          "aggregations": [
            {
              "type": "longSum",
              "name": "bytes",
              "fieldName": "sum_bytes"
            }
          ],
          "dimensions": [
            "http_host"
          ],
          "orderBy": {
            "type": "default",
            "limit": 25,
            "columns": [
              {
                "dimension": "bytes",
                "direction": "DESCENDING"
              }
            ]
          }
        }

## `rb_event`

??? example "Number of events for all sensors with a *bucket* size of 1 minute."

        {
          "queryType": "topN",
          "dataSource": "rb_flow",
          "granularity": "all",
          "dimension": "sensor_name",
          "threshold": 1000,
          "metric": "flows",
          "aggregations": [
            {
              "type": "longSum",
              "name": "flows",
              "fieldName": "events"
            }
          ],
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ]
        }

??? example "Group by *msg* (event signature) showing the event count per *msg*. Display the top 25 signatures with the most events"

        {
          "dataSource": "rb_event",
          "granularity": "all",
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ],
          "queryType": "groupBy",
          "aggregations": [
            {
              "type": "longSum",
              "name": "events",
              "fieldName": "events"
            }
          ],
          "dimensions": [
            "msg"
          ],
          "orderBy": {
            "type": "default",
            "limit": 25,
            "columns": [
              {
                "dimension": "events",
                "direction": "DESCENDING"
              }
            ]
          }
        }

??? example "Group by source IP showing the event count per source IP"

        {
          "dataSource": "rb_event",
          "granularity": "all",
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ],
          "queryType": "groupBy",
          "aggregations": [
            {
              "type": "longSum",
              "name": "events",
              "fieldName": "events"
            }
          ],
          "dimensions": [
            "src"
          ]
        }

??? example "Show all destinations using *Dropbox*"

        {
          "dataSource": "rb_event",
          "granularity": "all",
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ],
          "filter": {
            "type": "regex",
            "dimension": "msg",
            "pattern": "(?i)^.*dropbox.*$"
          },
          "queryType": "timeseries",
          "orderBy": {
            "type": "default",
            "limit": 100,
            "columns": [
              {
                "dimension": "events",
                "direction": "DESCENDING"
              }
            ]
          },
          "aggregations": [
            {
              "type": "longSum",
              "name": "events",
              "fieldName": "events"
            }
          ]
        }

??? example "Show all sources using *Dropbox* with one of the following destinations: 108.160.163.41 or 108.160.162.104"

        {
          "dataSource": "rb_event",
          "granularity": "all",
          "intervals": [
            "2015-05-04T14:47:00/2015-05-04T14:48:00"
          ],
          "filter": {
            "type": "and",
            "fields": [
              {
                "type": "regex",
                "dimension": "msg",
                "pattern": "(?i)^.*dropbox.*$"
              },
              {
                "type": "or",
                "fields": [
                  {
                    "type": "selector",
                    "dimension": "dst",
                    "value": "108.160.162.104"
                  },
                  {
                    "type": "selector",
                    "dimension": "dst",
                    "value": "108.160.163.41"
                  }
                ]
              }
            ]
          },
          "queryType": "groupBy",
          "aggregations": [
            {
              "type": "longSum",
              "name": "events",
              "fieldName": "events"
            }
          ],
          "dimensions": [
            "src"
          ],
          "orderBy": {
            "type": "default",
            "limit": 25,
            "columns": [
              {
                "dimension": "events",
                "direction": "DESCENDING"
              }
            ]
          }
        }

??? example "Show the different signatures (msg) occurring within a specific interval"

        {
            "dataSource": "rb_event",
            "granularity": {
                "type": "period",
                "period": "pt1m",
                "timeZone": "Europe/Berlin",
                "origin": "2013-12-13T09:00:00.000+01:00"
            },
            "intervals": [
                "2015-05-04T14:47:00/2015-05-04T14:48:00"
            ],
            "queryType": "timeseries",
            "aggregations": [
                {
                    "type": "cardinality",
                    "name": "result",
                    "fieldNames": [
                        "msg"
                    ]
                }
            ]
        }
