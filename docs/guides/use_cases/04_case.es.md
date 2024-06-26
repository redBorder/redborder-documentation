# Ataques de fuerza bruta SSH

En este caso, queremos proteger y monitorear un servidor SSH crítico, por lo que utilizaremos reglas Siddhi para rastrear cualquier tipo de ataque de fuerza bruta.

Una vez que tenemos configurado el servidor SSH y ya hemos creado un sensor para él en Redborder, necesitamos habilitar el motor de correlación.

Para habilitar el motor de correlación, debemos introducir los siguientes comandos en la terminal del administrador.

![Ataque de fuerza bruta SSH: Habilitar el motor de correlación](images/ch30_img005_a.png)

Después de eso tendremos que esperar unos minutos para asegurarnos de que CEP se esté ejecutando. Podemos usar el comando `rbcli service list` para asegurarnos de ello.

![Ataque de fuerza bruta SSH: motor de correlación habilitado](images/ch30_img005_b.png)

Después de eso, ahora podemos ir a las Reglas del motor de correlación desde el menú Herramientas.

Usaremos la regla Siddhi de fuerza bruta SSH.

![Ataque de fuerza bruta SSH: Reglas SSH](images/ch30_img005_d.png)

Podemos ver la regla haciendo clic en el botón de edición a la derecha.

![Ataque de fuerza bruta SSH: Edición de la regla SSH](images/ch30_img005_e.png)

Vamos a cambiar el número máximo de intentos a 3.

![Ataque de fuerza bruta SSH: Editando la regla SSH](images/ch30_img005_f.png)

Después de eso, debemos marcar la casilla de habilitación de la regla y aplicar todos los cambios.

![Ataque de fuerza bruta SSH: Aplicar cambios](images/ch30_img005_g.png)

En el módulo Vault veremos el sensor CEP.

![Ataque de fuerza bruta SSH: Sensor CEP](images/ch30_img005_h.png)

Podemos filtrar por sensor CEP para ver los mensajes.

![Ataque de fuerza bruta SSH: Sensor CEP filtrado](images/ch30_img005_i.png)

En la pestaña de mensajes podemos ver los mensajes del sensor CEP, que muestra que está alertando de que se está realizando un ataque de fuerza bruta.

![Ataque de fuerza bruta SSH: Mensajes CEP](images/ch30_img005_i.png)

> **Nota:** El motor de correlación tiene un gran potencial debido a las reglas Siddhi. Las reglas predeterminadas incluidas en el administrador se pueden editar para adaptarlas a sus propósitos o crear otras nuevas.
