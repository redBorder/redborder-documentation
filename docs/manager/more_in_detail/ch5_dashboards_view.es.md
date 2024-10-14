# Vista de Dashboards y Widgets

En este capítulo se explica cómo visualizar los dashboards y qué información contienen los widgets que los componen. No obstante, las instrucciones para la administración de los dashboards y los widgets se explicará en la sección de configuración de la plataforma.

Los dashboards le permiten tener un resumen visual que incluye los principales KPIs (*Key Performance Indicator*) que son necesarios para analizar la infraestructura de la red. El usuario puede combinar widgets para obtener información valiosa sobre tendencias, cambios y excepciones asociadas al tráfico que ocurre en la red o que pasan por ella. Estos paneles de control visuales proporcionan una vista general y resumida de datos importantes en una sola pantalla, permitiendo a los usuarios visualizar y monitorear información clave de manera rápida y eficiente en el contexto de Redborder Manager.

![Dashboard por defecto de Redborder](../redborder_basics/images/ch03_img002.png)

*Dashboard por defecto de Redborder*

## Acceso a los dashboards

Los dashboards se encuentran accesibles directamente desde el primer menú en la cabecera: Inicialmente mostrará el nombre del dashboard que se haya definido por defecto, y siempre mostrará el nombre del dashboard que se tenga seleccionado. El que existe por defecto se llama **Visión General** y muestra un mapa de la localización de los sensores. 

Al expandir el menú, aparecerá el **menú de opciones** que se explicará en el siguiente apartado..

Además, puede acceder a dashboards específicos de las siguientes maneras:

- Utilizando la URL directa del dashboard, que puede copiar desde la opción *URL del dashboard* en la interfaz.
- Si ha establecido un dashboard como predeterminado, este se cargará automáticamente al iniciar sesión.
- A través de los permisos otorgados por el administrador, que determinarán qué dashboards están disponibles para su visualización.

## Opciones de dashboards

La primera opción que encontramos en la barra de menú en el área de análisis es *Dashboard*. Esta es la opción seleccionada por defecto que se verá tan pronto como inicie sesión en el Manager de Redborder.

![Vista general del dashboard](images/ch05_img001.png)

*Vista general del dashboard*

La sección de Dashboard presenta diferentes opciones:

- **Lista de dashboards disponibles**: en la parte superior, el usuario verá los dashboards creados y disponibles para su perfil. Junto a cada dashboard, hay dos iconos; el primero (llave inglesa) nos permite ver y editar la configuración general del dashboard. El ícono "Copiar" a la derecha nos permitirá clonar el dashboard seleccionado.
- **URL del dashboard**: da al usuario una manera rápida de copiar la URL del dashboard actual para compartirla.
- **Máquina del tiempo**: permite al usuario ver los resultados de las métricas de un día y hora en particular como si fuese ese su tiempo real.

El resto de opciones serán explicadas en detalle en otro capítulo.

![Opciones de dashboard](images/ch05_img002.png)

*Opciones de dashboard*

## Tipos de widgets

Los widgets son componentes individuales y modulares que forman parte de un dashboard. Cada widget representa un conjunto específico de datos o métricas, generalmente en forma de gráficos, tablas, indicadores o cualquier otra representación visual. Los widgets son personalizables y se pueden agregar, eliminar o reorganizar dentro de un dashboard para adaptarse a las necesidades específicas de cada usuario o equipo.

Los widgets están categorizados en diferentes tipos ya que existe una amplia variedad de ellos. La mayoría se relacionan directamente con un módulo específico; el resto o bien muestra información avanzada o simplemente mejora la visualización del propio dashboard. Las categorías de estos widgets se han ordenado en dos en esta explicación, los widgets de módulo y el resto:

![Widget Clientes (sin datos)](images/clients.png)

*Widget Clientes (sin datos)*

### Widgets de módulo

Los widgets asociados a los módulos muestran la información específica del respectivo módulo en cuestión.

- Tráfico
- Intrusión
- Movilidad
- Scanner
- Vault
- Wireless

### Widgets avanzados

El resto de wigets no interactúan directamente con un sólo módulo, sino que se centran en aportar contexto a la visualización en general.

- **Infraestructura**: Sirve para mostrar la configuración y el estado de la infraestructura de red asociada, proporcionando una visión de diagnóstico de la propia plataforma y de las máquinas que monitorizan.
- **Mitre**: Resume las reglas disparadas según la relación que tengan con la terminología MITRE (tácticas, técnicas y procedimientos).
- **Formas**: Completa la estructura de los dashboards con elementos no categorizados, como formas, imágenes, texto o URLs.
- **Combinación**: Permite visualizar los datos de otros módulos cuando el widget concreto no está definido en el resto de módulos.

![Seleccionar tipo de widget](images/ch05_img006.png)

Seleccionar tipo de widget

### Widgets de módulo

Para cada módulo existen widgets extraídos de manera genérica desde las vistas y otros que son exclusivos de esos módulos. Vamos a ver qué es lo que hace cada uno y para que sirven:

#### Wigets genéricos

Los widgets genéricos se encuentran en más de un módulo y se pueden explicar en su conjunto:

- **Raw**: Muestra una vista personalizable de datos en bruto, que contiene información desagregada.
- **Tops**: Presenta una vista personalizable de los eventos más destacados, agregando datos para mostrar totales de diferentes eventos como una sola entrada.
- **Comparar**: Ofrece una vista personalizable para comparar datos a lo largo del tiempo (horas, días, semanas y meses). Por ejemplo, se puede utilizar para comparar la evolución del tráfico de una aplicación particular en diferentes **días**.
- **Indicador individual**: Muestra la cantidad de valores únicos que se han encontrado sobre el campo seleccionado.
Estos widgets tienen como ventaja adicional que se pueden utilizar otro tip de gráficos para mostrar la información de una manera diferente a la de las vistas dentro de los módulos.
<!-- - Inidicadores agrupados -->
- **Índice Rendimiento**: Muestra una categorización a 3 niveles del valor de una agregación para las muestras en un intervalo de tiempo concreto, sin ahondar en el tipo de widget.

#### Tráfico

Para tráfico tenemos los siguientes widgets específicos:

<!-- - *Bandwidth Line* -->
- **Clientes**: Muestra los clientes asociados a la red, especialmente útil cuando se quiere visualizar puntos de acceso. 
- **Mapa de planta**: Muestra la planta de un edificio, y sobre ella, la localización de elementos de la arquitectura de red, como puede ser los access point o el resto de dispositivos de red.
- **Mapa de calor**: Muestra una sección del mapa global sobre el que se le puede solapar información sobre los dispositivos de red, como la cobertura proporcionada por los access point.
- **Mapa**: Muestra una sección del mapa global.
- **Clients Map**: Muestra una sección del mapa global. Con la información de los clientes conectados a los **puntos de acceso** geolocalizados.
<!-- - *Access Points*: Muestra la información asociada a los puntos de acceso asociados a algún sensor de tráfico. -->
<!-- - *Carga canales*: Muestra la carga que tienen los dispositivos de red. -->

###### Clientes

Leerá el campo clientes y mostrará información estadísticas sobre los encontrados en el tráfico de red.

![Widget Clientes](images/clients.png)

*Widget Clientes*

###### Mapas de planta

Los mapas de planta tienen una **planta** asociada. Esta a su vez tiene una imagen arquitectónica de la planta, la cual se muestra en el widget.

![Widget mapa de planta](images/floor_map.png)

*Widget mapa de planta*

###### Mapas geográficos

Los widgets de mapa, mapa de calor y mapa de clientes son parte del conjunto de mapas geográficos. Se pueden mostrar tanto en vista satelital como fotográfica 

![Widget mapa](images/map.png)

*Widget mapa*

#### Intrusión

No hay widgets específicos para este módulo.

<!-- #### Movilidad -->

<!-- - Movimientos:  -->
<!-- - Mapa de calor: Muestra un mapa  -->


<!-- #### Malware

Los widget de tipo Malware se asocian al análisis de eventos Malware ocurridos en cualquier parte de la infraestructura redborder.

![Widgets de malware](images/ch05_img014.png)

Widgets de malware

Pueden resumirse en la siguiente lista:

1. *Score average per hour*: puntuación media de los eventos de malware detectados en las últimas 24 horas.
- *Malware Fast Search*: widget que permite la busqueda de un evento malware por hash, url o ip.
- *Recent Malware*: muestra eventos de malware detectados en las últimas 24 horas. -->

#### Scanner

No hay widgets específicos para este módulo.

#### Vault

No hay widgets específicos para este módulo.

#### Wireless

No hay widgets específicos para este módulo.

#### Infraestructura

- **Sensor**: Muestra la configuración de los sensores.
- **Cluster**: Muestra el estado de los servicios en cada **manager** asociado con la plataforma.
- **Alarma**: Muestra el conjunto de alarmas que se han activado en algún momento. Da acceso directo al panel de configuración de alarmas.
- **Hardware info**: Muestra información referente al dispositivo (chasis, procesador, pcie).
- **Hardware status**: Indica si el funcionamiento del dispositivo es el correcto junto con una imagen identificativa del mismo.
- **Monitor**: Monitoriza una propiedad de hardware concreta de los dispositivos de red.

## Máquina del tiempo

Esta opción vuelve al estado de la máquina durante el día y la hora que haya determinado. El usuario verá los datos como si estuvieran en tiempo real, pero en realidad sólo se ha cambiado la referencia temporal a la indicada en la **máquina del tiempo**.

Este *viaje en el tiempo* nos ofrece un grado máximo de precisión en el análisis porque puede indicar el minuto exacto que desea consultar.

![Máquina del tiempo](images/ch05_img015.png)

*Máquina del tiempo*

## ¿Qué sigue?

Si desea configurar sus propios dashboards, consulte la sección de la documentación tituladas **Adminstración de Dashboards y Widgets** en **configuración de la plataforma**.
