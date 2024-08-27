
# Sharing Database Models

!!! info "Keep in mind..."

    Every request that returns a *JSON* response body will have a `query` field with a boolean value. This value represents the state of the query, so if it is set to `true` it means the query was successful and if it is set to `false` it means the query was not successful.

    This value will always be found in the root *JSON* response object and will always be a sibling of the response.

!!! note "Values replacement"

    To indicate the values that should be replaced as indicated in each case, the data name to be replaced is enclosed between `<` and `>` symbols.

    For example, to specify that `sensor_uuid` should be replaced with its own value or the desired value, you would indicate it by enclosing the name between these symbols: `<sensor_uuid>`.

!!! warning "Important"

    Management permissions (or read permissions to list) are required to create, modify, overwrite, or delete sensors, domains, access points, or any other model in the database. If these permissions are missing for any of these operations, the HTTP status code `401 Unauthorized` will be returned in the *API* response.

    If a sensor, domain, access point, or any other model in the database that does not exist is specified in the request, the HTTP status code `404 Not Found` will be returned in the *API* response.

## Working with Sensors

### Listing the Sensors Tree

To list a sensor and all its subordinate sensors, make a `GET` request to the following URL:
```
https://<manager_IP>/api/v1/sensors/<sensor_uuid>/tree?auth_token=<API_key>
```

Where `sensor_uuid` should be the UUID of the desired sensor tree. If you want to list all sensors of the user's *top* domain and their subordinate sensors, you can make a `GET` request to the following URL:
```
https://<manager_IP>/api/v1/sensors/tree?auth_token=<API_key>
```

!!! example "Example of `GET` request to list all sensors"
    ``` bash
    curl --insecure -X GET 'https://<manager_IP>/api/v1/sensors/tree?auth_token=<API_key>' -H 'content-type: application/json'
    ```

If the request is successful, the response will contain the requested sensor tree and the `query` field will be set to `true`. Currently, only *JSON* format is supported for requests and responses.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: GET

        URI: https://<manager_IP>/api/v1/sensors/8726017729975087448/tree?auth_token=<API_key>

    **Response**:
    
        Status Code: 200 OK

        Response Body:

        {
          "query": true,
          "sensor": {
            "id": 492,
            "name": "Test",
            "ip": null,
            "latitude": null,
            "longitude": null,
            "is_deleted": false,
            "applied_at": null,
            "type": 1,
            "real_parent_id": null,
            "group_id": null,
            "binding_id": null,
            "need_apply": false,
            "applying": false,
            "property": {
              "path": ""
            },
            "domain_type": 1,
            "unassigned": false,
            "policy_id": null,
            "reputation_policy_id": null,
            "need_reputation_apply": false,
            "uuid": "697893457705749905",
            "children": [
              {
                "id": 852,
                "name": "Override_brother",
                "ip": null,
                "latitude": null,
                "longitude": null,
                "is_deleted": false,
                "applied_at": null,
                "type": 1,
                "real_parent_id": null,
                "group_id": null,
                "binding_id": null,
                "need_apply": false,
                "applying": false,
                "property": {},
                "domain_type": 1,
                "unassigned": false,
                "policy_id": null,
                "reputation_policy_id": null,
                "need_reputation_apply": false,
                "uuid": "7106963634872672634",
                "children": []
              },
              {
                "id": 847,
                "name": "Override_parent",
                "ip": null,
                "latitude": null,
                "longitude": null,
                "is_deleted": false,
                "applied_at": null,
                "type": 1,
                "real_parent_id": null,
                "group_id": null,
                "binding_id": null,
                "need_apply": false,
                "applying": false,
                "property": {},
                "domain_type": 1,
                "unassigned": false,
                "policy_id": null,
                "reputation_policy_id": null,
                "need_reputation_apply": false,
                "uuid": "6575077023887022161",
                "children": [
                  {
                    "id": 848,
                    "name": "Override_child",
                    "ip": null,
                    "latitude": null,
                    "longitude": null,
                    "is_deleted": false,
                    "applied_at": null,
                    "type": 1,
                    "real_parent_id": null,
                    "group_id": null,
                    "binding_id": null,
                    "need_apply": false,
                    "applying": false,
                    "property": {},
                    "domain_type": 1,
                    "unassigned": false,
                    "policy_id": null,
                    "reputation_policy_id": null,
                    "need_reputation_apply": false,
                    "uuid": "7137236833163733936",
                    "children": []
                  },
                  {
                    "id": 849,
                    "name": "Override_child_2",
                    "ip": null,
                    "latitude": null,
                    "longitude": null,
                    "is_deleted": false,
                    "applied_at": null,
                    "type": 1,
                    "real_parent_id": null,
                    "group_id": null,
                    "binding_id": null,
                    "need_apply": false,
                    "applying": false,
                    "property": {},
                    "domain_type": 1,
                    "unassigned": false,
                    "policy_id": null,
                    "reputation_policy_id": null,
                    "need_reputation_apply": false,
                    "uuid": "4178223226747106768",
                    "children": [
                      {
                        "id": 851,
                        "name": "Override_grandson_2",
                        "ip": null,
                        "latitude": null,
                        "longitude": null,
                        "is_deleted": false,
                        "applied_at": null,
                        "type": 1,
                        "real_parent_id": null,
                        "group_id": null,
                        "binding_id": null,
                        "need_apply": false,
                        "applying": false,
                        "property": {},
                        "domain_type": 101,
                        "unassigned": false,
                        "policy_id": null,
                        "reputation_policy_id": null,
                        "need_reputation_apply": false,
                        "uuid": "7549459708256671519",
                        "access_points": [],
                        "children": []
                      },
                      {
                        "id": 850,
                        "name": "Override_grandson_1",
                        "ip": null,
                        "latitude": null,
                        "longitude": null,
                        "is_deleted": false,
                        "applied_at": null,
                        "type": 1,
                        "real_parent_id": null,
                        "group_id": null,
                        "binding_id": null,
                        "need_apply": false,
                        "applying": false,
                        "property": {},
                        "domain_type": 1,
                        "unassigned": false,
                        "policy_id": null,
                        "reputation_policy_id": null,
                        "need_reputation_apply": false,
                        "uuid": "8126434584577941831",
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }

### Domain Creation

New domains can be created by making a `POST` request to the following URL:

    https://<manager_IP>/api/v1/sensors/domain?auth_token=<API_key>

A *JSON* payload must be sent along with this request. The allowed parameters for the payload are:

| Parameter          | Description                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| uuid               |  UUID that the new domain will receive upon creation. It must not be in use by any existing domain. If not specified, a random unused one will be assigned. |
| name               | (Required) Name of the new domain                                                                     |
| domain_type        |  Number indicating the type of domain. The default type is generic (1). You can see the available types later on this page.        |
| parent_uuid        |  UUID of the parent. By default, it will be the UUID of the user's *top* domain.             |
| mac_hasing_salt    |  MAC hash string for a **Service Provider** domain. If the domain type is not equal to 6 (Service Provider), this parameter will be ignored.  |
| visualization_range|  Limits the days users can view the data of an organization. If the domain type is not equal to 2 (Organization), this parameter will be ignored. |
| megabytes_limit    |  Limits the megabytes of storage for the data of an organization. If the domain type is not equal to 2 (Organization), this parameter will be ignored. |

To see the different values of `domain_type`, expand the tab:

??? note "Values for the `domain_type` field"

    - "`1`" = Generic
    - "`2`" = Organization
    - "`3`" = Market
    - "`4`" = Campus
    - "`5`" = Building
    - "`6`" = Service Provider
    - "`7`" = Deployment
    - "`101`" = Floor

If the request is successful, the *JSON* response will describe the **domain** created and the `query` field will be set to `true`.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"
    **Request**:
      
        HTTP Method: POST

        URL: https://<manager_IP>/api/v1/sensors/domain?auth_token=<API_key>

        Payload: 
        
        {
          "name": "new_domain"
        }

    **Bash execution**:
    ``` bash
      curl --insecure -X POST 'https://<manager_IP>/api/v1/sensors/domain?auth_token=<API_key>' -H 'content-type: application/json' -d @<create_domain.json>
    ```
    where create_domain.json is:
    ``` json
    {
      "name": "New Domain"
    }
    ```
    
    **Response**:

        Status Code: 200 OK

        Response Body:

        {
          "query": true,
          "sensor": {
            "id": 893,
            "name": "new_domain",
            "type": 1,
            "domain_type": 2,
            "uuid": "242113467595288081"
          }
        }

In the *API* response, there is a field called `type` that indicates the **type of sensor created**. To see the different values of `type`, expand the tab:

??? note "Values for the `type` field"

    - "`1`" = Domain
    - "`2`" = IPS
    - "`3`" = IPS_GROUP
    - "`4`" = IPS_BINDING
    - "`5`" = FLOW

### Flow Sensor Creation

New sensors can be created by making a `POST` request to the following URL:

    https://<manager_IP>/api/v1/sensors/flow?auth_token=<API_key>

A *JSON* payload must be sent along with this request. The allowed parameters for the payload are:

| Parameter              | Description                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| ip                     | (Required) IP address of the sensor.                                                            |
| name                   | (Required) Name for the sensor.                                                                 |
| parent_uuid            |  Specifies the UUID of the parent sensor. If none is specified, the UUID of the *root* sensor will be used. |
| snmp_community         |  Specifies the name of the SNMP community.                                            |
| snmp_version           |  Specifies the version of SNMP to use. Currently, `1` and `2c` are supported.         |
| spanport               |  Enable or disable the SPAN port.                                                     |
| nmsp                   |  Enable or disable NMSP.                                                              |
| nmsp_wireless_health   |  Enable or disable NMSP wireless health check.                                        |
| nmsp_client_stats      |  Enable or disable NMSP client statistics.                                            |
| dns_ptr_client         |  Enable or disable DNS client resolution.                                             |
| dns_ptr_target         |  Enable or disable DNS target resolution.                                             |
| homenets               |  Array of one or more values indicating the 'home networks' for the sensor. The syntax for this field is explained later. |
| router_macs            |  Array of one or more values indicating the router MAC addresses for this sensor. The syntax for this field is explained later. |

!!! info "Note..."

    Fields that enable or disable a feature have two available values:
    
    - "`1`" = enable
    - "`0`" = disable

!!! example "Syntax for `homenets` field"

        {
          ...
          "homenets": [
            { "name" : "Homenet1", "value" : "192.168.1.0/24" },
            { "name" : "Homenet2", "value" : "192.168.2.0/24" },
            ...
          ]
        }

!!! example "Syntax for `router_macs` field"

        {
          ...
          "router_macs": [
            { "name" : "Interface1", "value" : "aa:bb:cc:dd:ee:ff" },
            { "name" : "Interface2", "value" : "ff:bb:aa:cc:bb:dd" },
            ...
          ]
        }

If the request is successful, the *JSON* response will describe the **sensor** created and the `query` field will be set to `true`.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: POST

        URL: https://<manager_IP>/api/v1/sensors/flow?auth_token=<API_key>

        Payload: 
        
        {
          "name": "test_flow",
          "parent_uuid": "7549459708256671519",
          "ip": "10.0.2.10"
        }

    **Response**:

        Status Code: 200 OK

        Response Body:

        {
          "query": true,
          "sensor": {
            "id": 901,
            "uuid": "894798882298873783",
            "name": "test_flow",
            "ip": "10.0.2.10"
          }
        }

### Meraki Sensor Creation

New sensors can be created by making a `POST` request to the following URL:

    https://<manager_IP>/api/v1/sensors/meraki?auth_token=<API_key>

A *JSON* payload must be sent along with this request. The allowed parameters for the payload are:

| Parameter        | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| ip               | (Required) IP address/Domain of the Meraki sensor.               |
| name             | (Required) Name for the sensor.                                  |
| parent_uuid      |  Specifies the UUID of the parent sensor. If none is specified, the UUID of the *root* sensor will be used. |
| meraki_validator |  Specifies the validator of the sensor.                |
| snmp_community   |  Specifies the name of the SNMP community.             |
| snmp_version     |  Specifies the version of SNMP to use. Currently, `1` and `2c` are supported. |

If the request is successful, the *JSON* response will describe the **sensor** created and the `query` field will be set to `true`.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: POST

        URL: https://<manager_IP>/api/v1/sensors/meraki?auth_token=<API_key>

        Payload: 
        
        { 
          "name": "test_meraki",
          "parent_uuid": "6396049722605916538",
          "ip": "10.0.2.10",
          "meraki_validator": "validator_frase" 
        }

    **Response**:

        Status Code: 200 OK

        Response Body:

        {
          "query": true,
          "sensor": {
            "id": 1501,
            "uuid": "4486950571500705295",
            "name": "test_meraki",
            "ip": "10.0.2.10",
            "meraki_validator": "validator_frase",
            "secret": "52bcf9fa1666053ecd5d0e0c8528627a43ece6be"
          }
        }

### MSE Sensor Creation

New sensors can be created by making a `POST` request to the following URL:

    https://<manager_IP>/api/v1/sensors/mse?auth_token=<API_key>

A *JSON* payload must be sent along with this request. The allowed parameters for the payload are:

| Parameter      | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| stream         | (Required) Name of the MSE stream.                                          |
| name           | (Required) Name for the MSE sensor.                                         |
| parent_uuid    |  Specifies the UUID of the parent sensor. If none is specified, the UUID of the *root* sensor will be used. |
| mse_version    |  Specifies the version of the sensor.                             |
| snmp_community |  Specifies the name of the SNMP community.                        |
| snmp_version   |  Specifies the version of SNMP to use. Currently, `1` and `2c` are supported. |
| homenets       |  Array of one or more values indicating the 'home networks' for the sensor. The syntax for this field should be the same as explained in the [Creation of Flow sensors](/es/manager/redborder_api/ch11_model_sharing/#creacion-de-sensores-de-flow). |

If the request is successful, the *JSON* response will describe the **sensor** created and the `query` field will be set to `true`.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: POST

        URL: https://<manager_IP>/api/v1/sensors/mse?auth_token=<API_key>

        Payload: 
        
        { 
          "name": "test_mse",
          "parent_uuid": "7549459708256671519",
          "stream": "StreamB",
          "mse_version": "8"
        }

    **Response**:

        Status Code: 200 OK

        Response Body:

        {
          "query": true,
          "sensor": {
            "id": 902,
            "uuid": "4110689521083459108",
            "name": "test_mse",
            "stream": "StreamB",
            "mse_version": "8"
          }
        }

#### Listing MSE Sensors in a Domain

MSE sensors in a domain can be listed by making a `GET` request to the following URL:

    https://<manager_IP>/api/v1/sensors/<sensor_uuid>/mse?auth_token=<API_key>

Where `sensor_uuid` should be the UUID of the domain from which you want to retrieve the sensors.

If the request is successful, the *JSON* response will describe the **MSE** sensors found and the `query` field will be set to `true`.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: GET

        URL: https://<manager_IP>/api/v1/sensors/8726017729975087448/mse?auth_token=<API_key>

    **Response**:

        Status Code: 200 OK

        Response Body:

        {
            "query": true,
            "mse": [
              {
                "id": 854,
                "name": "TestMSE",
                "ip": "0.0.0.0",
                "latitude": null,
                "longitude": null,
                "is_deleted": false,
                "applied_at": null,
                "type": 8,
                "real_parent_id": null,
                "group_id": null,
                "binding_id": null,
                "need_apply": false,
                "applying": false,
                "property": {},
                "domain_type": 1,
                "unassigned": false,
                "policy_id": null,
                "reputation_policy_id": null,
                "need_reputation_apply": false,
                "uuid": "4297150382216182536"
              }
            ]
          }

### Sensor Deletion

The user can specify which sensor to delete by providing the UUID of that sensor in a `DELETE` request to the following URL:

    https://<manager_IP>/api/v1/sensors/<uuid>/?auth_token=<API_key>

Where `uuid` should be replaced with the UUID of the sensor to be deleted.

If the request is successful, the specified sensor and all its subordinate sensors will be deleted, and the `query` field will be set to `true`.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: DELETE

        URL: https://<manager_IP>/api/v1/sensors/8726017729975087448?auth_token=<API_key>

    **Response**:

        Status Code: 200 OK

### Domain Modification

To update a domain, use the same parameters as in [Domain Creation](/manager/redborder_api/ch11_model_sharing/#domain-creation). You can update the name, type, domain type, UUID, and *MAC Hashing salt* (only for Service Providers). The payload must be in *JSON* format and the `PATCH` request should be made to the following URL:

    https://<manager_IP>/api/v1/sensors/<sensor_uuid>/?auth_token=<API_key>

Where `sensor_uuid` should be replaced with the UUID of the domain to be updated.

If the request is successful, the *JSON* response will show the updated **domain** information and the `query` field will be set to `true`.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: PATCH

        URL: https://<manager_IP>/api/v1/sensors/86348645?auth_token=<API_key>

        Payload:    

        {
            "name": "new_name"
        }
    **Response**:

        Status Code: 200 OK
        
        Response Body:

        {
          "query": true,
          "sensor": {
            "name": "new_name",
            ...
          }
        }

### Modification of Flow, MSE, and Meraki Sensors

Updating Flow, MSE, and Meraki sensors uses the same parameters as in their creation. All sensor properties will be updated with the new values. The request payload must be in *JSON* format, and the `PATCH` request should be made to the following URL:

    https://<manager_IP>/api/v1/sensors/<sensor_uuid>/<type>/?auth_token=<API_key>

The `type` parameter should be replaced with the type of sensor to update (`flow`, `mse`, or `meraki`).

If the request is successful, the *JSON* response will show the updated **sensor** information and the `query` field will be set to `true`.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: PATCH

        URL: https://<manager_IP>/api/v1/sensors/86348645/flow?auth_token=<API_key>

        Payload: 
        
        {
            "name": "flow_new",
            "nmsp": "1",
            "spanport": "0"
        }

    **Response**:

        Status Code: 200 OK
        
        Response Body:

        {
          "query": true,
          "sensor": {
            ...
          }
        }

### Overwriting a Domain

If desired, a domain (referred to as the "main sensor") can be completely replaced with the content provided in the request payload. The request payload must be in *JSON* format and must have a single root tag "sensor" describing the content of the "main sensor" to be replaced. To avoid errors, the UUID value of the "main sensor" cannot be changed. Subdomains can be set using the `children` value, allowing for inheritance. Multiple levels of inheritance are permitted.

!!! warning "Important"

    There are a few important points to consider:

    - If `sensor_uuid` is not present in the URL, the sensor to be overwritten is the user's main domain.
    - If a child of the main sensor does not have a defined UUID, the *API* attempts to find a matching child based on the `name`, `domain_type`, and `type` parameters. If the *API* finds a match, it will update it; otherwise, it will create a new sensor.
    - Access Points ignore the `sensor_name` and `sensor_uuid` parameters. All APs of a sensor will be added to it.
    - If a sensor needs to be created and the `type` or `domain_type` parameters are not present in the *JSON*, the default values are `DOMAIN` and `GENERIC`, respectively.
    - If there is an error in creating/updating sensors, the application will undo all changes.

If the "main sensor" or a child is a domain or a flow sensor, it can contain a list of associated access points. To describe these access points, you can use the `access_points` value. If this value is found in an element that is neither a flow sensor nor a domain, it will be ignored.

The usual rules for creating access points and domains apply, with the exception of primary IDs (`sensor_id` and `switch_id` for access points; `parent_id` for domains), which are not allowed since inheritance is described through JSON nesting.

This request can be executed by issuing a `POST` request to the following URL:

    https://<manager_IP>/api/v1/sensors/<sensor_uuid>/override_all/?auth_token=<API_key>

Where `sensor_uuid` should be replaced with the UUID of the domain to be overwritten.

Alternatively, you can leave the `sensor_uuid` field blank. In this case, the domain to be overwritten is the top domain (main domain) of the user owning the `auth_token` specified in the request:

    https://<manager_IP>/api/v1/sensors/override_all/?auth_token=<API_key>

If the request is successful, the *JSON* response will show the `query` field set to `true`.

Expand the following tab to see a complete execution example:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: POST

        URL: https://<manager_IP>/api/v1/sensors/697893457705749905/override_all?auth_token=<API_key>

        Payload: 
        
        {
          "sensor": {
                    "name": "Override_parent",
                    "domain_type": "1",
                    "children": [
                        {
                            "name": "Override_child",
                            "domain_type": "1"
                        },
                        {
                            "name": "Override_child_2",
                            "domain_type": "1",
                            "children": [
                                {
                                    "name": "Override_grandson_1",
                                    "domain_type": "5",
                                    "access_points": [
                                        {
                                            "mac_address": "22:ca:cc:dd:ff:11",
                                            "name": "Demo AP_Flow1"
                                        },
                                        {
                                            "mac_address": "11:22:cc:ab:ff:ea",
                                            "name": "Demo AP_Flow2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Override_grandson_2",
                                    "domain_type": "101",
                                    "access_points": [
                                        {
                                            "mac_address": "bb:ca:cc:bd:af:22",
                                            "name": "Demo AP1"
                                        },
                                        {
                                            "mac_address": "11:22:ac:dd:ff:44",
                                            "name": "Demo AP2"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
            }
        }

    **Response**:

        Status Code: 200 OK
        
        Response Body:
        
        {
        "query": "true"
        }

## Working with Access Points

### Listing the Access Points

You can obtain a list of all access points that the user has access to by making a `GET` request to the following URL:

    https://<manager_IP>/api/v1/access_points.<format>?auth_token=<API_key>

Where `format` should be the desired response format, either `csv` or `json`.

It is also possible to filter access points by certain available fields. This filtering can be done by sending additional `GET` parameters. These parameters are:

| Parameter          | Description                            |
| ------------------ | -------------------------------------- |
| mac_address        | MAC address of the access point to filter by.      |
| status             | Numeric representation of the access point status ("`1`"=up, "`0`"=down).       |
| name               | Name of the access point.     |
| ip_address         | IP address of the access point to filter by.     |

If the request is successful, the response will include the requested list of access points and the `query` field set to `true`.

Expand the following tab to see a complete execution example with a *JSON* response:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: GET

        URL: https://<manager_IP>/api/v1/access_points.json?auth_token=<API_key>

    **Response**:
    
        Status Code: 200 OK

        Response Body:

        {
          "query": true,
          "access_points": [
            {
              "name": "AP1",
              "service_provider_uuid": null,
              "service_provider": null,
              "deployment_uuid": null,
              "deployment": null,
              "organization_uuid": "9201452791072897388",
              "organization": "Eneo",
              "market_uuid": "6396049722605916538",
              "market": "Spain",
              "building_uuid": "6913104531464819392",
              "building": "Aljarafe Center",
              "campus_uuid": "3118246207405350091",
              "campus": "SVQ",
              "floor_uuid": "9032532605146231448",
              "mac_address": "12:15:14:16:15:aa",
              "status": 0,
              "last_check_in": null,
              "enrichment": {}
            },
            {
              "name": "AP2",
              "service_provider_uuid": null,
              "service_provider": null,
              "deployment_uuid": null,
              "deployment": null,
              "organization_uuid": "9201452791072897388",
              "organization": "Eneo",
              "market_uuid": "6396049722605916538",
              "market": "Spain",
              "building_uuid": "6913104531464819392",
              "building": "Aljarafe Center",
              "campus_uuid": "3118246207405350091",
              "campus": "SVQ",
              "floor_uuid": "9032532605146231448",
              "mac_address": "aa:aa:aa:cc:cc:cc",
              "status": 0,
              "last_check_in": null,
              "enrichment": {}
            },
            {
              "name": "AP3",
              "service_provider_uuid": null,
              "service_provider": null,
              "deployment_uuid": null,
              "deployment": null,
              "organization_uuid": "9201452791072897388",
              "organization": "Eneo",
              "market_uuid": "6396049722605916538",
              "market": "Spain",
              "building_uuid": "6913104531464819392",
              "building": "Aljarafe Center",
              "campus_uuid": "3118246207405350091",
              "campus": "SVQ",
              "floor_uuid": "9032532605146231448",
              "mac_address": "aa:bb:cc:dd:ee",
              "status": 0,
              "last_check_in": null,
              "enrichment": {}
            }
          ]
        }

### Creating Access Points

You can create new access points by making a `POST` request to the following URL:

    https://<manager_IP>/api/v1/access_points?auth_token=<API_key>

To successfully create a new access point, it is necessary to provide a `sensor_uuid` (UUID of the sensor under which the new AP will be a descendant). If this parameter is not provided, an HTTP status code `404 Not Found` will be returned.

Additionally, the user making the request must be able to manage the specified sensor. If the user does not have permission, an HTTP status code `401 Unauthorized` will be returned.

Access points validate the name and MAC address during creation, so these parameters are mandatory. If either of these parameters is missing, an HTTP status code `422 Unprocessable Entity` will be returned along with the specific error in the requested format.

The following parameters are accepted in the payload:

| Parameter          | Description                            |
| ------------------ | -------------------------------------- |
| ip_address         | IP address of the access point to create.     |
| mac_address        | (Required) MAC address of the access point to create.      |
| name               | Name of the access point to create.     |
| status             | Numeric representation of the access point status ("`1`"=up, "`0`"=down).       |
| latitude           | Latitude coordinate to locate the access point.     |
| longitude          | Longitude coordinate to locate the access point.      |
| x                  | Integer representing the x-coordinate on a floor map to locate the access point.      |
| y                  | Integer representing the y-coordinate on a floor map to locate the access point.      |
| sensor_uuid        | (Required) UUID of the parent structure. Must always be a domain.   |
| flow_uuid          | UUID of the associated flow sensor.      |
| description        | Description of the access point to create.      |
| enrichment         | Extra parameters to enrich the information of the access point such as `market_uuid`, `campus_uuid`, `building_uuid`, or `floor_uuid`. These fields indicate where the access point to create belongs.      |

If the request is successful, the *JSON* response will describe the **access point** created and the `query` field set to `true`.

Expand the following tab to see a complete execution example with a *JSON* response:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: POST

        URL: https://<manager_IP>/api/v1/access_points?auth_token=<API_key>

        Payload:
        
        {
          "mac_address": "ed:f4:22:45:ff:ef",
          "enrichment": {
            "campus_uuid": "84758975876475",
            "floor_uuid": "8001483943459605430"
          },
          "sensor_uuid": "5654545586888876551",
          "name": "Demo_AP6",
          "flow_uuid": "89479888298873783"
        }

    **Response**:
    
        Status Code: 200 OK

        Response Body:

        {
          "query": true,
          "ap": {
              "id": 776,
              "ip_address": null,
              "mac_address": "ed:f4:22:45:ff:ef",
              "name": "Demo_Access_Point",
              "switch_name": null,
              "switch_id": null,
              "latitude": null,
              "longitude": null,
              "x": null,
              "y": null,
              "sensor_id": 265,
              "created_at": "2015-06-02T11:33:54.841+02:00",
              "updated_at": "2015-06-02T11:33:54.841+02:00",
              "description": null,
              "status": 0,
              "last_check_in": null,
              "clients": 0,
              "uptime": 0,
              "enrichment": {
                  "campus_uuid": "84758975876475",
                  "floor_uuid": "8001483943459605430"
              },
              "sensor_name": "Restaurant",
              "sensor_uuid": "5654545586888876551"
          }
        }

### Modifying Access Points

Existing access points can be modified by making a `PATCH` or `PUT` request to the following URLs:

    https://<manager_IP>/api/v1/access_points/:id
    https://<manager_IP>/api/v1/access_points/:mac_address

Where `id` is the ID of the access point to modify. It is also possible to specify the access point to modify by including the MAC address of the access point instead of the ID.

The parameters that can be modified are the same as those indicated in the [Creating Access Points](/manager/redborder_api/ch11_model_sharing/#creating-access-points), except for the `enrichment` field.

If the request is successful, the *JSON* response will describe the modified **access point** and the `query` field set to `true`.

### Overriding Domain's Access Points

Similar to domain override, this action affects only the wireless access points contained within the specified domain.

To perform this action, make a `POST` request to the following URL:

    https://<manager_IP>/api/v1/sensors/<sensor_uuid>/access_point/override/?auth_token=<API_key>

Replace `sensor_uuid` with the UUID of the domain for which you want to override the access points.

This request must include a payload as a non-nested JSON array describing the access points that the referenced domain and subdomains should contain. This payload must have the root label `access_points`. Once this request is sent, all access points in the specified domain and subdomains will be deleted.

!!! info "Please note..."

    Access points can be located in the specified domain's subdomains by identifying the domain type (`service_provider`, `organization`, `deployment`, `namespace`) that contains them.

If a container domain is not specified, the access point will be created in the specified parent domain. Domains must be identified by their UUID and/or name, and you can use `<domain_type>_uuid` or `<domain_type>_name` tags for that purpose. These would be examples of the mentioned tags: `deployment_uuid`, `deployment_name`, `organization_uuid`, `organization_name`.

If it is specified that the access point must be in a non-existent domain, **this domain will be created**. If you provided a name for this domain, it will be created with the provided name. If no name is provided, it will be created with a name matching `<domain_type>_<uuid>`, for example: `organization_2342356443333123`. If a domain is found by its name but the UUID does not match, **the provided domain will be updated to match the given one**. In addition, an enrichment field can be included in the access point values.

If the request is successful, the *JSON* response will display the `query` field set to `true`.

Expand the following tab to see a complete execution example with a *JSON* response:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: POST

        URL: https://<manager_IP>/api/v1/sensors/697893457705749905/access_point/override?auth_token=<API_key>

        Payload:
        
        {
          "access_points": [
            {
              "mac_address": "ab:be:ef:22:11:33",
              "name": "AP_with_alredy_created_structure",
              "deployment_uuid": "8001483930459605430"
            },
            {
              "mac_address": "ab:be:ef:12:21:33",
              "name": "AP_create_structure",
              "deployment_uuid": "8001483943659605430"
            },
            {
              "mac_address": "ab:12:ef:12:21:33",
              "name": "AP_create_structure_with_name",
              "deployment_uuid": "8001483943459605430",
              "deployment_name": "Deployment_APs"
            },
            {
              "mac_address": "ab:be:ef:f2:aa:33",
              "name": "AP_with_given_existing_name",
              "deployment_name": "Deployment_APs"
            },
            {
              "mac_address": "ab:be:ef:be:ef:33",
              "name": "AP_with_complex_hierarchy_partially_existent",
              "deployment_uuid": "8301483941239605130",
              "deployment_name": "Deployment_APs",
              "enrichment": {"market_uuid": "3189960848665445691"}
            },
            {
              "mac_address": "ab:22:ef:33:ef:13",
              "name": "AP_with_complex_hierarchy_completely_unexistant",
              "deployment_uuid": "8301483941239605130",
              "deployment_name": "Deployment_APs",
              "enrichment": {"market_uuid": "3189234848665445691","building_name": "NewBuilding",}
            }
          ]
        }

    **Response**:
    
        Status Code: 200 OK

        Response Body:

        {
        "query": "true"
        }

### Access Points deletion

Access points can be deleted through different actions according to the user's needs. If you want to delete a list of access points by providing their MAC address, regardless of their hierarchy, you can send a `DELETE` request to the following URL:

    https://<manager_IP>/api/v1/access_points

This request must be sent along with a *JSON* payload describing the array of access points you want to delete. Access points are identified by their MAC address or ID.

!!! warning "Important"

    To delete an access point, you need management permissions over those access points. If the requesting user lacks management permissions over some specified access points, those points will not be deleted, but **no HTTP error code will be returned**, as there might be other access points that the user can delete.

If the request is successful, the *JSON* response will describe the `query` field set to `true`.

Expand the following tab to see a complete execution example with a *JSON* response:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: DELETE

        URL: https://<manager_IP>/api/v1/access_points?auth_token=<API_key>

        Payload:
        
        {
          "access_points": [
            { "mac_address": "ab:be:e4:22:a1:33" },
            { "id": "42" },
            { "mac_address": "ab:22:ef:33:ef:13" }
          ]
        }

    **Response**:
    
        Status Code: 200 OK

        Response Body:

        {
          "query": "true"
        }

To delete all access points within a domain and its subdomains, a `DELETE` request should be sent to the following URL:

    https://<manager_IP>/api/v1/sensors/<sensor_uuid>/access_points

Where `sensor_uuid` should be replaced with the UUID of the domain from which the **access points** are to be deleted.

If the request is successful, the JSON response will describe the `query` field set to `true`.

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: DELETE

        URL: https://<manager_IP>/api/v1/sensors/697893457705749905/access_points?auth_token=<API_key>

    **Response**:
    
        Status Code: 200 OK

        Response Body:

        {
          "query": "true"
        }

## User Listing

The super administrator has the ability to list all existing users. To do this, a `GET` request must be made to the following URL:

    https://<manager_IP>/api/v1/users.<format>

Where `format` should be the desired format for the response, such as `csv` or `json`.

If the user making the request is not a super administrator, the HTTP status code `401 Unauthorized` will be returned.

If the request is successful, the JSON response will list all users registered on the platform and set the `query` field to `true`.

Expand the following tab to see a complete execution example with a *JSON* response:

??? example "Complete Execution"

    **Request**:
      
        HTTP Method: GET

        URL: https://<manager_IP>/api/v1/users.json?auth_token=<API_key>

    **Response**:
    
        Status Code: 200 OK

        Response Body:

        {
          "query": true,
          "users": [
              {
                  "id": 5,
                  "email": "user@redborder.net",
                  "login": "User",
                  "admin": true,
                  "name": "John Doe",
                  "enabled": true,
                  "authentication_token": "<API_key>",
                  "sensor_id": 472,
                  "sensor_name": "redBorder",
                  "sensor_uuid": "4935760011107548256"
              },
              {
                  "id": 6,
                  "email": "user@redborder.net",
                  "login": "User",
                  "admin": true,
                  "name": "John Doe",
                  "enabled": true,
                  "authentication_token": "<API_key>",
                  "sensor_id": 472,
                  "sensor_name": "redBorder",
                  "sensor_uuid": "4935760011107548256"
              },
              {
                  "id": 7,
                  "email": "user@redborder.net",
                  "login": "User",
                  "admin": false,
                  "name": "User",
                  "enabled": true,
                  "authentication_token": "<API_key>",
                  "sensor_id": 1,
                  "sensor_name": "root",
                  "sensor_uuid": "2584761509592299795"
              },
              {
                  "id": 11,
                  "email": "user@redborder.net",
                  "login": "User",
                  "admin": false,
                  "name": "John Doe",
                  "enabled": true,
                  "authentication_token": "<API_key>",
                  "sensor_id": 260,
                  "sensor_name"{
          "query": "true"
        }17729975087448"
              },
              {
                  "id": 1,
                  "email": "admin@redborder.net",
                  "login": "admin",
                  "admin": true,
                  "name": "Administrator",
                  "enabled": true,
                  "authentication_token": "<API_key>",
                  "sensor_id": 1,
                  "sensor_name": "root",
                  "sensor_uuid": "2584761509592299795"
              },
              {
                  "id": 4,
                  "email": "user@redborder.net",
                  "login": "User",
                  "admin": true,
                  "name": "John Dow",
                  "enabled": true,
                  "authentication_token": "<API_key>",
                  "sensor_id": 1,
                  "sensor_name": "root",
                  "sensor_uuid": "2584761509592299795"
              },
              {
                  "id": 13,
                  "email": "user@redborder.net",
                  "login": "User",
                  "admin": true,
                  "name": "John Dow",
                  "enabled": true,
                  "authentication_token": "<API_key>",
                  "sensor_id": 11,
                  "sensor_name": "Spain",
                  "sensor_uuid": "6396049722605916538"
              },
              {
                  "id": 12,
                  "email": "user@redborder.net",
                  "login": "User",
                  "admin": false,
                  "name": "John Dow",
                  "enabled": true,
                  "authentication_token": "<API_key>",
                  "sensor_id": 2,
                  "sensor_name": "Adamo",
                  "sensor_uuid": "796168482310467136"
              }
          ]
        }

## *API* key Renewal

Users can request a renewal of their authentication token by making a `GET` request to the following URL:

    https://<manager_IP>/api/v1/users/<user_id>/recreate_api_key

Where `user:id` should be replaced with the ID of the desired user.

If the request is successful, the *JSON* response will contain the generated **authentication token** along with the `query` field set to `true`.

Please deploy the following tab to see a complete execution example with a *JSON* response:

??? example "Complete Execution"

    **Request**:
      
        HTTP Action: GET

        URL: https://<manager_IP>/api/v1/users/1/recreate_api_key?auth_token=<API_key>

    **Response**:
    
        HTTP Status Code: 200 OK

        Response Body:

        {
          "query": true,
          "auth_token": "abcdabcdabcd"
        }
