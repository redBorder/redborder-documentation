
# Módulos

En la **Sección de Eventos** el usuario puede **mostrar, analizar y gestionar** los eventos recolectados por los sensores.

Redborder ofrece la máxima visibilidad de red gracias a las muchas opciones de representación y visualización de datos que nuestras Apps proveen.

La plataforma tiene un módulo para cada funcionalidad. Cada una utiliza diferentes tecnologías y tiene una interfaz independiente. Todos los módulos necesitan un sensor que le provea de datos.

## Business Intelligence

El módulo **Business Intelligence** utiliza la información de clientes a través de los sensores BI. Puede ser usado para obtener las respuestas de los cuestionarios definidos en la plataforma **[RBMobility](https://rbmobility.redborder.com)**.

Este módulo viene desactivado por defecto, para activarlo ejecute el siguiente comando desde la consola:

    rb_set_modules bi:1; chef_client

![Módulo de Business Inteligence](images/ch04_img001.png)

Módulo de BI

## Malware (WIP)

El módulo **Malware** es una solución completa para la detección de archivos, direcciones IP y direcciones URL maliciosas. Para ello se emplean múltiples motores de detección y servicios de reputación que van más allá de las políticas basadas en firmas y técnicas similares.

Este módulo viene desactivado por defecto, para activarlo ejecute el siguiente comando desde la consola:

    rb_set_modules malware:1; rb_set_malware_mode enable logstash; chef_client

![Módulo de Malware](images/ch04_img002.png)

Módulo de Malware

## Tráfico

El módulo **Tráfico** utiliza netflow para extraer información sobre todo el tráfico del sensor. El módulo provee información como IPs, protocolos, localizaciones y mucho más.

![Módulo de Tráfico](images/ch04_img003.png)

Módulo de Tráfico

## Intrusion

El módulo **Intrusión** utiliza datos del sensor o sensores IPS para mostrar eventos de intrusión basados en reglas de Snort. También, gracias a las diferentes vistas que incluye RedBorder, es posible analizar los paquetes que coincidieron con la especificación de la regla.

![Módulo de Intrusión](images/ch04_img004.png)

Módulo de Intrusión

## Monitor

El módulo **Monitor** utiliza datos provenientes de protocolos SNMP, Redfish e Ipmi para mostrar el estado de la infraestructura.

![Módulo de Monitor](images/ch04_img005.png)

Módulo de Monitor

## Vault

El módulo **Vault** utiliza datos de syslog para proveer información sobre eventos de diferentes orígenes, tales como categoría, objetivo, acción del evento y más.

También es posible aumentar las capacidades del módulo Vault a través de las extensiones que añaden compatibilidades con otros fabricantes.

![Módulo de Vault](images/ch04_img006.png)

Módulo de Vault

## Movilidad

El módulo **Movilidad** provee información de localización de sensores de APs de la red. Puede ser usado para mostrar como las personas se mueven en un edificio.

![Módulo de Movilidad](images/ch04_img007.png)

Módulo de Movilidad

## Wireless

El módulo **Wireless** proporciona un análisis de los datos de los visitantes de sensores APs de la red **sin tener en cuenta el cálculo de movimientos**.

Este módulo viene desactivado por defecto, para activarlo ejecute el siguiente comando desde la consola:

    rb_set_modules wireless:1; chef_client

![Módulo de Wireless](images/ch04_img008.png)

Módulo de Wireless

## Reportes

El módulo de **Reportes** permite al usuario tener informes periódicos con información sobre la plataforma Redborder.

Listado de reportes

Para crear un nuevo informe, haga clic en el botón Nuevo informe y complete todos los campos requeridos. También tiene la opción de importar un informe desde un archivo utilizando el botón Importar informe.

Para buscar reportes, introduzca parte del nombre o de la descripción del reporte en la barra de búsqueda y presione la tecla "Enter". Además, puede ordenar los reportes haciendo clic en el encabezado de la columna por la cual desea ordenar; los reportes se ordenarán de forma descendente o ascendente alternativamente.

![Módulo de Reportes](images/ch04_img009.png)

Edición y creación de reportes

En la lista de informes, puede editar un informe existente, generar un PDF o enviarlo por correo electrónico. Todas estas opciones están disponibles en el botón de edición situado a la derecha de la lista.

Durante la creación de un nuevo informe, puede seleccionar parámetros como el tipo de programación, compartir con usuarios específicos o compartir con dominios. Una vez creado el informe, este aparecerá en la lista de informes mencionada anteriormente.


![Edición y creación de Reportes](images/ch04_img049.png)

Composición de reportes

En la vista de composición, el usuario puede editar el reporte y añadir nuevos widgets presionando el botón "Añadir Bloque". Si agarramos el widget desde la barra de título en la parte superior, podremos desplazarlo. En la esquina inferior derecha de cada widget, el cursor cambiará de forma, permitiendo cambiar el tamaño del widget.

![Generación de Reportes](images/ch04_img052.png)

Generación de reportes

Al generar un reporte, se abrirá una nueva ventana en la que, después de unos segundos, el reporte se renderizará en formato PDF. El usuario podrá descargar el reporte presionando el ícono con la silueta de una impresora ubicado en la parte superior derecha de la pantalla. Además, el reporte se guardará en una base de datos o de manera local, permitiendo su posterior visualización para consultar reportes anteriores.

Historial de reportes

Cada vez que se genera un PDF, esta acción se registrará en el historial de reportes, incluyendo la hora y fecha de generación, el reporte generado y el usuario que lo ha generado. El usuario también tiene la posibilidad de visualizar los reportes que han sido exportados previamente, ya sea por él mismo o por otros usuarios.

![Historial de Reportes](images/ch04_img051.png)

Módulo de Informes