# Revisión de información remota desde Untangle

Redborder tiene la capacidad de recopilar información de otros fabricantes y usarla para monitorizar sistemas remotos. En este caso de uso, mostraremos cómo es posible revisar un estado del sistema remoto que está siendo monitorizado por Untangle.

En primer lugar accederemos al módulo Vault.

![Módulo Vault: vista general](images/ch30_img003_a.png)

Módulo Vault: vista general

Seleccionaremos la métrica Clase de Untangle y filtraremos uno de ellos

![Módulo de Vault: métrica clase de Untangle](images/ch30_img003_b.png)

Módulo de Vault: métrica clase de Untangle

Una vez que hayamos filtrado la clase, veremos la métrica del nombre de host que utiliza la clase filtrada.

![Módulo Vault: vista del nombre del host](images/ch30_img003_c.png)

Módulo Vault: vista del nombre del host

Queremos saber qué protocolo está utilizando el nombre de host y la clase filtrada.

![Módulo Vault: vista del filtro](images/ch30_img003_d.png)

Módulo Vault: vista del filtro

Usando la herramienta de filtro podemos ver que el protocolo utilizado por ese nombre de host en particular y esa clase en particular es UDP.

![Módulo Vault: vista del nombre de protocolo](images/ch30_img003_e.png)

Módulo Vault: vista del nombre de protocolo
