
# ¿Qué es un Proxy de Redborder?

Un **Proxy de Redborder** es una tecnología que permite la exportación de los varios datos para evitar que el procesamiento se realice el misma máquina. Es una máquina con escasa capacidad de procesamiento pero que sirve de apoyo a las máquinas principales: los managers. De esta manera, el proxy tan sólo envía los datos a los managers contra los que se registró. 

Será necesario configurar o asociar las sondas que harán de fuente de datos, con el objetivo de que el proxy los retransmita a los managers.

Las sondas se sitúan fuera de la plataforma, pero se gestionan desde ella, al igual que ocurre con las sondas asociadas al manager. Su función sigue siendo la creación de los mismos tipos de datos y capacidades de inspección.

## Escenario habitual para la instalación del proxy de Redborder

Un escenario típico propuesto por la solución consiste en un conjunto de sensores dispuestos en diferentes puntos sensibles de la red de la organización que conectarán directamente con un Proxy de Redborder. Este capturará los datos de estas sondas y los enviará a los managers para su gestión y monitorización.

Para la planificación de la instalación de un proxy, se deberá seguir teniendo en cuenta algunos aspectos fundamentales:
- **Los segmentos bypass** (interfaces específicas de red pareadas, normalmente con soporte bypass) se interpondrán en medio del tráfico a analizar.
- **Las interfaces de gestión** (en forma de bonding) para acceso remoto tanto desde equipos normales como desde el Manager.
- **Las interfaces de acceso IPMI para la gestión remota del hardware** (conexión SOL ó Serial Over Lan, iKVM y comandos IPMI como inicio, reinicio y apagado).

Para el **Proxy** es habitual contar con hardware específico, sin excesivas capacidades.  la única condición es **la existencia de una o más interfaces de red.**

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
