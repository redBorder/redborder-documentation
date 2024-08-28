
# Compartiendo Modelos de la Base de Datos

!!! info "Ten en cuenta..."

    Cada petición que devuelve un cuerpo de respuesta en *JSON* tendrá un campo `query` con valor de tipo booleano. Dicho valor representa el estado de la consulta, por lo que si está establecido en `true` significa que la consulta fue exitosa y si está establecido en `false` significa que la consulta no lo fue.
    
    Este valor siempre se encontrará en la raíz de la respuesta *JSON* y siempre estará junto con la respuesta.

!!! note "Reemplazo de valores"

    Para indicar los valores que deben ser reemplazados con el indicado según el caso, se encierra el nombre del dato a reemplazar entre los símbolos de menor que '<' y mayor que '>'. 
    
    Por ejemplo, para indicar que en algún sitio se debe reemplazar `sensor_uuid` con el valor propio o el valor deseado, se indica encerrando dicho nombre entre los símbolos: `<sensor_uuid>`.

!!! warning "Importante"

    Se requieren permisos de gestión (o de lectura para listar) para poder crear, modificar, sobreescribir o eliminar los sensores, dominios, puntos de acceso o algún otro modelo de la base de datos. Si faltan estos permisos para alguna de estas operaciones, se devolverá el código de estado HTTP `401 Unauthorized` en la respuesta de la *API*. 
    
    Si se especifica un sensor, dominio, punto de acceso o algún otro modelo de la base de datos que sea inexistente en la solicitud, se devolverá el código de estado HTTP `404 Not Found` en la respuesta de la *API*.

## Trabajando con Sensores

### Listado del Árbol de Sensores

Para listar un sensor y todos sus sensores subordinados, realiza una petición `GET` a la siguiente URL:

    https://<IP_manager>/api/v1/sensors/<sensor_uuid>/tree?auth_token=<clave_API>

Donde `sensor_uuid` debe ser el UUID del árbol del sensor deseado. Si se desea listar todos los sensores del dominio *top* del usuario y sus sensores subordinados, es posible hacer una petición `GET` a la siguiente URL:

    https://<IP_manager>/api/v1/sensors/tree?auth_token=<clave_API>

!!! example "Ejemplo de petición `GET` para listar todos los sensores"

    curl --insecure -X GET 'https://<IP_manager>/api/v1/sensors/tree?auth_token=<clave_API>' -H 'content-type: application/json'

Si la petición es exitosa, la respuesta tendrá el árbol de sensores solicitado y el campo `query` establecido en `true`. Actualmente solo se soporta el formato *JSON* para las peticiones y las respuestas.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: GET

        URL: https://<IP_manager>/api/v1/sensors/8726017729975087448/tree?auth_token=<API_key>

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

### Creación de Dominios

Se pueden crear nuevos dominios haciendo una petición `POST` al siguiente URL:

    https://<IP_manager>/api/v1/sensors/domain?auth_token=<clave_API>

Una carga útil en formato *JSON* debe enviarse junto con esta solicitud. Los parámetros permitidos para la carga útil son:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| uuid               |  UUID que el nuevo dominio recibirá al crearse. No debe estar en uso por ningún dominio existente. Si no se especifica, se asignará uno aleatorio no utilizado.      |
| name               | (Obligatorio) Nombre del nuevo dominio      |
| domain_type        |  Número indicando el tipo de dominio. El tipo por defecto es genérico (1). Puede ver los tipos disponibles más adelante, en esta página     |
| parent_uuid        |  UUID del padre. Por defecto será el UUID del dominio *top* del usuario.     |
| mac_hasing_salt    |  Cadena de hash de MAC para un dominio de **Proveedor de Servicios**. Si el tipo de dominio no es igual a 6 (Proveedor de Servicios), este parámetro será ignorado.      |
| visualization_range|  Limita los días que los usuarios pueden visualizar los datos de una organización. Si el tipo de dominio no es igual a 2 (Organización), este parámetro será ignorado.     |
| megabytes_limit    |  Limita los megabytes de almacenamiento para los datos de una organización. Si el tipo de dominio no es igual a 2 (Organización), este parámetro será ignorado.      |
| visualization_range|  Limita los días que los usuarios pueden visualizar los datos de una organización. Si el tipo de dominio no es igual a 2 (Organización), este parámetro será ignorado.      |

Para ver los diferentes valores de `domain_type`, despliegue la pestaña:

??? note "Valores para el campo `domain_type`"

    - "`1`" = Generic (Genérico)
    - "`2`" = Organization (Organización)
    - "`3`" = Market (Mercado)
    - "`4`" = Campus
    - "`5`" = Building (Edificio)
    - "`6`" = Service Provider (Proveedor de servicios)
    - "`7`" = Deployment (Despliegue)
    - "`101`" = Floor (Piso)

Si la petición es exitosa, la respuesta *JSON* describirá el **dominio** creado y el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URL: https://<IP_manager>/api/v1/sensors/domain?auth_token=<API_key>

        Carga útil: 

        {
          "domain_type": "2",
          "parent_uuid": "697893457705749905",
          "name": "new_domain"
        }

    **Ejecución en Bash**:
    ``` bash
      curl --insecure -X POST 'https://<manager_IP>/api/v1/sensors/domain?auth_token=<API_key>' -H 'content-type: application/json' -d @<create_domain.json>
    ```
    donde el archivo *create_domain.json* sería:
    ``` json
    {
      "name": "New Domain"
    }
    ```

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

### Creación de Sensores de Flow

Se pueden crear nuevos sensores haciendo una petición `POST` al siguiente URL:

    https://<IP_manager>/api/v1/sensors/flow?auth_token=<clave_API>

Una carga útil en formato *JSON* debe enviarse junto con esta solicitud. Los parámetros permitidos para la carga útil son:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| ip                 | (Obligatorio) Dirección IP del sensor.   |
| name               | (Obligatorio) Nombre para el sensor.     |
| parent_uuid        |  Especifica el UUID del sensor padre. Si no se especifica ninguno, se especificará el UUID del sensor *root*     |
| snmp_community     |  Especifica el nombre de la comunidad SNMP     |
| snmp_version       |  Especifica la versión de SNMP a usar. Actualmente se soporta la `1` y la `2c`.     |
| spanport           |  Habilitar o deshabilitar el puerto SPAN.     |
| nmsp               |  Habilitar o deshabilitar el NMSP.     |
|nmsp_wireless_health|  Habilitar o deshabilitar la revisión de estado inalámbrico NMSP.     |
| nmsp_client_stats  |  Habilitar o deshabilitar las estadísticas de cliente NMSP.     |
| dns_ptr_client     |  Habilitar o deshabilitar la resolución DNS de cliente.     |
| dns_ptr_target     |  Habilitar o deshabilitar la resolución DNS de objetivo.    |
| homenets           |  Arreglo de uno o más valores que permite indicar las 'redes de casa' que tendrá el sensor. La sintaxis de este campo se explica más adelante.    |
| router_macs        |  Arreglo de uno o más valores que permite indicar las MAC de enrutador para este sensor. La sintaxis de este campo se explica más adelante.     |

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

Si la petición es exitosa, la respuesta *JSON* describirá el **sensor** creado y el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URL: https://<IP_manager>/api/v1/sensors/flow?auth_token=<API_key>

        Carga útil:

        {
          "name": "test_flow",
          "parent_uuid": "7549459708256671519",
          "ip": "10.0.2.10"
        }

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

### Creación de Sensores de Meraki

Se pueden crear nuevos sensores haciendo una petición `POST` al siguiente URL:

    https://<IP_manager>/api/v1/sensors/meraki?auth_token=<clave_API>

Una carga útil en formato *JSON* debe enviarse junto con esta solicitud. Los parámetros permitidos para la carga útil son:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| ip                 | (Obligatorio) Dirección IP/Dominio del sensor de Meraki.      |
| name               | (Obligatorio) Nombre para el sensor.      |
| parent_uuid        |  Especifica el UUID del sensor padre. Si no se especifica ninguno, se especificará el UUID del sensor *root*     |
| meraki_validator   |  Especifica el validador del sensor.     |
| snmp_community     |  Especifica el nombre de la comunidad SNMP.     |
| snmp_version       |  Especifica la versión de SNMP a usar. Actualmente se soporta la 1 y la 2c.     |

Si la petición es exitosa, la respuesta *JSON* describirá el **sensor** creado y el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URL: https://<IP_manager>/api/v1/sensors/meraki?auth_token=<API_key>

        Carga útil: 
 
        {
          "name": "test_meraki",
          "parent_uuid": "6396049722605916538",
          "ip": "10.0.2.10",
          "meraki_validator": "validator_frase"
        }

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

### Creación de Sensores de MSE

Se pueden crear nuevos sensores haciendo una petición `POST` al siguiente URL:

    https://<IP_manager>/api/v1/sensors/mse?auth_token=<clave_API>

Una carga útil en formato *JSON* debe enviarse junto con esta solicitud. Los parámetros permitidos para la carga útil son:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| stream             | (Obligatorio) Nombre del flujo MSE.      |
| name               | (Obligatorio) Nombre para el sensor MSE.      |
| parent_uuid        |  Especifica el UUID del sensor padre. Si no se especifica ninguno, se especificará el UUID del sensor *root*     |
| mse_version        |  Especifica el validador del sensor.     |
| snmp_community     |  Especifica el nombre de la comunidad SNMP.     |
| snmp_version       |  Especifica la versión de SNMP a usar. Actualmente se soporta la 1 y la 2c.     |
| homenets           |  Lista de uno o más valores que permite indicar las 'home networks' que tendrá el sensor. La sintaxis de este campo debe ser la misma que la explicada en la [Creación de sensores de Flow](/es/manager/redborder_api/ch11_model_sharing/#creacion-de-sensores-de-flow).    |

Si la petición es exitosa, la respuesta *JSON* describirá el **sensor** creado y el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URL: https://<IP_manager>/api/v1/sensors/mse?auth_token=<API_key>

        Carga útil: 
        
        { 
          "name": "test_mse",
          "parent_uuid": "7549459708256671519",
          "stream": "StreamB",
          "mse_version": "8"
        }

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

#### Listado de Sensores MSE para un Dominio

Los sensores MSE de un dominio pueden ser listados haciendo una petición `GET` al siguiente URL:

    https://<IP_manager>/api/v1/sensors/<sensor_uuid>/mse?auth_token=<clave_API>

Donde `sensor_uuid` debe ser el UUID del dominio del que se desea obtener los sensores.

Si la petición es exitosa, la respuesta *JSON* describirá los sensores **MSE** encontrados y el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URL: https://<IP_manager>/api/v1/sensors/8726017729975087448/mse?auth_token=<API_key>

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

### Eliminación de Sensores

El usuario es capaz de indicar qué sensor desea eliminar con indicar el UUID de dicho sensor en una petición `DELETE` a la siguiente URL:

    https://<IP_manager>/api/v1/sensors/<uuid>/?auth_token=<clave_API>

Donde `uuid` debe ser reemplazado por el UUID del sensor a eliminar.

Si la petición es exitosa, el sensor indicado y todos sus sensores subordinados serán eliminados y el campo `query` establecido en `true`..

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: DELETE

        URL: https://<IP_manager>/api/v1/sensors/8726017729975087448?auth_token=<API_key>

    **Respuesta**:

        Código de estado: 200 OK

### Modificación de dominios

Para actualizar el dominio, se utilizan los mismos parámetros que en la [Creación de dominios](/es/manager/redborder_api/ch11_model_sharing/#creacion-de-dominios). Podemos actualizar el nombre, el tipo, el tipo de dominio, el UUID y *MAC Hashing salt* (solo para Proveedores de Servicios). La carga útil debe estar en formato *JSON* y la petición `PATCH` se debe realizar a la siguiente URL:

    https://<IP_manager>/api/v1/sensors/<sensor_uuid>/?auth_token=<clave_API>

Donde `sensor_uuid` debe ser reemplazado por el UUID del dominio a actualizar.

Si la petición es exitosa, la respuesta *JSON* mostrará la información del **dominio** actualizada y el campo `query` establecido en `true`..

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: PATCH

        URL: https://<IP_manager>/api/v1/sensors/86348645?auth_token=<API_key>

        Carga útil: 
        
        {
            "name": "new_name"
        }

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

### Modificación de sensores de flow, MSE y Meraki

La actualización de los sensores de flow, MSE y Meraki reciben los mismos parámetros que en su creación. Todas las propiedades de los sensores serán actualizadas con los nuevos valores. La carga útil de la petición debe estar en formato *JSON* y la petición `PATCH` se debe realizar a la siguiente URL:

    https://<IP_manager>/api/v1/sensors/<sensor_uuid>/<type>/?auth_token=<clave_API>

El parámetro `type` debe ser reemplazado con el tipo de sensor a actualizar (`flow`, `mse` o `meraki`)

Si la petición es exitosa, la respuesta *JSON* mostrará la información del **sensor** actualizada y el campo `query` establecido en `true`..

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: PATCH

        URL: https://<IP_manager>/api/v1/sensors/86348645/flow?auth_token=<API_key>

        Carga útil:
        
        {
            "name": "flow_new"
        }

    **Respuesta**:

        Código de estado: 200 OK
        
        Cuerpo de respuesta:

        {
          "query": true,
          "sensor": {
            ...
          }
        }

### Sobreescribir un dominio

Si se desea, un dominio (al que nos referiremos como "sensor principal") puede ser completamente reemplazado con el contenido proporcionado en la carga útil de la solicitud. la carga útil de la solicitud debe estar en formato *JSON*. Dicho *JSON* debe tener una única etiqueta raíz "sensor" que describa el contenido del "sensor principal" a reemplazar. Para evitar errores, no podemos cambiar el valor del UUID del "sensor principal". Los dominios secundarios se pueden establecer utilizando el valor `children` donde se aplica la herencia. Se permiten múltiples niveles de herencia.

!!! warning "Importante"

    Debemos tener en cuenta algunos puntos:

    - Si el `sensor_uuid` no está presente en la URL, el sensor que se sobrescribirá es el dominio principal del usuario.
    - Si un hijo del sensor principal no tiene definido un UUID, la *API* intenta encontrar un hijo que coincida en los parámetros `name`, `domain_type` y `type`. Si la *API* encuentra un hijo, este será actualizado; de lo contrario, la *API* creará un nuevo sensor.
    - Los Puntos de Acceso ignoran los parámetros `sensor_name` y `sensor_uuid`. Todos los APs de un sensor se agregarán a él.
    - Si necesitamos crear un sensor y los parámetros `type` o `domain_type` no están presentes en el *JSON*, los valores predeterminados son `DOMAIN` y `GENERIC` respectivamente.
    - Si hay un error al crear/actualizar sensores, la aplicación deshará todos los cambios.

Si el "sensor principal" o un hijo es un dominio o un sensor de *flow*, puede contener una lista de puntos de acceso asociados. Para describir estos puntos de acceso, puede utilizar el valor `access_points`. Si este valor se encuentra en un elemento que no es un sensor de *flow* ni un dominio, será ignorado.

Se aplican las reglas habituales para la creación de puntos de acceso y dominios, con la excepción de los IDs principales (`sensor_id` y `switch_id` para los puntos de acceso; `parent_id` para los dominios), que no están permitidos, ya que la herencia se describe mediante el anidamiento *JSON*.

Esta solicitud se puede ejecutar emitiendo una petición `POST` a la siguiente URL:

    https://<IP_manager>/api/v1/sensors/<sensor_uuid>/override_all/?auth_token=<clave_API>

Donde `sensor_uuid` debe ser reemplazado por el UUID del dominio a sobreescribir.

Otra opción es no darle un valor al campo `sensor_uuid`. En este caso, el dominio que se va a sobreescribir es el dominio *top* (dominio principal) del usuario dueño del `auth_token` especificado en la petición:

    https://<IP_manager>/api/v1/sensors/override_all/?auth_token=<clave_API>

Si la petición es exitosa, la respuesta *JSON* mostrará el campo `query` establecido en `true`..

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URL: https://<IP_manager>/api/v1/sensors/697893457705749905/override_all?auth_token=<API_key>

        Carga útil: 
        
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

    **Respuesta**:

        Código de estado: 200 OK
        
        Cuerpo de respuesta:
        
        {
        "query": "true"
        }

## Trabajando con Puntos de Acceso

### Listado de Puntos de Acceso

Es posible obtener una lista de todos los puntos de acceso a los que el usuario tiene accesso realizando una petición `GET` a la siguiente URL:

    https://<IP_manager>/api/v1/access_points.<format>?auth_token=<clave_API>

Donde `format` debe ser el formato deseado para la respuesta. Es posible indicar `csv` y `json`.

También es posible filtrar puntos de acceso por algunos campos disponibles. Dicho filtrado se puede realizar enviando parámetros `GET` adicionales, estos parámetros son:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| mac_address        | Dirección MAC del punto de acceso a filtrar.      |
| status             | Representación númerica del estado del punto de acceso ("`1`"=levantado, "`0`"=caído).       |
| name               | Nombre del punto de acceso.     |
| ip_address         | Dirección IP del punto de acceso a filtrar.     |

Si la petición es exitosa, la respuesta tendrá el listado de puntos de acceso solicitado y el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución con respuesta *JSON*:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: GET

        URL: https://<IP_manager>/api/v1/access_points.json?auth_token=<API_key>

    **Respuesta**:
    
        Código de estado: 200 OK

        Cuerpo de respuesta:

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

### Creación de Puntos de Acceso

Se pueden crear nuevos puntos de acceso realizando una petición `POST` a la siguiente URL:

    https://<IP_manager>/api/v1/access_points?auth_token=<clave_API>

Para crear con éxito un nuevo punto de acceso, es necesario proporcionar un `sensor_uuid` (UUID del sensor del cual el nuevo AP será descendiente). Si dicho parámetro no se proporciona, se devolverá un código de estado HTTP `404 Not Found`. Recuerde que puede obtener el UUID **listando el árbol de sensores**.

También se requiere que el usuario que envía la solicitud pueda gestionar el sensor especificado. Si el usuario no tiene permiso, se devolverá un código de estado HTTP `401 Unauthorized`.

Los puntos de acceso validan el nombre y la dirección MAC durante la creación, por lo que estos parámetros son obligatorios. Si falta alguno de estos parámetros, se devolverá un código de estado HTTP `422 Unprocessable Entity` junto con el error específico en el formato solicitado.

Los siguientes parámetros son aceptados en la carga útil:

| Parámetro          | Descripción                            |
| ------------------ | -------------------------------------- |
| ip_address         | Dirección IP del punto de acceso a crear.     |
| mac_address        | (Obligatorio) Dirección MAC del punto de acceso a crear.      |
| name               | Nombre del punto de acceso a crear.     |
| status             | Representación númerica del estado del punto de acceso ("`1`"=levantado, "`0`"=caído).       |
| latitude           | Coordenada latitudinal para localizar el punto de acceso.     |
| longitude          | Coordenada longitudinal para localizar el punto de acceso.      |
| x                  | Entero que representa la coordenada en el eje de las abcisas en un mapa de piso para localizar el punto de acceso.      |
| y                  | Entero que representa la coordenada en el eje de las ordenadas en un mapa de piso para localizar el punto de acceso.      |
| sensor_uuid        | (Obligatorio) UUID de la estructura padre. Debe ser siempre un dominio.   |
| flow_uuid          | UUID del sensor de flow asociado.      |
| description        | Descripción del punto de acceso a crear.      |
| enrichment         | Es posible indicar algunos parámetros extra para enriquecer la información del punto de acceso como `market_uuid`, `campus_uuid`, `building_uuid` o  `floor_uuid`. Estos campos indicarían a dónde pertenece el punto de acceso a crear.      |

Si la petición es exitosa, la respuesta *JSON* describirá el **punto de acceso** creado y el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución con respuesta *JSON*:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URL: https://<IP_manager>/api/v1/access_points?auth_token=<API_key>

        Carga útil:
        
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

    **Respuesta**:
    
        Código de estado: 200 OK

        Cuerpo de respuesta:

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

### Modificación de Puntos de Acceso

Se pueden modificar puntos de acceso existentes haciendo una petición `PATCH` o `PUT` a los siguientes URLs:

    https://<IP_manager>/api/v1/access_points/<sensor_id>
    https://<IP_manager>/api/v1/access_points/<mac_address>

Donde `id` es el ID del punto de acceso a modificar. También es posible indicar el punto de acceso a modificar incluyendo la dirección MAC del punto de acceso, en lugar del ID.

Los parámetros modificables son los mismos que los indicados en la [Creación de puntos de acceso](/es/manager/redborder_api/ch11_model_sharing/#creacion-de-puntos-de-acceso), excepto por el campo `enrichment`.

Si la petición es exitosa, la respuesta *JSON* describirá el **punto de acceso** modificado y el campo `query` establecido en `true`.

### Sobreescribir los Puntos de Acceso de un Dominio

Funciona similar a la sobreescritura del dominio, pero solo afecta a los puntos de acceso inalámbricos contenidos en el dominio especificado

Esta acción se puede realizar haciendo una petición `POST` al siguiente URL:

    https://<IP_manager>/api/v1/sensors/<sensor_uuid>/access_point/override/?auth_token=<clave_API>

Donde `sensor_uuid` se debe reemplazar por el UUID del dominio del cual se quieren sobreescribir los puntos de acceso.

Esta solicitud debe enviarse junto con una carga útil como un arreglo *JSON* no anidado que describa los puntos de acceso que el dominio y subdominios referidos deben contener. Dicha carga útil debe tener la etiqueta raíz `access_points`. Una vez enviada esta solicitud, todos los puntos de acceso en el dominio y subdominios especificados serán eliminados.

!!! info "Ten en cuenta..."

    Los puntos de acceso pueden ubicarse en los subdominios especificados del dominio identificando el tipo de dominio (`service_provider`, `organization`, `deployment`, `namespace`) que los contiene.

Si no se especifica un dominio contenedor, el punto de acceso se creará en el dominio superior especificado. Los dominios deben identificarse por su UUID y/o nombre, y puede usar las etiquetas `<domain_type>_uuid` o `<domain_type>_name` para ese propósito. Este sería un ejemplo de las etiquetas mencionadas: `deployment_uuid`, `deployment_name`, `organization_uuid`, `organization_name`.

Si se especifica que el punto de acceso debe estar contenido en un dominio inexistente, **dicho dominio será creado**. Si proporcionó un nombre para este dominio, se creará con el nombre proporcionado. Si no se proporcionó ningún nombre, se creará con un nombre que coincida con `<domain_type>_<uuid>`, por ejemplo: `organization_2342356443333123`. Si se encuentra un dominio por su nombre pero el UUID no coincide, **el dominio proporcionado se actualizará para que coincida con el dado**. Además, se puede incluir un campo de enriquecimiento en los valores del punto de acceso.

Si la petición es exitosa, la respuesta *JSON* mostrará el campo `query` establecido en `true`..

Despliegue la siguiente pestaña para ver un ejemplo de ejecución completo:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: POST

        URL: https://<IP_manager>/api/v1/sensors/697893457705749905/access_point/override?auth_token=<API_key>

        Carga útil: 
    
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

    **Respuesta**:

        Código de estado: 200 OK
        
        Cuerpo de respuesta:
        
        {
        "query": "true"
        }

### Eliminación de puntos de acceso

Los puntos de acceso pueden ser eliminados mediante diferentes acciones según las necesidades del usuario. Si desea eliminar una lista de puntos de acceso proporcionando su dirección MAC, sin importar dónde se encuentren en términos de jerarquía, puede enviar una solicitud `DELETE` al siguiente URL:

    https://<IP_manager>/api/v1/access_points

Esta solicitud debe enviarse junto con una carga útil *JSON* que describa el arreglo de puntos de acceso que desea eliminar. Los puntos de acceso se identifican por su dirección MAC o por su ID.

!!! warning "Importante"

    Para eliminar un punto de acceso, necesita permisos de gestión sobre dichos puntos de acceso. Si el usuario solicitante no tiene permisos de gestión sobre algunos de los puntos de acceso especificados, no se eliminarán, pero **no se devolverá ningún código de error HTTP**, ya que podría haber otros puntos de acceso que el usuario solicitante pueda eliminar.

Si la petición es exitosa, la respuesta *JSON* describirá el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución con respuesta *JSON*:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: DELETE

        URL: https://<IP_manager>/api/v1/access_points?auth_token=<API_key>

        Carga útil:

        {
          "access_points": [
            { "mac_address": "ab:be:e4:22:a1:33" },
            { "id": "42" },
            { "mac_address": "ab:22:ef:33:ef:13" }
          ]
        }

    **Respuesta**:
    
        Código de estado: 200 OK

        Cuerpo de respuesta:

        {
          "query": "true"
        }

Para eliminar todos los puntos de acceso en un dominio y sus subdominios, se debe realizar una petición `DELETE` a la siguiente URL:

    https://<IP_manager>/api/v1/sensors/<sensor_uuid>/access_points

Donde `sensor_uuid` debe ser el UUID del dominio del que se desea eliminar los **puntos de acceso**.

Si la petición es exitosa, la respuesta *JSON* describirá el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución con respuesta *JSON*:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: DELETE

        URL: https://<IP_manager>/api/v1/sensors/697893457705749905/access_points?auth_token=<API_key>

    **Respuesta**:
    
        Código de estado: 200 OK

        Cuerpo de respuesta:

        {
          "query": "true"
        }

## Listado de usuarios

El súper administrador tiene la posibilidad de listar todos los usuarios existentes. Para ello, se debe realizar una petición `GET` al siguiente URL:

    https://<IP_manager>/api/v1/users.<format>

Donde `format` debe ser el formato deseado para la respuesta. Es posible indicar `csv` y `json`.

Si el usuario que realiza la petición no es súper administrador, se devolverá el código de estado HTTP `401 Unauthorized`

Si la petición es exitosa, la respuesta *JSON* listará todos los usuarios registrados en la plataforma y el campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución con respuesta *JSON*:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: GET

        URL: https://<IP_manager>/api/v1/users.json?auth_token=<API_key>

    **Respuesta**:
    
        Código de estado: 200 OK

        Cuerpo de respuesta:

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
                  "authentication_token": "xxxxxx",
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
                  "authentication_token": "xxxxxx",
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
                  "authentication_token": "xxxxxx",
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
                  "authentication_token": "xxxxxx",
                  "sensor_id": 260,
                  "sensor_name": "Julio",
                  "sensor_uuid": "8726017729975087448"
              },
              {
                  "id": 1,
                  "email": "admin@redborder.net",
                  "login": "admin",
                  "admin": true,
                  "name": "Administrator",
                  "enabled": true,
                  "authentication_token": "xxxxxx",
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
                  "authentication_token": "xxxxxx",
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
                  "authentication_token": "xxxxxx",
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
                  "authentication_token": "xxxxxx",
                  "sensor_id": 2,
                  "sensor_name": "Adamo",
                  "sensor_uuid": "796168482310467136"
              }
          ]
        }

## Renovación de clave de *API*

Los usuarios pueden solicitar una renovación de su token de autenticación realizando una petición `GET` al siguiente URL:

    https://<IP_manager>/api/v1/users/<user_id>/recreate_api_key

Donde `user:id` debe ser reemplazado con el ID del usuario deseado.

Si la petición es exitosa, la respuesta *JSON* contendrá el **token de autenticación** generado junto al campo `query` establecido en `true`.

Despliegue la siguiente pestaña para ver un ejemplo de ejecución con respuesta *JSON*:

??? example "Ejecución completa"

    **Petición**:
      
        Acción HTTP: GET

        URL: https://<IP_manager>/api/v1/users/1/recreate_api_key?auth_token=<API_key>

    **Respuesta**:
    
        Código de estado: 200 OK

        Cuerpo de respuesta:

        {
          "query": true,
          "auth_token": "abcdabcdabcd"
        }
