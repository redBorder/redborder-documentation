# Sensor de Proxy

## INTRO

Un sensor Proxy va a representar la sonda que exportará el tipo de información configurada desde una localización externa a la del propio manager.

## Identificar el sensor de proxy

Es necesario reclamar el sensor en el manager para empezarle a retransmitir los datos provenientes del proxy. Para ello, hay que dirigirse a la web a la sección **Sensors**. En la lista de sensores deberíamos ver una sección llamada **Unclaimed**.

![Sensores sin reclamar](images/Unclaimed_loc.png)

Sensores sin reclamar

Este menú se puede desplegar haciendo click sobre él y podremos ver la lista de sensores pendientes de ser reclamados por el manager. 

![Proxy sin reclamar](images/proxy_unclaimed.png)

Proxy sin reclamar

El icono de **mundo** nos indica que este sensor ha sido identificado como un proxy.

!!! info "Tenga en cuenta..."
    La IP que se muestra en el sensor de proxy se corresponde con la interfaz de management.

## Reclamar el sensor de proxy

A modo de nombre, el proxy se encuentra identificado con un identificador único de caracteres hexadecimales. Sirve como enlace para reclamar el sensor. Vamos a seleccionar el identificador:

![Selección del UUID](images/select_uuid.png)

Selección del UUID

Copiamos pulsando CTRL + C, pulsamos Add Sensor y Claim Sensor:

![Acción de reclamar un sensor](images/Claim_sensor.png)

Acción de reclamar un sensor

Esto nos mostrará la siguiente ventana:

![Propiedades de reclamación](images/Claim_sensor_fields.png)

Propiedades de reclamación

En el campo name introducimos un nombre cualquiera y el campo UUID pegamos el identificador que copiamos previamente. Una vez rellenados los campos pulsamos **Guardar**. Esto encolará la configuración del Proxy. La web nos los mostrará con indicador en sus propiedades.

![Configuración y reclamación](images/Configuring_claimed.png)

Configuración y reclamación

## Autoconfiguración del sensor de proxy

Si tenemos acceso a una consola de la propia máquina, podemos observar el proceso de instalación con el journal:

``` bash title="Print the setup logs"
journalctl -u rb-register -f
```

![Logs del registro](images/journal_register.png)

Logs del registro

Al finalizar todo el proceso de de registro, el indicador del sensor actualizará su estado como **configurado** en caso positivo, o **fallido** en caso negativo:

![Proxy configurado](images/Proxy_configured.png)

Proxy configurado
