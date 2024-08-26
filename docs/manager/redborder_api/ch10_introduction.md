
# Introduction to RedBorder's API

The full *API* uses a *HTTP REST* style via *HTTPS* web interface. The query must be expressed in *JSON* format to specify which the desired values. For example:

!!! example "Query to the *API*"

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

The query will return something similar to this (the output has been truncated):

!!! example "*API*'s output"

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

## Authentication

The *Rest API* uses an **Access Key** generated with the **Web Graphical Interface**. To obtain this key, you need to click on your username in the **Configuration Area**, located on the right side of the **Menu Bar**. Here, you will see the space indicating the access key.

![User Settings: *API* Access Key](images/ch10_img001.png)

User Settings: *API* Access Key

This option should be included in the URL of the *API* request.

    https://<hostname>/api/data?auth_token=<API_key>

Each *API* request must contain this access key, and the request will have the permissions associated with the user who owns the access key.

The remaining parameters should be provided in the payload data of the *POST* request. The payload format should be *JSON*, as we saw in the previous example. For instance, if we save the last query in a file named `data.body`, we can make a simple request like this:

```bash
curl --insecure -X POST 'https://<hostname>/api/data?auth_token=<API_key>' \
     -H 'content-type: application/json' \
     -d @<input_json_path>
```
## *JSON* parameters

| Parameter          | Description                            |
| ------------------ | -------------------------------------- |
| dataSource         | Database being accessed.               |
| namespace_uuids    | Array of one or more values. Should contain the *UUIDs* of the *Namespace* where the data will be searched. If not specified, the default *dataSource* will be used. |
| granularity        | Specifies the size of the *bucket* for values. |
| intervals          | Specifies the time range(s) of the request. The interval must be specified in ISO format and may include the timezone if desired. |
| queryType          | Specifies which type of query operator to use. |
| aggregations       | Array of one or more values. These fields apply to the columns specified by *fieldName*, and the output of the aggregations will be named according to the value in the *name* field. |
| metric             | (Only for requests with *queryType* of *topN*) Must be the same value as specified in *aggregations*. Used for sorting. |
| dimensions         | (Only for requests with *queryType* of *groupBy* or *timeseries*) Array of zero or more values. These are used to restrict grouping. If empty, one value per time granularity bucket is requested in *groupBy*. |
| dimension          | (Only for requests with *queryType* of *topN*) Single value. All available dimensions can be found later on this page. |
| filter             | Specifies the filter for the request. Available filters can be found later on this page. |
| threshold          | (Only for requests with *queryType* of *topN*) Single value. Limits the number of values returned in *topN* requests. |
| orderBy            | (Only for requests with *queryType* of *groupBy*). |

To see the different values that the fields can take, expand the corresponding tabs:

??? note "`dataSource`"

    - `rb_flow`: *Netflow/sFlow* database with traffic data.
    - `rb_state`: health status of wireless stations obtained via *NMSP*.
    - `rb_event`: *IDS/IPS* database with intrusion data.
    - `rb_monitor`: *SNMP* monitoring database.

??? note "`granularity`"

    It can be a predefined interval such as `second`, `minute`, `fifteen_minute`, `thirty_minute`, `hour`, or `day`.

    It can also be an expression like `{"type": "period", "period":"PT6m"}` which means "6-minute *buckets*".

    In the example, it is set to the special value `all`, meaning all data points are grouped into the same time *bucket*.

??? note "`queryType`"

    - `groupBy`: this is the most flexible type of query but can also have poorer performance.
    - `topN`: similar to `groupBy` queries but groups and sorts by a single dimension. This is much faster than `groupBy`.
    - `timeseries`: used for generating time series using specified aggregators.

??? note "`aggregations`"

    There are different aggregators depending on the `dataSource` used:

    - `rb_flow`

        1. `{type: "longSum", name: "events", fieldName: "events"}` -> flow count / occurrences
        * `{type: "longSum", name: "pkts", fieldName: "sum_pkts"}` -> sum of packets
        * `{type: "longSum", name: "bytes", fieldName: "sum_bytes"}` -> sum of bytes

    - `rb_event`

        1. `{type: "longSum", name: "events", fieldName: "events"}` -> IDS/IPS event count / occurrences

    - `rb_monitor`

        1. `{type: "longSum", name: "events", fieldName: "events"}` -> result of monitored item within specified interval
        * `{type: "min", name: "min", fieldName: "min_value"}` -> minimum value for monitored parameter
        * `{type: "max", name: "max", fieldName: "max_value"}` -> maximum value for monitored parameter

??? note "`orderBy`"

    This parameter has the following fields:

    `{"type":"default","limit":25,"columns":[{"dimension":"bytes","direction":"DESCENDING"}]}`

### Dimensions for `rb_flow`

Within `rb_flow` we have *Netflow* and *sFlow* data, so we will find the information typically found in the **Traffic** module through the web interface.

To see a list of available dimensions, expand the following tab:

??? info "Dimensions"
    |                        |                           |                           |                         |                           |
    |------------------------|---------------------------|---------------------------|-------------------------|---------------------------|
    | application_id_name    | darklist_category         | https_common_name         | namespace               | tos                       |
    | building               | darklist_direction        | interface_name            | namespace_uuid          | type                      |
    | building_uuid          | darklist_score_name       | ip_as_name                | organization            | url                       |
    | campus                 | darklist_score            | ip_country_code           | organization_uuid       | wan_interface_description |
    | campus_uuid            | deployment                | ip_protocol_version       | product_name            | wan_interface_name        |
    | client_accounting_type | deployment_uuid           | l4_proto                  | public_ip               | wan_ip                    |
    | client_auth_type       | direction                 | lan_interface_description | public_ip_mac           | wan_ip_as_name            |
    | client_fullname        | dot11_protocol            | lan_interface_name        | referer                 | wan_ip_country_code       |
    | client_gender          | dot11_status              | lan_ip                    | referer_l2              | wan_ip_map                |
    | client_id              | dst_map                   | lan_ip_as_name            | scatterplot             | wan_ip_net_name           |
    | client_latlong         | duration                  | lan_ip_country_code       | selector_name           | wan_l4_port               |
    | client_loyality        | engine_id_name            | lan_ip_name               | sensor_ip               | wan_name                  |
    | client_mac             | floor                     | lan_ip_net_name           | sensor_name             | wan_vlan                  |
    | client_mac_vendor      | floor_uuid                | lan_l4_port               | sensor_uuid             | wireless_id               |
    | client_rssi            | host                      | lan_name                  | service_provider        | wireless_operator         |
    | client_vip             | host_l2_domain            | lan_vlan                  | service_provider_uuid   | wireless_station          |
    | conversation           | http_social_media         | market                    | src_map                 | zone                      |
    | coordinates_map        | http_user_agent           | market_uuid               | tcp_flags               | zone_uuid                 |

### Dimensions for `rb_event`

Within `rb_event`, we have *IDS/IPS* data, so we will find the information typically found in the **Intrusion** module through the web interface.

To see a list of available dimensions, expand the following tab:

??? info "Dimensions"
    |                        |                      |                      |                      |                      |
    |------------------------|----------------------|----------------------|----------------------|----------------------|
    | action                 | campus               | campus_uuid          | classification       | conversation         |
    | building               | building_uuid        | darklist_category    | darklist_direction   | darklist_score       |
    | darklist_score_name    | deployment           | deployment_uuid      | domain_name          | dst                  |
    | dst_as_name            | dst_country_code     | dst_map              | dst_net_name         | dst_port             |
    | ethdst                 | ethdst_vendor        | ethlength_range      | ethsrc               | ethsrc_vendor        |
    | file_hostname          | file_size            | file_uri             | floor                | floor_uuid           |
    | group_name             | icmptype             | incident_uuid        | iplen_range          | l4_proto             |
    | market                 | market_uuid          | msg                  | namespace            | namespace_uuid       |
    | organization           | organization_uuid    | priority             | rev                  | scatterplot          |
    | sensor_name            | service_provider     | service_provider_uuid| sha256               | sig_generator        |
    | sig_id                 | src                  | src_as_name          | src_country_code     | src_map              |
    | src_net_name           | src_port             | tos                  | ttl                  | vlan                 |

### Dimensions for `rb_state`

Within `rb_state`, we have data on the health status of wireless stations obtained via SNMP.

To see a list of available dimensions, expand the following tab:

??? info "Dimensions"
    |                      |                     |                    |                      |                     |
    |----------------------|---------------------|--------------------|----------------------|---------------------|
    | building             | building_uuid       | campus             | campus_uuid          | client_count        |
    | deployment           | deployment_uuid     | floor              | floor_uuid           | market              |
    | market_uuid          | namespace           | namespace_uuid     | organization         | organization_uuid   |
    | sensor_name          | sensor_uuid         | service_provider   | service_provider_uuid| status              |
    | type                 | wireless_admin_state| wireless_channel   | wireless_mode        | wireless_op_state   |
    | wireless_slot        | wireless_station    | wireless_station_ip| wireless_station_name| wireless_tx_power   |
    | zone                 | zone_uuid           |                    |                      |                     |

## Filters

A filter is a *JSON* object that specifies which data rows should be included in the computation of a request. It is essentially equivalent to the WHERE clause in SQL, allowing filters to be used similarly to how you would use such a clause.

### `selector`

The simplest filter is a `selector` filter. This filter matches a specific dimension with a specific value. Selector filters can be used as base filters for more complex boolean expressions of filters.

!!! example "Syntax for `selector` filter"

        {
            "type": "selector",
            "dimension": "client_mac",
            "value": "8c:58:77:0b:56:fc"
        }

### `regex`

This filter is similar to the `selector` filter but uses regular expressions. It matches the specified dimension with the given pattern. The pattern can be any standard Java regular expression.

!!! example "Syntax for `regex` filter"

        {
            "type": "regex",
            "dimension": "http_host",
            "pattern": "youtube\.com"            
        }

### Logical Expression Filters

It is possible to use logical expressions AND, OR, and NOT to combine filters or create more complex filters using the previously mentioned types.

!!! example "Syntax for `and` filter"

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

!!! example "Syntax for `or` filter"

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

!!! example "Syntax for `not` filter"

        {
            "type": "not", 
            "field": {
                "type": "selector",
                "dimension": "client_mac",
                "value": "8c:58:77:0b:56:fc"
            }
        }
