# Definición
## ¿Qué es un IPS?

Un **IPS** (de sus siglas en inglés Intrusion Prevention System) es un Sistema de Prevención de Intrusiones en la red o redes a proteger en una organización. Suele ser un harware específico que se interpone en la topología de red para así bloquear y proteger frente las intrusiones. Se hace en base a realizar un análisis del tráfico buscando anomalías, firmas específicas o comportamientos sospechosos. Para cada tipo de intrusión detectada, el sistema podrá decidir si la intrusión debe ser ignorada como tal, registrada en los logs, se debe disparar una alerta para avisar al equipo de respuesta ante incidente, o directamente se debe bloquear esa intrusión.
	
En definitiva, el objetivo del IPS es **bloquear** aquellos paquetes de tráfico que se consideren **intrusiones**.

## Comparativa frente al IDS

- El objetivo del IDS es **detectar intrusiones** y lanzar alertas sin interferir en el tráfico de la organización. Lo que significa que nunca bloqueará ningún paquete, al contrario que un IPS.
- Por otro lado el IDS permite una configuración paralela a la topología, de manera que es opcional su interposición. De esta forma, sondea el tráfico que se refleja de un puerto espejo (mirror port o SPAN) en una interfaz del sistema; o el que circula entre dos interfaces unidas en un bridge (switch por software).
- Al igual que el IPS, el IDS dispone de las mismas acciones de ignorar dicha intrusión, registrarla en logs del incidente o disparar un alerta. Sin embargo, no es capaz de bloquear tráfico.

# ¿Qué es Redborder IPS?

El IPS de RedBorder puede actuar tanto como IPS como IDS, todo depende del modo de operación y cómo se adapte en la topología de red. Para abreviar, en Redborder lo llamamos simplemente IPS.

## Escenario básico para la instalación del IPS

Un escenario básico típico propuesto por la solución consiste en un conjunto de sensores dispuestos en diferentes puntos sensibles de la red de la organización que conectarán con un manager o cluster de managers para su gestión y monitorización. Dichos puntos están formados por enlaces de red, llamados segmentos, por los que circulará el tráfico sensible y que el sensor analizará de manera más o menos transparente, en función del modo de funcionamiento configurado (IPS/IDS). Para la planificación de la instalación de equipos sensores, se deberán tener en cuenta algunos aspectos fundamentales:

* Los segmentos bypass (interfaces específicas de red pareadas, normalmente con soporte bypass) se interpondrán en medio del tráfico a analizar.
* Las interfaces de gestión (en forma de bonding) para acceso remoto tanto desde equipos normales como desde el Manager.
* Las interfaces de acceso IPMI para la gestión remota del hardware (conexión SOL o Serial Over Lan, iKVM y comandos IPMI como inicio, reinicio y apagado).
Para el **Manager**, al no ser necesario un hardware específico, la única condición es la existencia de al menos, dos interfaces de red.
* De esta manera se permite la creación de un bonding para la gestión y conexión con los sensores y otro bonding (opcional) para sus comunicaciones hacia otras redes. Ambos sistemas soportan el estándar 802.1q para virtual LAN (opcional a la hora de configurar).
	
!!! warning "Si no ha instalado el manager..."
	Es importante haber relizado la configuración del Manager (o cluster de managers) antes de configurar y registrar el primer sensor IPS. El Manager debe estar operativo y en una red accesible a los sensores. Algunos de los procesos de configuración de los sensores dependen del acceso al Manager. El escenario de instalación del Manager redBorder es el mismo independientemente de los sensores que se instalen y registren en el mismo IPS, Flow, Malware (WIP) o Vault

![Escenario básico para la instalación del IPS](../../manager/redborder_basics/images/ch01_img001.png)

Escenario básico para la instalación del IPS

## Estructura de la interfaz de usuario del asistente de instalación

![Pantalla inicial del asistente de instalación](../../manager/redborder_basics/images/ch01_img002.png)

Pantalla inicial del asistente de instalación

### Selección de opciones

Navegar por nuestro asistente de instalación es muy sencillo:

* Moverse entre las opciones disponibles: pulsa las **flechas del teclado**
* Marcar una casilla: pulsa la tecla de **espacio**.
* Seleccionar una opción: pulsa la tecla de **enter**.
