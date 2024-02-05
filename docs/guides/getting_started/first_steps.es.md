
# Primeros pasos

redBorder es una solución de Big Data de visibilidad de red, análisis de datos y ciberseguridad de código abierto que es escalable según las necesidades de las redes empresariales y los proveedores de servicios.

## Requisitos

La implementación exitosa de redBorder requiere una máquina con el sistema operativo **Rocky Linux 9** instalado. Los requisitos de hardware de la máquina deben ser como mínimo:

=== "Manager"

    * Disco: 80 GB
    * RAM: 16 GB
    * Interfaz de red: Al menos una

=== "Proxy"

    * Disco: 30 GB
    * RAM: 4 GB
    * Interfaz de red: Al menos una

=== "IPS"

    * Disco: 30 GB
    * RAM: 4 GB
    * Interfaces de red: Al menos dos

## Instalación

### Yum repo { #install-repo data-toc-label="Yum repo" }

Paquetes oficiales más recientes de redBorder para Rocky Linux 9 disponibles en [repo.redborder.com](https://repo.redborder.com)

=== "Latest"

    ``` sh
    yum install epel-release && rpm -ivh https://repo.redborder.com/ng/latest/rhel/9/x86_64/redborder-repo-1.0.0-1.el9.rb.noarch.rpm
    ```

### redBorder package { #install-package data-toc-label="redBorder package" }

El sistema de redBorder está compuesto por el sistema principal de gestión y visualización de información, **redBorder Manager**, junto con **redBorder proxy**, una solución para exportar tráfico de red, y **redBorder ips**, un sensor para la detección de amenazas.

=== "Manager"

    ``` sh
    yum install redborder-manager
    ```

=== "Proxy"

    ``` sh
    yum install redborder-proxy
    ```

=== "IPS"

    ``` sh
    yum install redborder-ips
    ```

## Configuración

Para completar la configuración inicial ejecuta el wizard y sigue sus pasos.

    rb_setup_wizard

## Listo

**¡Listo para Empezar!**

Has completado los pasos iniciales con éxito. Ahora, solo queda esperar mientras el sistema finaliza la configuración. Si has seguido cada paso cuidadosamente, estás en camino de aprovechar al máximo las capacidades de redBorder. ¡Gracias por elegir redBorder para tus necesidades de gestión y seguridad de red! Si tienes alguna pregunta o necesitas asistencia, no dudes en consultar la documentación o contactar con nuestro equipo de soporte. ¡Bienvenido a redBorder!
