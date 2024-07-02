---
title: OTRS
---

# Integrar OTRS con la Plataforma Web redBorder manager

Esta documentación proporciona una guía paso a paso para integrar [OTRS](https://otrs.com/) con la Plataforma Web redBorder. Al seguir estas instrucciones, podrás crear un [Servicio Web](https://academy.otrs.com/doc/admin/processes-automation/web-services/) en OTRS, lo que te permitirá realizar solicitudes POST para crear tickets.

## Ejemplo del Endpoint de la API

Aquí tienes un ejemplo del endpoint de la API que crearás:

```http title="Create Ticket API Endpoint"
http://<maquina-virtual-ip>/otrs/nph-genericinterface.pl/Webservice/redborder/CreateTicket?UserLogin=root@localhost&Password=redborder
```

### Parámetros

- `<url>`: La URL base de tu instancia de OTRS. Por ejemplo, `http://<maquina-virtual-ip>` en un entorno de desarrollo, o `https://example.com` en un entorno de producción.
- `UserLogin`: El nombre de usuario del usuario que realizará la solicitud. En este ejemplo, es `root@localhost`.
- `Password`: La contraseña del usuario especificado en `UserLogin`.

### Parámetros Configurables

- `<web-service>`: El nombre del servicio web que crearás, como `redborder`.
- `<route-mapping>`: El mapeo de ruta para la solicitud, que será para la creación de tickets.

La estructura general del endpoint de la API con parámetros es la siguiente:

```http title="API de la creación de tickets visto con parámetros"
<url>/otrs/nph-genericinterface.pl/Webservice/<web-service>/<route-mapping>t?UserLogin=<username>&Password=<password>
```

## Pasos para Crear un Servicio Web en OTRS

Sigue estos pasos para crear un servicio web en OTRS:

!!! note

    Ten en cuenta que necesitas un rol de administrador para configurar un Servicio Web.

### Inicia sesión como usuario `admin` y ve al Panel de Administración.

- Inicia sesión en tu portal web de OTRS con una cuenta de administrador.
- Navega al Panel de Administración.

![Admin panel](images/otrs_step_1.png)

### Acceder a Servicios Web

- Desplázate hacia abajo hasta la tarjeta de **Servicios Web** (Web Services en inglés) y haz **clic** en ella.

![Web Service card](images/otrs_step_2.png)

### Añadir Nuevo Servicio Web

- Haz clic en el botón **"Añadir Servicio Web"** (Add Web Service en inglés).

![Add Web Service Button](images/otrs_step_3.png)

### Nombrar el Servicio Web

- En el panel General, introduce el nombre del servicio web, como por ejemplo `redborder`.

![Set redborder as Name in General Panel](images/otrs_step_4.png)

### Configurar la Operación de Creación de Tickets

- Añade la operación `Ticket::TicketCreate` en la sección **"OTRS as provider"**.

![Set Ticket::TicketCreate Operation in the OTRS as provider panel](images/otrs_step_5.png)

### Establecer Detalles de la Operación

- Establece el **Nombre** de la operación, por ejemplo, `Create a Ticket` (en inglés).

![Set a name for the Create Ticket Operation](images/otrs_step_6.png)

### Configurar el Transporte de Red

- Establece `HTTP::REST` como el Transporte de Red y haz clic en **"Configure"** (en inglés).

![Set HTTP::REST as Network Transport and click to configure](images/otrs_step_7.png)

### Definir el Mapeo de Ruta

- Establece el **Route Mapping for Operation** a `/CreateTicket`, **Maximum message length** a `100000` and **Send Keep-Alive** a `No` (en inglés).

![set HTTP::REST as Network Transport and click to configure](images/otrs_step_8.png)

### Guardar el Servicio Web

- Haz clic en **"Save and finish"** para finalizar y generar el servicio web.

![set HTTP::REST as Network Transport and click to configure](images/otrs_step_9.png)

## Configurar la Interfaz Web de redBorder para Usar la API de OTRS

1. Ve a `Tools -> General Settings` (en inglés).
2. Desplázate hacia abajo hasta el  **"OTRS API Panel"**.
3. Introduce el endpoint creado en **Creación de tickets OTRS API endpoint**.
4. Presiona el botón **"Update"** (en inglés) para aplicar los cambios.

![Configure redBorder Web UI to Use the OTRS API](images/otrs_step_10.png)

```http title="Ejemplo del endpoint creado"
http://<maquina-virtual-ip>/otrs/nph-genericinterface.pl/Webservice/redborder/CreateTicket?UserLogin=root@localhost&Password=redborder
```
