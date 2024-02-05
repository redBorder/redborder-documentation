
# ¿Qué es RedBorder?

**Redborder** es la última plataforma abierta, activa y escalable de Ciberseguridad y Análisis en tiempo real de Tráfico de Red (NTA). Se basa en la tecnología Big Data para empresas y proveedores de servicios.

Su capacidad para ingerir, analizar y reportar grandes cantidades de datos se ha desarrollado y probado en entornos de muy alta demanda, así como el Análisis de Tráfico de Red, la Ciberseguridad o el análisis e informe de conexiones a través de redes inalámbricas en distintos lugares.

La plataforma unifica las diferentes fuentes de datos proporcionadas por las aplicaciones y las sondas. Además, incluye una serie de características comunes: paneles e informes personalizables, correlación, motores de análisis, gestión de usuarios y almacenamiento en capas.

Las aplicaciones se encuentran dentro de la plataforma y se pueden instalar como si fueran complementos. Estos se centran en digerir nuevos tipos de datos.

Las sondas se sitúan fuera de la plataforma, pero se gestionan desde ella y su función es la creación de nuevos tipos de datos y capacidades de inspección.

Dependiendo de las aplicaciones integradas en la plataforma, el usuario verá una u otras opciones en la barra de menú. Las aplicaciones que están disponibles en esta nueva versión de Redborder son las siguientes:

- Business Intelligence
- Malware
- Tráfico
- Intrusión
- Monitor
- Vault
- Movilidad
- Informes

Además, ahora redborder incluye un **sistema de detección de anomalías potenciado por inteligencia artificial**, que estará constantemente aprendiendo sobre las tendencias y el comportamiento normal de los datos en las diferentes aplicaciones de la plataforma.

## Escenario básico para la instalación de Redborder

Un escenario básico típico propuesto por la solución consiste en un conjunto de sensores dispuestos en diferentes puntos sensibles de la red de la organización que conectarán con un Manager o clúster de managers para su gestión y monitorización.

Dichos puntos están formados por enlaces de red, llamados segmentos, por los que circulará el tráfico sensible y que el sensor analizará de manera más o menos transparente, en función del modo de funcionamiento configurado (IPS/IDS o Flow).

Para la planificación de la instalación de los sensores, se deberán tener en cuenta algunos aspectos fundamentales:

- **Los segmentos bypass** (interfaces específicas de red pareadas, normalmente con soporte bypass) se interpondrán en medio del tráfico a analizar.
- **Las interfaces de gestión** (en forma de bonding) para acceso remoto tanto desde equipos normales como desde el Manager.
- **Las interfaces de acceso IPMI para la gestión remota del hardware** (conexión SOL ó Serial Over Lan, iKVM y comandos IPMI como inicio, reinicio y apagado).

Para el **Manager** no es necesario un hardware específico, la única condición es **la existencia de una o más interfaces de red.**

!!! info "Ten en cuenta..."

    En caso de que se haya creado un **clúster** son necesarias dos interfaces de red: una para la red de gestión (Management IP Address) y otra para la red de sincronismo (Sync IP address).

De esta manera se permite la creación de un bonding para la gestión y conexión con los sensores y otro bonding (opcional) para sus comunicaciones hacia otras redes. Ambos sistemas soportan el estándar 802.1q para virtual LAN (opcional a la hora de configurar).

!!! warning "Importante"

    Es **importante** que primero se realice la configuración del Manager (o clúster de managers) antes de configurar los sensores.
    
    El Manager debe estar operativo y en una red accesible a los sensores. Algunos de los procesos de configuración de los sensores dependen del acceso al Manager.

![Escenario básico para la instalación del Manager](images/ch01_img001.png)

Escenario básico para la instalación del Manager

## Estructura de la interfaz de usuario del asistente de instalación

Para nuestra nueva versión de redborder NG hemos renovado por completo el asistente de instalación. Ahora contamos con un asistente más intuitivo y sencillo de utilizar, además de configuraciones nuevas para las nuevas adiciones a la plataforma.

![Pantalla inicial del asistente de instalación](images/ch01_img002.png)

Pantalla inicial del asistente de instalación

!!! info "Ten en cuenta..."
    De momento, solo está disponible el asistente de instalación en el **idioma inglés**

### Selección de opciones

Navegar por nuestro nuevo asistente de instalación es muy sencillo:

- Moverse entre las opciones disponibles: pulsa las **flechas del teclado**
- Marcar una casilla: pulsa la tecla de **espacio**.
- Seleccionar una opción: pulsa la tecla de **enter**.
