# Syslog

## Introducción

Esta documentación proporciona una guía paso a paso para comprender e integrar **syslog** dentro de la plataforma web de **Redborder**. **Syslog** es un estándar ampliamente utilizado para el registro de mensajes del sistema, que permite a los dispositivos y aplicaciones enviar logs a un servidor central. Siguiendo estas instrucciones, aprenderás a configurar y gestionar **syslog** para garantizar que los logs de varios sistemas sean capturados y procesados de manera eficiente dentro de la plataforma **Redborder**.

### Parámetros

| Parámetro          | Descripción                                |
| ------------------ | ------------------------------------------ |
| Servidor Syslog    | La dirección IP donde deseas recibir los logs |
| Puerto Syslog      | El puerto que deseas utilizar para enviar los logs |
| Protocolo Syslog   | Selecciona entre UDP y TCP para enviar los logs |

!!! warning "Importante"
    Asegúrate de que la máquina de destino esté configurada correctamente para recibir mensajes de **syslog**. Esto incluye abrir los puertos apropiados (por ejemplo, UDP 514 o TCP 514) en el firewall y habilitar los protocolos necesarios. No hacerlo impedirá que la máquina reciba los logs de **syslog**.

## Configuración de la interfaz web de Redborder para integrar Syslog

1. Navega a `Herramientas -> Integraciones`.
2. Haz clic en la tarjeta titulada **"Integración de Syslog"** (haz clic en el botón "Iniciar").
3. Rellena todos los campos requeridos.
4. Haz clic en el botón **"Actualizar"** para aplicar los cambios.

![Configuración de la interfaz web de Redborder para usar Syslog](images/syslog_step_1.png)
