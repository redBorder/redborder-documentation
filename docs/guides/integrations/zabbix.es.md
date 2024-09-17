
# Guía de Integración de Zabbix

## Introducción

Esta documentación proporciona una guía paso a paso para integrar [Zabbix](https://www.zabbix.com/manuals) con la Plataforma Web redBorder. Al seguir estas instrucciones, podrás realizar solicitudes POST a la API de Zabbix para crear y gestionar elementos dentro de Zabbix desde la plataforma redBorder. 

!!! note "Versión de la Integración"
    Esta integración funciona con la versión 6.4.14 de Zabbix.

## Ejemplo del Endpoint de la API

Aquí tienes un ejemplo del endpoint de la API para la integración:

    http://<zabbix-server-ip>/zabbix/api_jsonrpc.php

### Parámetros

| Parámetro          | Descripción                                |
| ------------------ | ------------------------------------------ |
| Zabbix Endpoint    | La dirección IP de tu instancia de Zabbix. |
| Zabbix Username    | El nombre de usuario para acceder a la API de Zabbix. |
| Zabbix Password    | La contraseña del usuario especificado.    |
| Zabbix Token       | Token usado para acceder a la API de Zabbix. |

!!! info "Ten en cuenta"
    El `Zabbix Username` y `Zabbix Password` son las credenciales usadas para entrar en la interfaz web de Zabbix.

!!! warning "Importante"
    Asegúrate de que el usuario tenga permisos adecuados y haya creado un `Zabbix Token` también con los permisos necesarios para acceder a la API de Zabbix.

## Configurar la Interfaz Web de redBorder para Usar la API de Zabbix

1. Ve a `Herramientas -> Integraciones`.
2. Haz clic en la tarjeta titulada **"Integración con la API de Zabbix"** (haz clic en el botón "Empezar").
3. Rellena todos los campos requeridos.
4. Presiona el botón **"Actualizar"** para aplicar los cambios.

![Configurar la Interfaz Web de redBorder para Usar la API de Zabbix](images/zabbix_step_1.png)


## Enriquecimiento de Assets.

Para enriquecer los assets con los datos de Zabbix, debes seguir los siguientes pasos: 

1. Una vez que tengamos los parametros de Zabbix introducidos, vamos a la seccion de 'Herramientas' -> 'Cola Tareas y Trabajadores'
2. Ahora tendremos una nueva tarea, 'Inventario de Zabbix'. Esta tarea solo se podra ver si tenemos los parámetros de Zabbix establecidos.
3. Al ejecutar esta tarea, los valores de las direcciones IP/MAC que tengamos en los objetos, se modificacran segun la información de Zabbix, es decir, si un valor de IP/MAC tiene un nombre o tipo de objeto diferente, este se modificara segun la informacion de Zabbix. 
