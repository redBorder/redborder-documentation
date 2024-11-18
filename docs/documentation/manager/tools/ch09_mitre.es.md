# Matriz Mitre

La matriz Mitre es un marco de inteligencia de amenazas que nos permite identificar los diferentes tipos de ataques que se pueden llevar a cabo contra un sistema. Esta información se puede importar a la plataforma para ser utilizada como complemento en otras secciones de la plataforma, como **Incidentes** o **Dashboards**.

Por defecto, la matriz Mitre debe descargarse desde una fuente externa definida por la plataforma de Redborder. 

![Vista sin descargar Mitre](images/mitre_empty.png)

### Resumen de Tácticas Mitre

Simplemente presione el botón de descarga y vuelva en un minuto. Después de eso, podrá ver la lista de **Tácticas Mitre**.

![Tácticas Mitre](images/mitre_tactics.png)

La lista predeterminada mostrará todas las tácticas que el marco MITRE ha definido con el número de reglas IPS asociadas a cada una.

### Vista de la Matriz Mitre

La matriz Mitre es una tabla que muestra las diferentes técnicas que han sido activadas por cualquier evento de intrusión durante un cierto período de tiempo. Al igual que otros módulos, el marco de tiempo se puede editar para filtrar la información que está buscando, así como otros campos únicos como **tácticas** y **técnicas**.

![Matriz Mitre](images/mitre_matrix.png)

Las celdas de la matriz están coloreadas según la más alta de las severidades definidas en las reglas activadas, lo que indica el nivel de impacto que la **técnica** puede tener en el sistema. Por otro lado, el número indica la cantidad de reglas que han sido activadas y que tienen que están directamente relacionadas con esa **técnica** en concreto.

Es útil tener una visión global de los ataques que se han llevado a cabo contra el sistema, especialmente cuando se utilizan diferentes técnicas para realizar el ataque, ya que puede significar que el ataque puede tener un alto impacto en el sistema. También es útil para priorizar las acciones a tomar para mitigar el ataque, o simplemente cubrir las vulnerabilidades que pueden ser explotadas.