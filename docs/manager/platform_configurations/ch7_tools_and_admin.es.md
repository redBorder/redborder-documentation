# Herramientas y administración

En el área de configuración de la barra de menú, cerca de Sensores podemos encontrar la sección Herramientas donde puede encontrar las opciones para la configuración de la plataforma Redborder.

![Herramientas: opciones disponibles para configurar la plataforma Redborder](images/ch07_img001.png)

Herramientas: opciones disponibles para configurar la plataforma Redborder

Desde este menú puede establecer las condiciones que deben cumplirse para que el usuario sea notificado por una alarma, realizar un seguimiento de las actividades de los usuarios de la plataforma, registrar nuevos usuarios o gestionar la configuración del clúster, sensores y servidores, entre otras muchas más acciones.

Veamos una descripción de las opciones que se encuentran en el menú de herramientas:

## Alarmas

Una alarma es una notificación que se activa cuando el usuario cumple una o más condiciones.

Al acceder a esta opción, se muestra la lista de alarmas que se han registrado.

![Lista de alarmas activas](images/ch07_img002.png)

Lista de alarmas activas

### Crear una nueva alarma

Haciendo click en el botón **Nueva Alarma** accedemos al formulario, en el que se establecerán las condiciones que debe cumplir la alarma para activar una notificación, y el grado de gravedad definido para esa alarma.

![Crear una alarma nueva](images/ch07_img003.png)

Crear una alarma nueva

1. Configuración General

    - **Nombre**: nombre de la alarma.
    - **Ventana de tiempo**: intervalo de tiempo que debe superarse por exceso o valores predeterminados dados en límite superior / inferior para que la alarma esté activa.
    - **Tipo de producto**: seleccione el tipo de aplicación / elemento para el que se ha definido la alarma. El usuario verá en este campo las opciones que se incluyen en su licencia.
    - **Notificar cada**: establece la secuencia de tiempo para notificación.
    - **Límites superior / inferior**: indica el número de eventos (máximo / mínimo) que deben cumplir las condiciones de la alarma para activar la notificación.
    - **Unidad**: agregación deseada para la alarma. Variará dependiendo de las agregaciones disponibles en el tipo de producto deseado.
    - **Zona horaria**: permite elegir qué definición de tiempo se quiere utilizar para la alarma.
    - **Gravedad**: el usuario debe definir el nivel de gravedad que se le da a la alarma. Dependiendo de las condiciones que haya definido para la alarma, implicará un riesgo muy bajo, bajo, medio, alto, muy alto o crítico. Esta gradación de gravedad también se indica en una escala de colores.

- Anomalías

    RedBorder utiliza técnicas de análisis de datos para proveer notificaciones de peligros potenciales, esta opción permite al usuario configurar alarmas inteligentes que serán disparadas dependiendo de si se detecta alguna anomalía de red dentro de los filtros especificados en el apartado *Condiciones*.

    Activar esta opción hará que se realice un análisis de anomalías una vez pasada la **Ventana de tiempo** configurada en la *Configuración General* de la alarma.

    - **Granularidad**: indica el grado de detalle temporal que utilizará la alarma para analizar los datos.

- Notificaciones

    - A *Syslog*: marque esto para exportar las notificaciones a un servidor syslog externo.
    - Por *Email*: marque esto para seleccionar usuarios a los que enviar las notificaciones y que reciban un correo electrónico cuando se active una alarma.
    - A *Slack*: marque esto para habilitar el campo *Slack Webhook* que permite a la plataforma enviar un mensaje a un canal de Slack cuando se active una alarma.

- Condiciones

    Son los filtros en los que se va a basar el disparado de la alarma. Pueden ser configurados de manera similar a como se configurarían en el tipo de aplicación / elemento para el que se ha definido la alarma.

## Auditorías

Esta opción muestra una lista de la actividad del usuario (o usuarios) registrada en la plataforma Redborder, ordenada cronológicamente de manera predeterminada. El usuario puede ordenar la tabla de forma ascendente o descendente para cada una de las columnas. Puede usar el cuadro de búsqueda ubicado en la parte superior para filtrar la información que desea ver. Las columnas que se muestran en esta tabla son las siguientes:

- Usuario: usuario que realizó la acción
- Recurso: elemento que se ha creado, modificado o eliminado.
- Acción: acción que se ha llevado a cabo (creación, edición, eliminación).
- Mensaje: breve descripción de lo que ha sido auditado.
- Timestamp: fecha y hora del registro de actividad.

![Auditorias: registro de actividad del usuario](images/ch07_img004.png)

Auditorias: registro de actividad del usuario

## Configuración del clúster

La opción Configuración del clúster nos permite verificar el estado y la configuración del clúster, establecer el proceso de creación del clúster durante el proceso de instalación del Manager.

Puede modificar estos valores editando a través del botón de desbloqueo  Desbloquear. La información se puede cambiar con los siguientes parámetros:

- Estado del clúster
- Direcciones IP virtuales
- Histórico de Nodos
- Histórico de Reglas

![Configuración del clúster: Estado y configuración del clúster](images/ch07_img005.png)

Configuración del clúster: Estado y configuración del clúster

## Reglas del motor de correlación

Aquí el uso puede ver todas las reglas para el motor de correlación. Es posible editar las reglas existentes y también crear otras nuevas.

![Reglas del motor de correlación](images/ch07_img007.png)

## Categorías de monitores

Aquí podemos agregar una nueva categoría para monitorizar el hardware. Las categorías utilizan tecnologías como SNMP, Redfish, IPMI o también un esquema Bulkstats para proporcionar información sobre el sistema y su funcionamiento.

![Categorías de Monitor](images/ch07_img008.png)

Categorías de Monitor

Para agregar una nueva categoría de monitor debemos usar el botón superior derecho. Luego rellenaremos los campos seleccionando la tecnología correcta que permita a Redborder recibir los datos.

![Monitor de infraestructura](images/ch07_img009.png)

Monitor de infraestructura

### Operaciones SNMP

Para explicar la operación de la función snmp usaremos un ejemplo, monitorear el uso de memoria. Cuando creamos una nueva categoría de monitor con el botón Nueva categoría de monitor de la página Categorías de monitor, veremos la siguiente ventana emergente.

![Creación inicial de una categoría de monitor](images/ch07_img010.png)

Creación inicial de una categoría de monitor

Esta es la fórmula para calcular el uso de memoria de un dispositivo:

    100*(memory_total-memory_free-memory_total_buffer-memory_total_cache)/memory_total

El resultado es una combinación de diferentes valores snmp. Ahora, si queremos crear un monitor como el de este ejemplo, debemos elegir *Operación SNMP* en el menú desplegable de tecnología.

Debajo del campo OID, ahora hay un botón llamado Añadir nueva variable, que agrega otro campo para que podamos ingresar más OID snmp. Las OID's que se usaron son:

    UCD-SNMP-MIB::memTotalReal.0
    UCD-SNMP-MIB::memAvalReal.0
    UCD-SNMP-MIB::memBuffer.0
    UCD-SNMP-MIB::memCached.0

En la parte inferior, hay un campo Operación de OID, en el que presentaremos la operación que queremos hacer con los OID ingresados previamente.

![Monitor de ejemplo](images/ch07_img011.png)

Monitor de ejemplo

Para cada OID, la salida se almacenará en una variable que luego usaremos en la operación de OID.

Una vez en este punto, solo tenemos que crear el monitor presionando el botón *Crear*.

Para agregar el nuevo monitor a un dispositivo sensor, crearemos un nuevo sensor en la pestaña Sensor, seleccionando *Monitor Device*.

### Bulkstats

Las *Bulk Statistics* (o estadísticas recopiladas) son estadísticas que se recopilan en un grupo o esquema, por ejemplo, estadísticas del sistema, estadísticas de puertos o estadísticas Radius.

Es posible visualizar información de Bulkstats en el manager de redBorder, para ello es necesario configurar la parte del cliente en el dispositivo de Cisco para activar el envío de información al manager via ftp.

Una vez hecho esto, podremos visualizar toda la información referente a Bulkstats en el manager de redBorder accediendo a su pestaña correspondiente y seleccionando los campos deseados dentro del módulo de Monitor.

![Módulo de Monitor: Campos de Bulkstats](images/ch07_img012.png)

Módulo de Monitor: Campos de Bulkstats

Para definir un monitor Bulkstats personalizado, primero es necesario que el usuario tenga un esquema de Bulkstat en su dispositivo de red que pueda guardar en un archivo de texto plano y darle un nombre (por ejemplo: *Bulkstats-Schema.txt*).

Normalmente, los esquemas de bulkstats se ven así:

![Esquemas Bulkstats: Archivo de texto plano](images/ch07_img013.png)

Esquemas Bulkstats: Archivo de texto plano

Luego, se debe hacer clic en el botón **Nueva categoría de monitor** y dentro del nuevo formulario de categoría de monitores, seleccione Bulkstats en la lista de Tecnología. Esto mostrará la nueva opción para colocar su archivo de esquema de archivos masivos que define la configuración del usuario.

![Nueva categoría de monitor: Selección tecnológica](images/ch07_img014.png)

Nueva categoría de monitor: Selección tecnológica

Para asignar la nueva categoría de monitor a un device sensor, es necesario crear un *monitor device* (si el usuario aún no ha creado  uno) desde la vista de Árbol de sensores.

Hacer clic en el menú del sensor y luego haga clic en Monitores.

![Árbol de sensores](images/ch07_img015.png)

Árbol de sensores

Dentro del menú de monitores, presionamos el botón **Añadir Monitor** y dentro de la ventana, presionamos el botón **Añadir** correspondiente a la categoría de monitor creada.

![Monitores para dispositivo: Se muestra el modo Añadir monitores](images/ch07_img016.png)

Monitores para dispositivo: Se muestra el modo Añadir monitores

Una vez agregado el monitor al sensor, mostraría el destino donde necesita configurar el dispositivo para enviar la información.

![Monitores para dispositivo: Ruta de destino](images/ch07_img017.png)

Monitores para dispositivo: Ruta de destino

La url corresponde a la ruta de destino. Es necesario configurar el protocolo sftp en la red del dispositivo para enviar la información sobre los esquemas bulkstats al manager.

## Licencias

A través de esta opción, el usuario puede verificar qué nodos tienen sus licencias vencidas. Del mismo modo, es posible cargar una nueva licencia o solicitar una nueva.

En el borde superior de la pantalla se indica la cantidad de licencias disponibles, las aplicaciones que se pueden usar con estas licencias y la cantidad de nodos caducados. Hay una lista de nodos caducados que necesitan renovar sus licencias en el centro de la pantalla. También hay una lista de las acciones disponibles.

Para cargar un archivo con una nueva licencia de Redborder, haga clic en **Seleccionar archivo**. Para solicitar una nueva licencia, haga clic en **Solicitar una licencia**.

![Licencias: consultas y actualización de licencias caducadas](images/ch07_img018.png)

Licencias: consultas y actualización de licencias caducadas

## Fuentes de búsqueda

Lista de las URL de servicios web que realizan las consultas de datos de red. Desde esta pantalla es posible agregar más servicios web, así como editar los existentes.

- Eliminar un servicio: haga clic en el botón "Eliminar".
- Editar un servicio existente: haga clic en el botón "Editar":

    ![Fuentes de búsqueda: consultas de servicios web](images/ch07_img019.png)

    Fuentes de búsqueda: consultas de servicios web

- Añadir nuevo servicio web: haga clic en el botón  + Agregar fuente de búsqueda.

    ![Añadir una nueva fuente de búsqueda](images/ch07_img020.png)

    Añadir una nueva fuente de búsqueda

## Objetos

Esta opción permite la creación y edición directa de Objetos relacionados a aplicaciones internas, usuarios finales, protocolos, etc. El usuario puede navegar a través de diferentes pestañas que corresponden a los tipos de objetos que se pueden crear. Si desea ubicar los objetos de una manera más eficiente, puede usar el navegador.

Se pueden crear tres tipos de objetos:

- Red
- MAC
- VLAN

![Objetos: lista de objetos](images/ch07_img021.png)

Objetos: lista de objetos

- Cree un nuevo objeto: haga clic en Nuevo objeto (Red, MAC, VLAN)
- Editar un objeto existente: haga clic en el botón "Editar".
- Eliminar un objeto: haga clic en el icono "Eliminar".

![Objetos: crear un nuevo objeto](images/ch07_img021.png)

Objetos: crear un nuevo objeto

En todos los casos, cuando crea o edita un objeto, el sistema le solicita un nombre, un valor y una descripción.

En el margen superior derecho se muestra un submenú de opciones. Permite al usuario importar o exportar los datos relacionados con estos objetos en formato .csv.

!!! info "Ten en cuenta..."
    Es posible crear un objeto directamente a partir de los atributos que se muestran en las tablas de datos de los módulos. Para esto, debe ir al módulo y hacer clic en el triángulo invertido que aparece cuando pasamos el ratón sobre un atributo como IP, MAC o VLAN.

## Mapas superpuestos

Esta opción permite superponer una imagen sobre un mapa de Google para obtener más personalización.

Editar mapa: haga clic en el botón "Editar" situado junto a la lista de mapas existente.

Agregar nuevo mapa: haga clic en  + Nuevo mapa de superposición. 

En ambos casos, se indicará el nombre del mapa, la latitud y la longitud en el lugar donde se debe ubicar la imagen.

Por último, subir la imagen desde su equipo en formato .jpg o .png.

![Mapas superpuestos: superponer imágenes sobre un mapa mundial](images/ch07_img022.png)

Mapas superpuestos: superponer imágenes sobre un mapa mundial

## Alertas de plataforma

Las alertas son mensajes que se muestran a todos los usuarios cuando estos entran a la plataforma web de RedBorder. Es en este apartado donde se pueden administrar las alertas de la plataforma.

Hay tres niveles para las alertas: información, advertencia y peligro. Cada nivel tiene su propio color para que las alertas se puedan diferenciar y todas se colocan por debajo de la barra de menú. En la siguiente imágen tenemos un ejemplo de una alerta de prueba.

![Alertas de plataforma](images/ch07_img023.png)

Alertas de plataforma

Es posible crear alertas para la plataforma utilizando el botón Nueva alerta. Es necesario seleccionar el nivel de alerta y el mensaje de la alerta..

![Alerta de plataforma: Nueva alerta](images/ch07_img024.png)

Alerta de plataforma: Nueva alerta

Si el usuario hace clic en el mensaje de alerta, no se volverá a mostrar hasta que el usuario inicie sesión nuevamente.

Es posible eliminar la alerta haciendo clic en la cruz del mensaje. Después de eso, el mensaje de alerta ya no se mostrará.
