# Trabajador y cola de tareas

En esta opción, el usuario puede verificar el estado del trabajo (*Trabajador*) y las tareas (*Jobs*) que se ejecutan en segundo plano. También puede verificar cuáles de estas tareas se han completado.

Llamamos **Trabajador** a los programas que se ejecutan constantemente en segundo plano y **Tarea** a un programa que se ejecuta periódicamente o solo una vez, pero no permanece ejecutándose en segundo plano, sino que se ejecuta y se cierra.

![Trabajador y cola de tareas: estado de la lista de Trabajadores y cola de tareas](images/worker_jobs_es.png)

Las tareas pueden ser lanzadas manualmente a través del menú **Opciones de Trabajador**, pero en determinados casos se necesita detener antes la tarea para posteriormente lanzarla manualmente.

![Trabajador y cola de tareas: Menú para lanzar tareas manualmente.](./images/worker_jobs_menu_launch_job_es.png)

**Delete Stored Job** se ejectuta todos los días a las 00:00h y elimina las tareas almacenadas desde una fecha determinada que depende del campo "Dias de tareas guardadas almacenadas" y puede modificarse en la **Configuración general**.

![Trabajador y cola de tareas: Campo dias de tareas gaurdadas almacenadas](./images/general_settings_input_deleteStoredJob_es.png)

**Tareas almacenadas** muestra la lista de servicios terminados. Puede conocer el estado de cada uno a través del icono "Información", o eliminar de la lista utilizando el icono "Eliminar". También se puede buscar por el **nombre de la tarea**.

![Trabajador y cola de tareas: lista de servicios terminados](./images/stored_jobs_list_es.png)

**Información** permite comprobar el estado e información de los servicios terminados.

![Trabajador y cola de tareas: Ejemplo de mensaje de información de tareas ejecutadas](./images/stored_jobs_info_es.png)

**Eliminación** elimina una tarea de la lista de servicios terminados.

![Trabajador y cola de tareas: Ejemplo de mensaje de eliminación de tarea almacenada](./images/stored_jobs_delete_msg_en.png)

**Búsqueda** permite buscar por el nombre de la tarea y se actualiza automáticamente la lista de resultados cada vez que se modifica el campo de búsqueda.

![Trabajador y cola de tareas: Ejemplo buscando por "r"](./images/stored_jobs_filter_r_es.png)

![Trabajador y cola de tareas: Ejemplo buscando por "rb"](./images/stored_jobs_filter_rb_es.png)

![Trabajador y cola de tareas: Ejemplo buscando por "x" para no obtener resultados](./images/stored_jobs_filter_no_result_es.png)

