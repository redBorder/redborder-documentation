# Instalación del Proxy con redborder Live Registration

## Requisitos

El proxy cliente de Redborder es un software que tiene requisitos mínimos para funcionar correctamente. Los elementos esenciales mínimos requeridos para la instalación, así como los recomendados para un rendimiento adecuado, se muestran en la siguiente tabla:

**Requisitos para la instalación**
=== "Mínimos"
    * Disco: 16 GB
    * RAM: 1 GB
    * CPU: 1 núcleo
    * Interfaces de red: Al menos dos

=== "Recomendados"
    * Disco: 32 GB
    * RAM: 8 GB
    * CPU: 4 núcleo
    * Interfaces de red: Al menos dos

## Proceso de instalación

El primer paso para comenzar a monitorear su red con RedBorder es obtener los últimos paquetes oficiales de RedBorder para Rocky Linux 9, disponibles en [repo.redborder.com](https://repo.redborder.com).

## Installing the RPM

``` bash title="Latest"
dnf install epel-release -y && rpm -ivh https://repo.redborder.com/ng/latest/rhel/9/x86_64/redborder-repo-latest-1.0.0-1.el9.rb.noarch.rpm
```

``` bash title="Proxy"
dnf install redborder-proxy -y
```

With the packages downloaded and installed, the next step is to configure RedBorder. To do this, log out of the console session and log back in. You can use a basic command for this:

``` bash title="Relogin"
/bin/bash --login
```

This will update the paths to the scripts, allowing us to execute the setup command:

``` bash title="Launch setup wizard"
rb_setup_wizard
```

This command will start the **installation wizard** of the platform in the console to guide you through the entire process.

## Basic Configuration