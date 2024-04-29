
# Menú y opciones de los módulos

En el area de análisis de la barra de menú (barra superior, margen izquierdo), podemos encontrar diferentes secciones correspondientes a las Apps que hemos integrado en la plataforma de Redborder.

Posteriormente veremos las diferentes opciones para la visualización de datos, tipos de gráficos, granularidad (grado máximo de detalle temporal para una consulta de eventos) y atributos que pueden ser combinados para obtener un visualizador de tráfico de red totalmente personalizable.

![Vista general de un módulo](images/ch04_img010.png)

Vista general de un módulo

## Opciones disponibles en el submenú

![Opciones en el submenú](images/ch04_img011.png)

### Filtros

Permiten a los usuarios aislar una porción de la información para detallarla. En esta pestaña puede ver el número de filtros que han sido aplicados para aplicar acciones sobre ellos:

- *Busqueda avanzada.*
- *Crear una alarma.*
- *Crear un widget.*

Para más información sobre los filtros de eventos, puede consultar el artículo [Filtrado de eventos](/manager/more_in_detail/ch4_3_filtering_events)

![Filtros](images/ch04_img012.png)

Filtros

### Vistas

Ofrece diferentes opciones para mostrar la información. Para más información, puede consultar el artículo [Vistas, varias opciones para visualizar datos](/manager/more_in_detail/ch4_5_views)

- *Raw*: eventos en bruto.
- *Tops*: muestra la suma total de datos de diferentes eventos para mostrarlos como uno solo.
- *Comparar*: comparación de eventos dentro de un periodo de tiempo.
- *Único*: muestra el número de eventos únicos, agrupados según se indique.

![Vistas](images/ch04_img013.png)

Vistas

### Agregación

Hay diferentes valores o unidades de medida en los que los datos pueden ser mostrados. Por ejemplo, flows por segundo (flows/s) o bytes por segundo (bps). Tenga en cuenta que cada módulo tiene sus propias opciones de agregación.

Si desea ver las agregaciones disponibles, despliegue esta pestaña:

??? info "Agregaciones disponibles"

    | Agregación         | Descripción                            |
    | ------------------ | -------------------------------------- |
    | bps                | Número de bits por segundo |
    | bytes              | Número total de bytes transferidos |
    | packets            | Número total de paquetes enviados a través de la red |
    | packets/s          | Número total de paquetes por segundo enviados a través de la red |
    | flows              | Número de flujos exportados |
    | flows/s            | Número de flujos exportados por segundo |
    | client             | Número de direcciones MAC únicas detectadas por la sonda de red |
    | quality            | Porcentaje de la fuerza de señal de la red según lo reportado por el controlador inalámbrico y basado en RSSI y número de clientes |
    | risk               | Porcentaje que representa cuán malicioso es su tráfico basado en sistemas de reputación |
    | wireless stations  | Número de estaciones inalámbricas reportadas por el controlador inalámbrico |
    | clients/station    | Número de clientes que tiene cada estación inalámbrica |
    | bps/client         | Promedio de uso de red que produce cada cliente |
    | bytes/client       | Promedio de bytes que envía cada cliente |
    | flows/client       | Número de flujos exportados por la red dividido por el número de clientes |
    | fps/client         | Número de flujos por segundo exportados por la sonda de red dividido por el número de clientes |
    | bytes/station      | Promedio de bytes que envía cada estación inalámbrica |
    | bps/station        | Promedio de uso de red que produce cada estación inalámbrica |

    !!! tip "Se recomienda..."
    
        Optimice su métrica combinando diferentes tipos de opciones de granularidad de agregación (períodos de tiempo) que están disponibles.

![Agregación](images/ch04_img014.png)

Agregación

### Granularidad

Indica el grado de detalle temporal que puede mostrar la información. El mínimo valor para la granularidad es un minuto.

Las opciones de granularidad varían según el rango de tiempo que se muestra (1h., 2h., La semana pasada, el mes pasado, etc.). Con esta vista, el usuario puede analizar el tráfico de red en tiempo real.

De acuerdo con el período de tiempo seleccionado, el usuario puede conocer los detalles del tráfico en, por ejemplo, un lapso de dos minutos.

![Granularidad](images/ch04_img015.png)

Granularidad

### Gráfico

Muestra los diferentes tipos de gráficos entre los que se pueden mostrar los datos. Los tipos de gráficos disponibles varían dependiendo de la vista seleccionada. Esta opción no aparece, por ejemplo, al aplicar la vista de mapa de los datos, ya que los datos se representan en dicho mapa.

Estas son las posibilidades gráficas de la plataforma Redborder para vistas:

**Área**: gráfico que proporciona una superposición de los datos a un grupo de elementos que pertenecen al atributo seleccionado, haciendo que el tráfico total sea la suma del tráfico por atributo.

![Tipo de gráfico: Área](images/ch04_img016.png)

Tipo de gráfico: Área

Si se desea mostrar un solo elemento gráfico, simplemente haga clic sobre su gráfica dibujada para aislarlo.

**Líneas**: gráfico que proporciona una superposición de los datos a un grupo de elementos que pertenecen al atributo seleccionado; en este caso, el área no se muestra pero el gráfico está representado por una línea.

![Tipo de gráfico: Líneas](images/ch04_img017.png)

Tipo de gráfico: Líneas

**Barras**: proporciona una superposición de datos a un grupo de elementos que pertenecen al atributo seleccionado, siendo el total, la suma de valores de cada uno de esos elementos. En este caso, los datos se representan mediante barras.

![Tipo de gráfico: Barras](images/ch04_img018.png)

Tipo de gráfico: Barras

**Barras apiladas**: también llamado o **Barras acumuladas**, proporciona en el mismo gráfico los datos obtenidos para cada uno de los elementos incluidos en el atributo seleccionado, para que pueda ver los resultados de IP independiente, sensor, etc., representados en barras.

![Tipo de gráfico: SBarras](images/ch04_img019.png)

Tipo de gráfico: Barras apiladas

**Acumulado**: muestra comparativamente en el mismo gráfico los datos para cada uno de los atributos seleccionados.

![Tipo de gráfico: Acumulado](images/ch04_img020.png)

Tipo de gráfico: Acumulado

**Flujos**: gráfico solo disponible en la vista Raw. Muestra el flujo del tráfico por sensor.

![Tipo de gráfico: Flujos](images/ch06_img001.png)

Tipo de gráfico: Flujos

### Opciones

En esta sección, el usuario puede realizar varias acciones para administrar los datos que se muestran. Las opciones varían según la vista seleccionada.

- *Mostrar total filtrado/Ocultar total filtrado*: al seleccionar esta opción, se muestra en el gráfico el valor de todo el tráfico diferenciado recibido o emitido por cada uno de los atributos que se pueden consultar. Cuando esta opción está activa, aparece la lista de opciones "Ocultar total". Disponible en la vista superior y única.
- *Exportar a CSV*: proporciona la opción de exportar a CSV que incluye los datos que corresponden al atributo seleccionado, puede establecer un límite de filas para incluir en el archivo. Disponible solo para las **vistas Tops y Único**.
- *Máquina del tiempo*: devuelve la máquina a un estado anterior. Al seleccionar esta opción, el usuario puede ver los datos como si los estuviera viendo en el último día y hora especificados. Disponible para todas las vistas excepto para Raw.
- *Ordenar agregaciones*: permite cambiar el orden de las agregaciones que se muestran en el módulo.
- *Guardar pestañas como predeterminadas*: al seleccionar esta opción, las pestañas abiertas actualmente se guardarán como las pestañas predeterminadas.

![Opciones](images/ch04_img021.png)

Opciones

### Atributos

Los eventos recibidos por el Manager consisten en un par "columna: valor". Los valores dados en cada columna pueden entenderse como datos específicos del evento que son los que realmente proporcionan información. Estos son los llamados "atributos".

Estos atributos nos ayudan a llevar a cabo un análisis integral y personalizado para cada uno de los elementos involucrados en el flujo del tráfico de red de nuestra organización. Estos se organizan en pestañas o columnas a la vista que estamos consultando. Las opciones que se muestran son comunes para todas las vistas, excepto para el caso de Comparar (ofrece solo comparabilidad por semanas o meses) y Mapas, en cuyo caso esta sección no se muestra.

Si desea ver las categorías de atributos disponibles, despliegue esta pestaña:

??? info "Categorías de atributos disponibles"

    === "Categorías generales"

        - Aplicación
        - Datos de cliente
        - Lista negra
        - Enlace de datos
        - Flujo
        - Interfaz
        - Localización
        - Red
        - Transporte
        - UUIDs

    === "Categorías de Malware"

        - Email
        - Archivo
        - Malware
        - Red

![Atributos](images/ch04_img022.png)

Atributos

Todos los atributos tienen un significado y funcionalidad específica. Por ejemplo, en el módulo de Tráfico podemos observar atributos muy relevantes como *Public IP*, el cual muestra la dirección IP real de los dispositivos que se encuentran en la red, *Public IP MAP*, que indica su posición en el mapa, o *Country Code*, el cual indica el país al que pertenece.

![Atributos: Vista general](images/ch04_img023.png)

Atributos: Vista general

## Cuerpo de la pantalla

### Filtrado por periodo de tiempo

A la izquierda, un poco más abajo del submenú se encuentran los accesos directos a eventos filtrados basados en periodos de tiempo. Los períodos definidos en la plataforma son Última hora, 2 horas, 3 horas, 12 horas, 24 horas y última semana.

![Filtros de período de tiempo](images/ch04_img024.png)

Filtros de período de tiempo

Existe la posibilidad de seleccionar un periodo de tiempo diferente del ofrecido por defecto. Dependiendo de las necesidades del usuario, puede hacer una selección personalizada del periodo mediante la opción Personalizado. Posteriormente se especifica el procedimiento a seguir para realizar un filtro temporal personalizado.

### Pestañas de atributos

Información clasificada del tráfico de red por atributos. Navegando por cada una de las pestañas podemos conocer en detalle los valores asociados con los atributos que se han seleccionado.

![Pestañas de atributos](images/ch04_img025.png)

Pestañas de atributos

!!! info "Ten en cuenta..."
    El usuario puede cambiar el orden en el que se muestran las pestañas en cualquier momento. Para hacerlo debe arrastrar y soltar la pestaña en la posición deseada.

    Esta parte del cuerpo no se muestra en la vista Raw.

### Vista

En esta area los datos son mostrados de acuerdo con la vista seleccionada y el tipo de gráfico. Al colocar el ratón en cualquiera de los puntos que componen el gráfico, un cuadro de dialogo muestra en detalle la información mostrada para ese instante de tiempo, agregación y atributo.

![Vista](images/ch04_img026.png)

Vista

### Resumen

Bajo el area de la *Vista* hay un resumen de todos los datos mostrados, tanto en la vista como en la tabla. En el siguiente orden, este resumen indica el valor de agregación total de todos los datos cargados, el valor de agregación total de todos los datos cargados y seleccionados, el número de filas de datos cargados y el porcentaje de valor agregado de los datos cargados del total de datos.

![Resumen](images/ch04_img027.png)

Resumen

### Motor de búsqueda

Permite realizar una búsqueda por atributo. Las búsquedas se convierten automáticamente en filtros, tal y como veremos más adelante.

![Motor de búsqueda](images/ch04_img028.png)

Motor de búsqueda

### Tabla de datos

Muestra los valores clasificados por tipo de atributo seleccionado. Por ejemplo, cada fila podría mostrar cada una de las IPs de origen (Columna/Atributo: SRC Address) con el porcentaje de detalle bytes (agregación) que consume ese elemento dentro de la red.

Para el análisis aislado de uno o más elementos de esta barra (seleccionar como filtro), debe hacer clic en el elemento que desea filtrar y luego presionar sobre el botón correspondiente que aparecerá junto al motor de búsqueda.

![Tabla de datos](images/ch04_img029.png)

Tabla de datos

!!! info "Ten en cuenta..."
    Al posicionar el cursor sobre cualquiera de los elementos de la tabla de datos se mostrará un menú con las diferentes acciones que pueden ser ejecutadas en ese elemento. Dependiendo del tipo de atributo, se mostrarán las opciones de ordenado en el menú contextual.
