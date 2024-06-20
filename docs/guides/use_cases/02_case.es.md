# Revisión de información remota desde Untangle

Redborder tiene la capacidad de recopilar información de otros fabricantes y usarla para monitorizar sistemas remotos. En este caso de uso, mostraremos cómo es posible revisar un estado del sistema remoto que está siendo monitorizado por Untangle.

En primer lugar accederemos al módulo Vault.

![Módulo Vault: Vista general](images/ch30_img003_a.png)

Seleccionaremos la métrica Clase de Untangle y filtraremos uno de ellos

![Módulo de Vault: Métrica Clase de Untangle](images/ch30_img003_b.png)
  	
Una vez que hayamos filtrado la clase, veremos la métrica del nombre de host que utiliza la clase filtrada.

![Módulo Vault: Vista del nombre del host](images/ch30_img003_c.png)

Queremos saber qué protocolo está utilizando el nombre de host y la clase filtrada.

![Módulo Vault: Vista del filtro](images/ch30_img003_d.png)

Usando la herramienta de filtro podemos ver que el protocolo utilizado por ese nombre de host en particular y esa clase en particular es UDP.

![Módulo Vault: Vista del nombre de protocolo](images/ch30_img003_e.png)
