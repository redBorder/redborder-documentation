
# Vistas, varias opciones para visualizar datos

Las vistas proporcionan múltiples perspectivas para mostrar los datos asociados al tráfico de red.

!!! info "Ten en cuenta..."
    En la sección **Dashboard** puede crear widgets personalizados para cada tipo de aplicación que indique un tipo de vista para mostrar eventos.

En la mayoría de las Apps de Redborder se encuentran las siguientes vistas (pueden variar dependiendo de App):

- **Tops**: agregación de eventos basada en una unidad para mostrar los más destacados. La suma total de datos de diferentes eventos para mostrarlos como uno.
- **Raw**: ver todos los eventos de datos sin procesar, clasificados por atributos y franjas horarias.
- **Comparar**: comparar intervalos de tiempo para analizar diferencias en el estado de la red.
- **Único**: muestra los diferentes elementos que han interactuado con la red según el atributo.

![Menú de vistas](images/ch04_img042.png)

Menú de vistas

!!! tip "Se recomienda..."
    Combinar las vistas con diferentes tipos de gráficos le dará múltiples posibilidades para el análisis de datos.

## Tops

La vista *Tops* nos permite ver cuáles fueron los eventos más destacados a medida que se selecciona el intervalo de tiempo. Lo que imaginamos en el gráfico es la suma de todos estos eventos que se muestran como un solo evento. Si colocamos el ratón sobre cada uno de estos "picos" o *Tops*, verá el desglose del evento por fecha, hora y tipo de dimensión o atributo que está comprobando.

![Vista tops](images/ch04_img043.png)

Vista *Tops*

## Raw

Esta vista proporciona eventos de datos sin procesar, por lo tanto, veremos el total de eventos por atributos segmentados por intervalos de tiempo.

Por lo tanto, en la tabla de datos recopilaremos todos los datos de eventos clasificados por columnas. Los datos se mostrarán en la pantalla, sin embargo, si desea ver más, simplemente desplácese y espere a que se carguen más datos: *Cargar más*.

La vista Raw puede proporcionar gráficos en períodos de los últimos 3, 5, 15, 30 o 60 minutos.

![Vista raw](images/ch04_img044.png)

Vista *Raw*

!!! info "Ten en cuenta..."
    Como se muestra en la imagen, el tipo de gráfico ideal para la vista Raw son los flujos de datos o **Flows**

    En la vista Raw los atributos se muestran en columnas.

### Gestión de eventos de flujo

La vista Raw permite mostrar todos los eventos recolectados por atributos y segmentados por slots de tiempo. Combinado con un gráfico de flujo, también muestran el flujo de datos que está ocurriendo en la red.

Cada columna en la tabla de datos muestra los valores que corresponden con los atributos seleccionados. En esta tabla podemos realizar diferentes acciones:

- **Intervalo de tiempo o Timestamp**: puede ver el intervalo de tiempo al que se hace referencia para mostrar la cantidad de eventos que ocurrieron en ese momento. Con una granularidad mayor o igual a 2 minutos, los eventos con menos de dos minutos de diferencia entre sí, son agrupados en un solo conjunto. Para separarlos basta con clicar sobre el ícono de menú a la derecha de la fila del grupo en cuestión.
- **Verifique la información del evento**: al alcanzar la granularidad máxima de los eventos, es posible ver toda la información en detalle de un evento específico, para esto, simplemente se debe clicar sobre el ícono de información a la derecha de la fila en cuestión.
- **Crear objeto**: algunos de los atributos que se muestran en la información del evento permiten la posibilidad de convertir en un Objeto. Esto significa que estos valores pueden agregar un nombre y una descripción que permite la localización de un elemento de manera más rápida y sencilla.

!!! info "Ten en cuenta..."
    Recuerde que la máxima granularidad disponible es de 1 minuto.

## Comparar

Esta vista nos da la evolución del uso de la red al comparar dos intervalos de tiempo. Esta comparación se puede realizar durante horas o días a intervalos de 5 minutos, asegurando un grado máximo de detalle. Con esto, el usuario puede identificar rápidamente el pico de uso de la red.

En la tabla de datos que muestra los que corresponden al intervalo de tiempo seleccionado.

![Vista comparar](images/ch04_img045.png)

Vista *comparar*

## Único

Mediante la vista **Único** el usuario puede obtener información sobre los diferentes elementos que han interactuado, al menos una vez con la red en un período de tiempo determinado. Al colocar el ratón en cualquier punto del gráfico, el usuario obtendrá el resultado total de elementos únicos para el período de tiempo seleccionado.

- **Agrupar por** (*solo disponible en la vista Único*): nos permite agrupar los datos que se muestran en el gráfico en función de un atributo dado. Esta opción proporciona el filtrado y la clasificación de elementos de acuerdo con los criterios de análisis que necesitamos.

![Vista único](images/ch04_img046.png)

Vista *único*

## Analizar (Módulo Malware, WIP)

En esta vista se puede obtener un análisis detallado de una URL, IP, Hash o bien, de un fichero bajo demanda, como si este hubiera entrado por otros canales.

Para ello basta con introducir la IP, la URL o Hash que se desea analizar y hacer clic en **Buscar** o, en el caso de querer analizar un fichero es necesario cargar el archivo y después subirlo a la plataforma seleccionando **Subir**.

Puede saltar de una vista a otra sin necesidad de regresar a la interfaz de eventos Malware seleccionándola en el desplegable del margen superior derecho.

![Vista analizar](images/ch04_img047.png)

Vista *analizar*
