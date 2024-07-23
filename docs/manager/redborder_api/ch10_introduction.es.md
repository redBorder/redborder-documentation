
# Introducción a la *API* de RedBorder

La *API* completa utiliza un estilo *HTTP REST* a través de una interfaz web *HTTPS*. La consulta debe expresarse en formato *JSON* para especificar qué valores se están solicitando. Por ejemplo:

!!! example "Petición a la *API*"

        {
          "dataSource": "rb_flow",
          "granularity": "all",
          "namespace_uuids": ["2584761509592299795"],
          "intervals":["2013-11-21T19:07/2013-11-21T19:30"],
          "queryType": "groupBy",
          "aggregations": [
            {"type": "longSum", "name": "events", "fieldName": "events"}
          ],
          "dimensions": [ "http_host", "src", "http_user_agent" ],
          "filter": {
            "type": "and",
            "fields": [
              { "type": "selector", "dimension": "client_mac", "value": "8c:58:77:0b:56:fc" },
              { "type": "regex", "dimension": "src", "pattern": "^10\\.13\\." }
            ]
          }
        }

La petición anterior devolverá algo similar a esto (el resultado ha sido truncado):

!!! example "Respuesta de la *API*"

        [
          {
            "version":"v1",
            "timestamp":"2013-11-21T19:07:00.000Z",
            "event":{
              "count":198,
              "http_user_agent":null,
              "http_host":null,
              "src":"10.13.209.147"
            }
          },
          {
            "version":"v1",
            "timestamp":"2013-11-21T19:07:00.000Z",
            "event":{
              "count":1,
              "http_user_agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B511 [FBAN/FBIOS;FBAV/6.7;FBBV/566055;FBDV/iPhone3,3;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.0.3;FBSS/2; FBCR/Verizon;FBID/phone;FBLC/en_US;FBOP/5]",
              "http_host":"ajax.googleapis.com",
              "src":"10.13.209.147"
            }
          },
          {
            "version":"v1",
            "timestamp":"2013-11-21T19:07:00.000Z",
            "event": {
              "count":1,
              "http_user_agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B511 [FBAN/FBIOS;FBAV/6.7;FBBV/566055;FBDV/iPhone3,3;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.0.3;FBSS/2; FBCR/Verizon;FBID/phone;FBLC/en_US;FBOP/5]",
              "http_host":"busymockingbird.files.wordpress.com",
              "src":"10.13.209.147"
            }
          },
          {
            "version":"v1",
            "timestamp":"2013-11-21T19:07:00.000Z",
            "event":{
              "count":1,
              "http_user_agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B511 [FBAN/FBIOS;FBAV/6.7;FBBV/566055;FBDV/iPhone3,3;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.0.3;FBSS/2; FBCR/Verizon;FBID/phone;FBLC/en_US;FBOP/5]",
              "http_host":"connect.facebook.net",
              "src":"10.13.209.147"
            }
          }
        ]

## Autenticación

La *Rest API* utiliza una **Llave de Acceso** generada con la **Interfaz Gráfica Web**. Para obtener dicha llave, es necesario que haga click sobre su nombre de usuario, en el **Área de configuración**, ubicada en la parte derecha de la **Barra de menú**. Aquí dentro, veremos el espacio que indica la llave de acceso.

![Configuración de usuario: llave de acceso *API*](images/ch10_img001.png)

Configuración de usuario: llave de acceso *API*

Esta opción se debe incluir dentro de la URL de la petición a la *API*.

    https://<hostname>/api/data?auth_token=<API_key>

Cada petición a la *API* deberá contener esta llave de acceso, y la petición tendrá los permisos que tiene el usuario que es dueño de la llave de acceso.

El resto de los parámetros debe proporcionarse en los datos de carga útil del *POST*. El formato de la carga útil debe ser *JSON* como vimos en el ejemplo anterior. Por ejemplo, si guardamos la última consulta en un archivo llamado `data.body`, podemos hacer una petición simple como esta:

    curl --insecure -X POST 'https://<hostname>/api/data?auth_token=<API_key>' -H 'content-type: application/json' -d @data.body

## Parámetros *JSON*

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| dataSource         | Base de datos a la que se accede.      |
| namespace_uuids    | Arreglo de uno o más valores. Debe contener el *UUIDs* del *Namespace* donde los datos serán buscados. Si este valor no es indicado, el *dataSource* usado será el por defecto.  |
| granularity        | Especifica el tamaño del *bucket* para los valores.       |
| intervals          | Especifica el(los) rango(s) de tiempo de la petición. El intervalo debe especificarse en formato ISO y puede incluir la zona horaria si se desea.       |
| queryType          | Especifica qué tipo de operador de petición utilizar.       |
| aggregations       | Arreglo de uno o más valores. Estos campos se aplican a las columnas especificadas por *fieldName* y la salida de las agregaciones se nombrará de acuerdo con el valor en el campo *name*.       |
| metric             | (Solo para peticiones con *queryType* de *topN*) Debe ser el mismo valor que el especificado en *aggregations*. Es usado para ordenación.       |
| dimensions         | (Solo para peticiones con *queryType* de *groupBy* o *timeseries*) Arreglo de cero o más valores. Estos se utilizan para restringir la agrupación. Si están vacíos, se solicita un valor por *bucket* de granularidad de tiempo en el *groupBy*.       |
| dimension          | (Solo para peticiones con *queryType* de *topN*) Valor único. Todas las dimensiones disponibles las encontrará más adelante en esta página.     |
| filter             | Especifica el filtro para la petición. Puede ver los filtros disponibles más adelante, en esta página     |
| threshold          | (Solo para peticiones con *queryType* de *topN*) Valor único. Limita la cantidad de valores devueltos en las peticiones *topN*.      |
| orderBy            | (Solo para peticiones con *queryType* de *groupBy*).      |

Para ver los diferentes valores que los campos pueden tomar, despliegue las pestañas correspondientes:

??? note "`dataSource`"

    - `rb_flow`: base de datos de *Netflow/sFlow* con los datos del tráfico.
    - `rb_state`: estado de salud de las estaciones inalámbricas, obtenido por *NMSP*.
    - `rb_event`: base de datos de *IDS/IPS* con los datos de intrusiones.
    - `rb_monitor`: base de datos para monitorización *SNMP*.

??? note "`granularity`"

    Puede ser un intervalo ya definido como `second`, `minute`, `fifteen_minute`, `thirty_minute`, `hour` o `day`.

    También puede ser una expresión como `{"type": "period", "period":"PT6m"}` que significa "*buckets* de 6 minutos". 
    
    En el ejemplo, se establece en el valor especial `all`, lo que significa agrupar todos los puntos de datos en el mismo *bucket* de tiempo.

??? note "`queryType`"

    - `groupBy`: este es el tipo de petición más flexible, pero también es la que puede llegar a tener peor desempeño.
    - `topN`: similar a una petición del anterior tipo, pero agrupando y sorteando por una sola dimensión. Esta es mucho más rápida que `groupBy`.
    - `timeseries`: esta es usada para generar series temporales, utilizando los agregadores especificados.

??? note "`aggregations`"

    Hay diferentes agregadores dependiendo del `dataSource` utilizado:

    - `rb_flow`

        1. `{type: "longSum", name: "events", fieldName: "events"}` -> conteo de flujos / ocurrencias
        * `{type: "longSum", name: "pkts", fieldName: "sum_pkts"}` -> suma de paquetes
        * `{type: "longSum", name: "bytes", fieldName: "sum_bytes"}` -> suma de *bytes*

    - `rb_event`

        1. `{type: "longSum", name: "events", fieldName: "events"}` -> conteo de eventos IPS/IDS / ocurrencias

    - `rb_monitor`

        1. `{type: "longSum", name: "events", fieldName: "events"}` -> resultado del elemento monitoreado en el intervalo especificado
        * `{type: "min", name: "min", fieldName: "min_value"}` -> valor **mínimo** para el parámetro monitoreado
        * `{type: "max", name: "max", fieldName: "max_value"}` -> valor **máximo** para el parámetro monitoreado

??? note "`orderBy`"

    Este parámetro tiene los siguientes campos:

    `{"type":"default","limit":25,"columns":[{"dimension":"bytes","direction":"DESCENDING"}]}`

### Dimensiones para `rb_flow`

Dentro de `rb_flow` tenemos los datos de *Netflow* y *sFlow*, por lo que encontraremos la información que encontraríamos en el módulo de **Tráfico** a través de la interfaz web.

Para ver un listado de las dimensiones disponibles, despliega la siguiente pestaña:

??? info "Dimensiones"

    |                      |                    |                       |                     |                  |
    |----------------------|--------------------|-----------------------|---------------------|------------------|
    | application_id_name  | service_provider   | dot11_status          | input_vrf           | tos              |
    | biflow_direction     | organization_uuid  | dst                   | ip_protocol_version | type             |
    | client_id            | organization       | dst_as_name           | dst_vlan            | wireless_id      |
    | client_latlong       | namespace_uuid     | dst_country_code      | l4_proto            | wireless_station |
    | client_mac           | namespace          | dst_map               | output_snmp         |                  |
    | client_mac_vendor    | deployment_uuid    | dst_net_name          | output_vrf          |                  |
    | client_rssi          | deployment         | dst_port              | rat                 |                  |
    | client_rssi_num      | market_uuid        | dst_vlan              | scatterplot         |                  |
    | client_snr           | market             | duration              | sensor_uuid         |                  |
    | client_snr_num       | building_uuid      | engine_id_name        | sensor_name         |                  |
    | conversation         | building           | hnbgeolocation        | src                 |                  |
    | coordinates_map      | campus_uuid        | hnblocation           | src_as_name         |                  |
    | darklist_category    | campus             | http_host             | src_country_code    |                  |
    | darklist_direction   | floor_uuid         | http_referer_l1       | src_map             |                  |
    | darklist_protocol    | floor              | http_social_media     | src_net_name        |                  |
    | darklist_score       | zone               | http_social_user      | src_port            |                  |
    | darklist_score_name  | direction          | http_user_agent_os    | src_vlan            |                  |
    | service_provider_uuid| dot11_protocol     | input_snmp            | srv_port            |                  |

### Dimensiones para `rb_event`

Dentro de `rb_event` tenemos los datos de *IDS/IPS*, por lo que encontraremos la información que encontraríamos en el módulo de **Intrusión** a través de la interfaz web.

Para ver un listado de las dimensiones disponibles, despliega la siguiente pestaña:

??? info "Dimensiones"

    |                      |                    |                       |                     |
    |----------------------|--------------------|-----------------------|---------------------|
    | action               | client_latlong     | ethsrc                | src                 |
    | classification       | zone               | ethsrc_vendor         | src_as_name         |
    | service_provider_uuid| conversation       | file_hostname         | src_country_code    |
    | service_provider     | darklist_category  | file_size             | src_map             |
    | organization_uuid    | darklist_direction | file_uri              | src_net_name        |
    | organization         | darklist_protocol  | group_name            | src_port            |
    | namespace_uuid       | darklist_score     | icmptype              | tos                 |
    | namespace            | darklist_score_name| iplen_range           | ttl                 |
    | deployment_uuid      | domain_name        | l4_proto              | vlan                |
    | deployment           | dst                | msg                   | wireless_station    |
    | market_uuid          | dst_as_name        | priority              |                     |
    | market               | dst_country_code   | rev                   |                     |
    | building_uuid        | dst_map            | scatterplot           |                     |
    | building             | dst_net_name       | sensor_uuid           |                     |
    | campus_uuid          | dst_port           | sensor_name           |                     |
    | campus               | ethdst             | sha256                |                     |
    | floor_uuid           | ethdst_vendor      | sig_generator         |                     |
    | floor                | ethlength_range    | sig_id                |                     |

### Dimensiones para `rb_monitor`

Dentro de `rb_monitor` tenemos los datos de monitorización por *SNMP*, por lo que encontraremos la información que encontraríamos en el módulo de **Monitor** a través de la interfaz web.

Para ver un listado de las dimensiones disponibles, despliega la siguiente pestaña:

??? info "Dimensiones"

    |                      |                    |                  |
    |----------------------|--------------------|------------------|
    | service_provider_uuid| market_uuid        | group_name       |
    | service_provider     | market             | instance         |
    | organization_uuid    | building_uuid      | monitor          |
    | organization         | building           | sensor_uuid      |
    | namespace_uuid       | campus_uuid        | unit             |
    | namespace            | campus             | value            |
    | deployment_uuid      | floor_uuid         |                  |
    | deployment           | floor              |                  |

### Dimensiones para `rb_state`

Dentro de `rb_state` tenemos datos sobre el estado de salud de las estaciones inalámbricas, obtenidas por *SNMP*.

Para ver un listado de las dimensiones disponibles, despliega la siguiente pestaña:

??? info "Dimensiones"

    |                      |                    |                     |
    |----------------------|--------------------|---------------------|
    | service_provider_uuid| building_uuid      | wireless_channel    |
    | service_provider     | building           | wireless_mode       |
    | organization_uuid    | campus_uuid        | wireless_op_state   |
    | organization         | campus             | wireless_slot       |
    | namespace_uuid       | floor_uuid         |wireless_station_name|
    | namespace            | floor              | wireless_station    |
    | deployment_uuid      | sensor_uuid        | wireless_tx_power   |
    | deployment           | sensor_name        | status              |
    | market_uuid          | type               |                     |
    | market               |wireless_admin_state|                     |

## Filtros

Un filtro es un objeto *JSON* que indica qué filas de datos deben incluirse en el cálculo de una petición. Es esencialmente el equivalente de la cláusula WHERE en SQL, así que será posible utilizar los filtros de una manera similar a como se haría con dicha cláusula.

### `selector`

El filtro más simple es un filtro `selector`. El filtro coincidirá una dimensión específica con un valor específico. Los filtros selectores pueden usarse como filtros base para expresiones booleanas más complejas de filtros.

!!! example "Sintaxis para filtro `selector`"

        {
            "type": "selector",
            "dimension": "client_mac",
            "value": "8c:58:77:0b:56:fc"
        }

### `regex`

Este filtro es similar al filtro `selector`, pero utiliza expresiones regulares. Coincide la dimensión especificada con el patrón dado. El patrón puede ser cualquier expresión regular estándar de Java.

!!! example "Sintaxis para filtro `regex`"

        {
            "type": "regex",
            "dimension": "http_host",
            "pattern": "youtube\.com"            
        }

### Filtros de expresiones lógicas

Es posible utilizar las expresiones lógicas AND, OR y NOT para combinar filtros o crear filtros más complejos con los tipos anteriores.

!!! example "Sintaxis para filtro `and`"

        {
            "type": "and",
            "fields": [
                {
                    "type": "selector",
                    "dimension": "client_mac",
                    "value": "8c:58:77:0b:56:fc"
                },
                {
                    "type": "regex",
                    "dimension": "src",
                    "pattern": "^10\\.13\\."
                }
            ]
        }

!!! example "Sintaxis para filtro `or`"

        {
            "type": "or",
            "fields": [
                {
                    "type": "selector",
                    "dimension": "client_mac",
                    "value": "8c:58:77:0b:56:fc"
                },
                {
                    "type": "selector",
                    "dimension": "client_mac",
                    "value": "83:53:44:4b:56:fd"
                }
            ]
        }

!!! example "Sintaxis para filtro `not`"

        {
            "type": "not", 
            "field": {
                "type": "selector",
                "dimension": "client_mac",
                "value": "8c:58:77:0b:56:fc"
            }
        }
