
# Compartiendo modelos de la base de datos

!!! info "Ten en cuenta..."

    Cada petición que devuelve un cuerpo de respuesta en *JSON* tendrá un campo `query` con valor de tipo booleano. Dicho valor representa el estado de la consulta, por lo que si está establecido en `true` significa que la consulta fue exitosa y si está establecido en `false` significa que la consulta no lo fue. Este valor siempre se encontrará en el objeto de respuesta *JSON* raíz y siempre será el hermano de la respuesta actual.

## Listado del árbol de sensores

Para listar un sensor y todos sus sensores subordinados, realiza una petición `GET` a la siguiente URL:

    https://<hostname>/api/v1/sensors/<sensor_uuid>/tree?auth_token=<API_key>

Donde `sensor_uuid` debe ser el UUID *root* del árbol del sensor deseado. Si se desea listar todos los sensores del dominio *top* del usuario y sus sensores subordinados, es posible hacer una petición `GET` a la siguiente URL:

    https://<hostname>/api/v1/sensors/tree?auth_token=<API_key>

!!! example "Ejemplo de petición `GET` para listar todos los sensores"

    curl --insecure -X GET 'https://<hostname>/api/v1/sensors/tree?auth_token=<API_key>' -H 'content-type: application/json'

Si la petición es exitosa, la respuesta tendrá el árbol de sensores solicitado. Actualmente solo se soporta el formato *JSON* para las peticiones y las respuestas.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: GET

        URI: https://<hostname>/api/v1/sensors/8726017729975087448/tree?auth_token=xxxxxx

    **Respuesta**:
    
        Código de estado: 200 OK

        Cuerpo de respuesta:

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

## Creación de dominios

Se pueden crear nuevos sensores haciendo una petición `POST` al siguiente URL:

    https://<hostname>/api/v1/sensors/domain?auth_token=<API_key>

Una carga útil en formato *JSON* debe enviarse junto con esta solicitud. Los parámetros permitidos para la carga útil son:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| uuid               | (Opcional) UUID que el nuevo dominio recibirá al crearse. No debe estar en uso por ningún dominio existente. Si no se especifica, se asignará uno aleatorio no utilizado.      |
| name               | (Necesario) Nombre del nuevo dominio      |
| domain_type        | (Opcional) Número indicando el tipo de dominio. El tipo por defecto es genérico (1). Puede ver los tipos disponibles más adelante, en esta página     |
| parent_uuid        | (Opcional) UUID del padre. Por defecto será el UUID del dominio *top* del usuario.     |
| mac_hasing_salt    | (Opcional) Cadena de hash de MAC para un dominio de **Proveedor de Servicios**. Si el tipo de dominio no es igual a 6 (Proveedor de Servicios), este parámetro será ignorado.      |
| visualization_range| (Opcional) Limita los días que los usuarios pueden visualizar los datos de una organización. Si el tipo de dominio no es igual a 2 (Organización), este parámetro será ignorado.     |
| megabytes_limit    | (Opcional) Limita los megabytes de almacenamiento para los datos de una organización. Si el tipo de dominio no es igual a 2 (Organización), este parámetro será ignorado.      |
| visualization_range| (Opcional) Limita los días que los usuarios pueden visualizar los datos de una organización. Si el tipo de dominio no es igual a 2 (Organización), este parámetro será ignorado.      |

Para ver los diferentes valores de `domain_type`, despliegue la pestaña:

??? note "Valores para el campo `domain_type`"

    - "`1`" = Genérico
    - "`2`" = Organización
    - "`3`" = Mercado
    - "`4`" = Campus
    - "`5`" = Edificio
    - "`6`" = Proveedor de servicios
    - "`7`" = Despliegue
    - "`101`" = Piso

Si la petición es exitosa, la respuesta *JSON* describirá el **dominio** creado y un valor `status` establecido en `true`.

!!! warning "Importante"

    Tenga en cuenta que se requieren permisos de gestión para el sensor principal para poder crear un nuevo sensor. Si faltan estos permisos, se devolverá el código de estado `HTTP 401 Unauthorized`. 
    
    Si se especificó un sensor principal inexistente en la solicitud, se devolverá el código de estado `HTTP 404 Not Found`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URI: https://<hostname>/api/v1/sensors/domain?auth_token=xxxxxx

        Carga útil: { "domain_type":"2", "parent_uuid":"697893457705749905", "name":"new_domain" }

    **Respuesta**:

        Código de estado: 200 OK

        Cuerpo de respuesta:

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

En la respuesta de la *API* hay un campo llamado `type` que indica el **tipo de sensor creado**. Para ver los diferentes valores de `type`, despliegue la pestaña:

??? note "Valores para el campo `type`"

    - "`1`" = Dominio
    - "`2`" = IPS
    - "`3`" = IPS_GROUP (Grupo IPS)
    - "`4`" = IPS_BINDING (Enlace IPS)
    - "`5`" = FLOW

## Creación de sensores de flow

Se pueden crear nuevos sensores haciendo una petición `POST` al siguiente URL:

    https://<hostname>/api/v1/sensors/flow?auth_token=<API_key>

Una carga útil en formato *JSON* debe enviarse junto con esta solicitud. Los parámetros permitidos para la carga útil son:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| ip                 | (Necesario) Dirección IP del sensor.      |
| name               | (Necesario) Nombre para el sensor.      |
| parent_uuid        | (Opcional) Especifica el UUID del sensor padre. Si no se especifica ninguno, se especificará el UUID del sensor *root*     |
| snmp_community     | (Opcional) Especifica el nombre de la comunidad SNMP     |
| snmp_version       | (Opcional) Especifica la versión de SNMP a usar. Actualmente se soporta la 1 y la 2c.     |
| spanport           | (Opcional) Habilitar o deshabilitar el puerto SPAN.     |
| nmsp               | (Opcional) Habilitar o deshabilitar el NMSP.     |
|nmsp_wireless_health| (Opcional) Habilitar o deshabilitar la revisión de estado inalámbrico NMSP.     |
| nmsp_client_stats  | (Opcional) Habilitar o deshabilitar las estadísticas de cliente NMSP.     |
| dns_ptr_client     | (Opcional) Habilitar o deshabilitar la resolución DNS de cliente.     |
| dns_ptr_target     | (Opcional) Habilitar o deshabilitar la resolución DNS de objetivo.    |
| homenets           | (Opcional) Arreglo de uno o más valores que permite indicar las 'redes de casa' que tendrá el sensor. La sintaxis de este campo se explica más adelante.    |
| router_macs        | (Opcional) Arreglo de uno o más valores que permite indicar las MAC de enrutador para este sensor. La sintaxis de este campo se explica más adelante.     |

!!! info "Ten en cuenta..."

    Los campos que permiten habilitar o deshabilitar alguna carácterística tienen dos valores disponibles:
    
    - "`1`"=habilitar
    - "`0`"=deshabilitar

!!! example "Sintaxis para campo `homenets`"

        {
          ...
          "homenets": [
            { "name" : "Homenet1", "value" : "192.168.1.0/24" },
            { "name" : "Homenet2", "value" : "192.168.2.0/24" },
            ...
          ]
        }

!!! example "Sintaxis para campo `router_macs`"

        {
          ...
          "router_macs": [
            { "name" : "Interface1", "value" : "aa:bb:cc:dd:ee:ff" },
            { "name" : "Interface2", "value" : "ff:bb:aa:cc:bb:dd" },
            ...
          ]
        }

Si la petición es exitosa, la respuesta *JSON* describirá el **sensor** creado y un valor `status` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URI: https://<hostname>/api/v1/sensors/flow?auth_token=xxxxxx

        Carga útil: {"name":"test_flow", "parent_uuid":"7549459708256671519", "ip":"10.0.2.10"}

    **Respuesta**:

        Código de estado: 200 OK

        Cuerpo de respuesta:

        {
          "query": true,
          "sensor": {
            "id": 901,
            "uuid": "894798882298873783",
            "name": "test_flow",
            "ip": "10.0.2.10"
          }
        }

## Creación de sensores de Meraki

Se pueden crear nuevos sensores haciendo una petición `POST` al siguiente URL:

    https://<hostname>/api/v1/sensors/meraki?auth_token=<API_key>

Una carga útil en formato *JSON* debe enviarse junto con esta solicitud. Los parámetros permitidos para la carga útil son:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| ip                 | (Necesario) Dirección IP/Dominio del sensor de Meraki.      |
| name               | (Necesario) Nombre para el sensor.      |
| parent_uuid        | (Opcional) Especifica el UUID del sensor padre. Si no se especifica ninguno, se especificará el UUID del sensor *root*     |
| meraki_validator   | (Opcional) Especifica el validador del sensor.     |
| snmp_community     | (Opcional) Especifica el nombre de la comunidad SNMP.     |
| snmp_version       | (Opcional) Especifica la versión de SNMP a usar. Actualmente se soporta la 1 y la 2c.     |

Si la petición es exitosa, la respuesta *JSON* describirá el **sensor** creado y un valor `status` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URI: https://<hostname>/api/v1/sensors/meraki?auth_token=xxxxxx

        Carga útil: { "name":"test_meraki",
                      "parent_uuid":"6396049722605916538",
                      "ip":"10.0.2.10",
                      "meraki_validator": "validator_frase" }

    **Respuesta**:

        Código de estado: 200 OK

        Cuerpo de respuesta:

        {
          "query": true
          "sensor": {
            "id": 1501
            "uuid": "4486950571500705295"
            "name": "test_meraki"
            "ip": "10.0.2.10"
            "meraki_validator": "validator_frase"
            "secret": "52bcf9fa1666053ecd5d0e0c8528627a43ece6be"
          }
        }

## Creación de sensores de MSE

Se pueden crear nuevos sensores haciendo una petición `POST` al siguiente URL:

    https://<hostname>/api/v1/sensors/mse?auth_token=<API_key>

Una carga útil en formato *JSON* debe enviarse junto con esta solicitud. Los parámetros permitidos para la carga útil son:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| stream             | (Necesario) Nombre del flujo MSE.      |
| name               | (Necesario) Nombre para el sensor MSE.      |
| parent_uuid        | (Opcional) Especifica el UUID del sensor padre. Si no se especifica ninguno, se especificará el UUID del sensor *root*     |
| version_mse        | (Opcional) Especifica el validador del sensor.     |
| snmp_community     | (Opcional) Especifica el nombre de la comunidad SNMP.     |
| snmp_version       | (Opcional) Especifica la versión de SNMP a usar. Actualmente se soporta la 1 y la 2c.     |
| homenets           | (Opcional) Arreglo de uno o más valores que permite indicar las 'redes de casa' que tendrá el sensor. La sintaxis de este campo debe ser la misma que la explicada en la [Creación de sensores de Flow](/es/manager/redborder_api/ch11_model_sharing/#creacion-de-sensores-de-flow).    |

Si la petición es exitosa, la respuesta *JSON* describirá el **sensor** creado y un valor `status` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URI: https://<hostname>/api/v1/sensors/mse?auth_token=xxxxxx

        Carga útil: { "name": "test_mse",
                      "parent_uuid": "7549459708256671519",
                      "stream": "StreamB",
                      "mse_version": "8",
                      "port":"xxxx" }

    **Respuesta**:

        Código de estado: 200 OK

        Cuerpo de respuesta:

        {
          "query": true,
          "sensor": {
            "id": 902
            "uuid": "4110689521083459108"
            "name": "test_mse"
            "stream": "StreamB"
            "mse_version": "8"
          }
        }

### Listado de sensores MSE para un dominio

Los sensores MSE de un dominio pueden ser listados haciendo una petición `GET` al siguiente URL:

    https://<hostname>/api/v1/sensors/<sensor_uuid>/mse?auth_token=<API_key>

Donde `sensor_uuid` debe ser el UUID del dominio del que se desea obtener los sensores.

Si la petición es exitosa, la respuesta *JSON* describirá los sensores **MSE** encontrados y un valor `status` establecido en `true`.

!!! warning "Importante"

    Tenga en cuenta que se requieren permisos de lectura para el dominio en cuestión para poder listarlo. Si faltan estos permisos, se devolverá el código de estado `HTTP 401 Unauthorized`. 
    
    Si se especificó un dominio inexistente en la solicitud, se devolverá el código de estado `HTTP 404 Not Found`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URI: https://<hostname>/api/v1/sensors/8726017729975087448/mse?auth_token=xxxxxx

        Carga útil: { "name":"test_meraki",
                      "parent_uuid":"6396049722605916538",
                      "ip":"10.0.2.10",
                      "meraki_validator": "validator_frase" }

    **Respuesta**:

        Código de estado: 200 OK

        Cuerpo de respuesta:

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

## Eliminación de sensores

El usuario es capaz de indicar qué sensor desea eliminar con indicar el UUID de dicho sensor en una petición `DELETE` al siguiente URL:

    https://<hostname>/api/v1/sensors/<uuid>/?auth_token=<API_key>

Donde `uuid` debe ser reemplazado por el UUID del sensor a eliminar.

!!! warning "Importante"

    Tenga en cuenta que se requieren permisos de mantenimiento para el sensor en cuestión para poder eliminarlo. Si faltan estos permisos, se devolverá el código de estado `HTTP 401 Unauthorized`. 
    
    Si se especificó un UUID inexistente en la solicitud, se devolverá el código de estado `HTTP 404 Not Found`.

Si la petición es exitosa, el sensor indicado y todos sus sensores subordinados serán eliminados.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: DELETE

        URI: https://<hostname>/api/v1/sensors/8726017729975087448?auth_token=xxxxxx

    **Respuesta**:

        Código de estado: 200 OK

## Actualizar dominio

Para actualizar el dominio, se utilizan los mismos parámetros que en la [Creación de dominios](/es/manager/redborder_api/ch11_model_sharing/#creacion-de-dominios). Podemos actualizar el nombre, el tipo, el tipo de dominio, el UUID y *MAC Hashing salt* (solo para Proveedores de Servicios). La carga útil debe estar en formato *JSON* y la petición `PATCH` se debe realizar a la siguiente URL:

    https://<hostname>/api/v1/sensors/<sensor_uuid>/?auth_token=<API_key>

Donde `sensor_uuid` debe ser reemplazado por el UUID del sensor a actualizar.

Si la petición es exitosa, la respuesta *JSON* mostrará la información del **dominio** actualizada.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: PATCH

        URI: https://<hostname>/api/v1/sensors/86348645?auth_token=xxxxxx

        Carga útil: { "name": "new_name", "domain_type": "4" }

    **Respuesta**:

        Código de estado: 200 OK
        
        Cuerpo de respuesta:

        {
          "query": true,
          "sensor": {
            "name": "new_name",
            ...
          }
        }

## Actualizar sensores de flow, MSE y Meraki

La actualización de los sensores de flow, MSE y Meraki reciben los mismos parámetros que en su creación. Toda slas propiedades de los sensores serán actualizadas con los nuevos valores. La carga útil de la petición debe estar en formato *JSON* y la petición `PATCH` se debe realizar a la siguiente URL:

    https://<hostname>/api/v1/sensors/<sensor_uuid>/<type>/?auth_token=<API_key>

El parámetro `type` debe ser reemplazado con el tipo de sensor a actualizar (`flow`, `mse` o `meraki`)

Si la petición es exitosa, la respuesta *JSON* mostrará la información del **sensor** actualizada.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: PATCH

        URI: https://<hostname>/api/v1/sensors/86348645/flow?auth_token=xxxxxx

        Carga útil: { "name": "flow_new", "nmsp": "1", "spanport": "0" }

    **Respuesta**:

        Código de estado: 200 OK
        
        Cuerpo de respuesta:

        {
          "query": true,
          "sensor": {
            ...
          }
        }
