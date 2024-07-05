
# Ejemplos de peticiones a la API

## `rb_flow`

??? example "Obtener los flujos generados en cada sensor"

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

??? example "Mostrar los bytes descargados en cada campus"

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

??? example "Muestra los bytes descargados de YouTube en cada campus"

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

??? example "Muestra los bytes descargados de YouTube o Instagram en cada campus"

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

??? example "Muestra los puntos de acceso (AP) utilizados por minuto (punto de acceso activo) accediendo a YouTube o Instagram"

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

??? example "Muestra la URL principal visitada por el cliente (MAC: "94:39:e5:74:3e:36")"

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

??? example "Número de eventos para todos los sensores con un tamaño de *bucket* de 1 minuto"

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

??? example "Agrupar por *msg* (firma del evento) mostrando el conteo de eventos por *msg*. Se mostrarán las primeras 25 firmas con más eventos"

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

??? example "Agrupar por IP de origen mostrando el conteo de eventos por IP de origen. Se mostrarán todas"

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

??? example "Muestra todos los destinos que utilizan *Dropbox*"

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

??? example "Muestra todas las fuentes que utilizan *Dropbox* con uno de los siguientes destinos: 108.160.163.41 o 108.160.162.104"

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

??? example "Muestra las diferentes firmas (msg) que varían en un intervalo específico"

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
