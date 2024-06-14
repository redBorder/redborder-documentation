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

## Configuración general

La opción Configuración General nos muestra una interfaz cuya edición se determinará tanto para la configuración de la plataforma como para la infraestructura de la red, como se explicó en el capítulo sobre sensores.

![Configuración General: Configuración general del Manager de Redborder](images/ch07_img006.png)

Configuración General: Configuración general del Manager de Redborder

!!! info "Ten en cuenta..."
    Para ver todas las secciones, se recomienda habilitar la opción Mostrar opciones avanzadas ubicado en la parte superior derecha de la pantalla en la configuración general.

    En esta pantalla puede editar los parámetros tanto del Manager como de las Aplicaciones que se han registrado. Las secciones que se muestran dependerán de las aplicaciones integradas en la plataforma Redborder.

Para realizar una configuración básica en Manager, el usuario puede editar parámetros generales, características de las aplicaciones, configuración del servidor, red, rutas y geolocalización de las IPs.

### Parametros generales

En esta sección, el usuario puede cambiar los siguientes elementos:

- Nombre empresa: nombre de la compañía que usa Redborder.
- Correo empresa de la empresa: correo electrónico de la empresa. Se utilizará como remitente de informes y gestión de licencias.
- URL de la Web: esta es la interfaz de URL, usada para ser referenciada en los emails.
- Largo mínimo de contraseña: indica el número mínimo de caracteres que debe tener una contraseña para ser aceptada en la plataforma.
- Temporizador para cerrado de sesión: tiempo en segundos que la plataforma esperará para cerrar la sesión de algún usuario inactivo.
- Tiempo de refresco del dashboard: periodo del refresco del dashboard en segundos.
- Tiempo bruto de recarga automática: periodo de actualización para la interfaz en segundos.
- Periodicidad de actualización de información de vulnerabilidades: periodicidad para actualizar la información disponible sobre vulnerabilidades.
- Hora de actualización de información de vulnerabilidades: hora en UTC en la que se ejecutará el trabajo de actualización de reglas la información sobre vulnerabilidades.
- Periodicidad de actualización de reglas de snort: periodicidad para actualizar las Reglas.
- Hora de actualización de reglas de snort: hora UTC en que se ejecutará el trabajo de actualización de reglas.

!!! warning "Importante"

    Todos los parámetros definidos en esta interfaz son heredados por aquellos elementos que se encuentran en niveles inferiores en un estado dependiente (dominios, sensores). Para modificar esta información, el usuario debe escribirla o editarla.
