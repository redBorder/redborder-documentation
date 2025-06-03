# Instalación en Linux

Cómo instalar Redborder Flowgate en sistemas Linux.

Aspectos importantes a considerar antes de la instalación:

- Esta instalación es irreversible; no se puede desinstalar ni revertir directamente.
- La distribución de Linux soportada actualmente es [Rocky Linux 9 minimal](https://rockylinux.org/download).
- Este sensor debe estar registrado con un **Redborder Manager**, así que asegúrate de tener uno disponible.

## Requisitos Previos

### Máquina virtual o hardware dedicado

Los requisitos pueden variar según el volumen de tráfico que se desee analizar. A continuación se detallan los requisitos mínimos:

| **Componente**      | **Especificación**                                     |
|--------------------|-------------------------------------------------------|
| **Sistema Operativo** | Rocky Linux 9 minimal                               |
| **Memoria**         | 8 GB RAM                                              |
| **Almacenamiento**        | 40 GB de espacio en disco duro                                     |
| **CPU**            | al menos 4 núcleos de CPU o 4 vCPU                    |
| **Interfaces de Red**  | al menos 1 (interfaz de gestión), añade otra para exportación de tráfico (span port)     |

## Instalación de Paquetes

Instala el sistema operativo compatible y ejecuta el siguiente comando como root:

``` bash title="Instalación de repositorios"
yum install epel-release
rpm -ivh https://packages.redborder.com/releases/25.04/rhel/9/x86_64/redborder-repo-25.04-0.0.1-1.el9.rb.noarch.rpm
```
``` bash title="Instala el paquete redborder-proxy"
yum clean all
yum install redborder-proxy -y
```

Inicia una nueva instancia de bash para recargar las variables de entorno:

``` bash title="Recarga de Bash"
/bin/bash --login
```

## Asistente de Configuración

Inicia el **asistente de instalación**:

``` bash title="Comando para el asistente de instalación"
rbcli setup wizard
```

La primera pantalla muestra un índice de los próximos pasos.

![Iniciando el asistente](images/ch02_001.png)

Presiona **Yes** para continuar.

### Configurar Red

Este paso es opcional. Si estás seguro de que las interfaces de red ya están configuradas, puedes omitir este paso. De lo contrario, ingresa a la configuración presionando **Yes**.

![Iniciando configuración de red](images/ch02_002.png)

Selecciona la interfaz de gestión.

![Selecciona el modo de la interfaz](images/ch02_003.png)

Selecciona el modo de configuración de la interfaz (estático o DHCP)

![Configuración de la interfaz de red](images/ch02_004.png)

Si seleccionas la opción de IP estática, deberás especificar la IP, la máscara de subred y la puerta de enlace predeterminada:

![Configuración de interfaz estática](images/ch02_005.png)

### Configuración de DNS

Presiona **Yes** para comenzar la configuración de DNS.

![Iniciando configuración de DNS](images/ch02_006.png)

Puedes agregar hasta tres servidores DNS diferentes:

![Configuración de DNS](images/ch02_007.png)

Presiona **OK** para continuar.

### Configuración de la dirección en la nube

Introduce la dirección IP del **Redborder Manager**.

![Configuración con servidor remoto](images/ch02_008.png)

Presiona **OK** para continuar.

### Confirmar configuración

Presiona **Yes** para confirmar la configuración actual.

![Aceptar configuración](images/ch02_009.png)

### Aplicando configuración

Espera a que el proceso finalice.

![Aplicando configuración](images/ch02_010.png)

Presiona **OK** para salir del asistente.

## Siguiente paso?

Inicia sesión en **Redborder Manager** y reclama el nuevo sensor desde la lista de sensores no reclamados.