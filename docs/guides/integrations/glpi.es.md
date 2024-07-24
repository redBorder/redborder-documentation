# GLPI

## Integrar GLPI con la Plataforma Web redBorder Manager

Esta documentación proporciona una guía paso a paso para integrar [GLPI](https://glpi-project.org/) con la Plataforma Web redBorder. Al seguir estas instrucciones, podrás realizar solicitudes POST a la API de GLPI para crear y gestionar elementos dentro de GLPI desde la plataforma redBorder.

## Ejemplo del Endpoint de la API

Aquí tienes un ejemplo del endpoint de la API para la integración:

```http
http://glpi-api-example/glpi/apirest.php/
```

### Parámetros

| Parámetro          | Descripción                                |
| ------------------ | ------------------------------------------ |
| GLPI Endpoint      | La dirección IP de tu instancia de GLPI.   |
| GLPI API Token      | El API Token necesario para autenticarse con la API de GLPI. |
| GLPI APP Token         | Token used to make queries to the GLPI API. |

!!! info "Nota"
    El `API Token` es la credencial utilizada para poder autenticarse con la 

!!! warning "Importante"
    Asegúrate de que el usuario tenga los permisos apropiados y también haya creado un `APP Token` con los permisos necesarios para acceder a la API de GLPI.



## Configurar la Interfaz Web de redBorder para Usar la API de GLPI

1. Ve a `Herramientas -> Integraciones`.
2. Haz click en la carta llamada **"Integración con la API de GLPI"** (en el botón de "Empezar").
3. Rellena todos los campos.
4. Presiona el botón **"Actualizar"** para aplicar los cambios.

![Configure redBorder Web UI to Use the GLPI API](images/glpi_step_1.png)

## Enriquecimiento de Activos

Para enriquecer los activos con datos de GLPI, sigue estos pasos:

1. Una vez que los parámetros de GLPI estén ingresados, ve a la sección `Herramientas -> Cola de Trabajos y Trabajadores`.
2. Una nueva tarea, **"Inventario GLPI"**, estará disponible. Esta tarea solo será visible si se han configurado los parámetros de GLPI.
3. Al ejecutar esta tarea, los valores de las direcciones MAC en los objetos serán modificados de acuerdo con la información de GLPI. Es decir, si un valor de MAC tiene un nombre o tipo de objeto diferente, será actualizado en función de la información de GLPI.

![Configure redBorder Web UI to Use the GLPI API](images/glpi_step_2.png)