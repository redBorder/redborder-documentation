# Zabbix

## Integrar Zabbix con la Plataforma Web redBorder Manager

Esta documentación proporciona una guía paso a paso para integrar [Zabbix](https://www.zabbix.com/) con la Plataforma Web redBorder. Al seguir estas instrucciones, podrás realizar solicitudes POST a la API de Zabbix para crear y gestionar elementos dentro de Zabbix desde la plataforma redBorder.

## Ejemplo del Endpoint de la API

Aquí tienes un ejemplo del endpoint de la API para la integración:

```http
http://<zabbix-server>/zabbix/api_jsonrpc.php
```

### Parámetros

- `<zabbix-server>`: La dirección IP de tu instancia de Zabbix.
- `Username`: El nombre de usuario de Zabbix para poder realizar consultas a la API.
- `Password`: La contraseña del usuario especificado en `Username`.
- `Token`: Token usado para acceder a la API de Zabbix.

🚨 **Nota:** El `Username` y `Password` son las credenciales usadas para entrar en Zabbix.
- Se tiene que tener en cuenta que el usuario debe tener permisos y haber creado un `Token` también con permisos adecuados para poder obtener los datos de la API de Zabbix. 


## Configurar la Interfaz Web de redBorder para Usar la API de Zabbix

1. Ve a `Herramientas -> Integraciones`.
2. Haz click en la carta llamada **"Integración con la API de Zabbix"** (en el botón de "Empezar").
3. Rellena todos los campos.
4. Presiona el botón **"Actualizar"** para aplicar los cambios.

![Configure redBorder Web UI to Use the Zabbix API](images/zabbix_step_1.png)
