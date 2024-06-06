
# ¿Qué es un IDS?

An IDS is an Intrusion Detection System in the network(s) to protect an organization. It tends to be a specific software that runs in the user space and that inspects the traffic reflected (Mirror/ SPAN port) in a system interface or circulates between two interfaces joined by a bridge (software switch). The said traffic is analyzed by searching for anomalies, specific signatures or suspicious behavior. 
The objective of the IDS is to detect intrusions and issue alerts without interfering with the organization's traffic.

# What is an IPS?
An IPS is an Intrusion Prevention System in the organization's network(s). Its operation is identical to that of the IDS (in fact it is usually the same software with an adapted behavior), except in this case it does interfere with the organization's traffic, such that when a communication related to a system attack is detected, you can choose not only to launch alerts but also to discard the said communication's packets, creating the same effect as a firewall.

## Escenario básico para la instalación del IPS

A typical basic scenario proposed for the solution consists of a group of sensors arranged at different sensitive points in the organization's network that will connect to a Manager or cluster of Managers to be managed and monitored.
The said points consist of network links, called segments, through which the sensitive traffic will circulate and which the sensor will analyze more or less transparently, according to the operating mode configured (IPS/IDS).
Some fundamental aspects should be kept in mind in planning the installation of sensor equipment:
The bypass segments (specific paired network interfaces, normally with bypass support) will be inserted in the middle of the traffic to be analyzed.
				
The management interfaces </emphasis> (bonding) for remote access both from normal machines and from the Manager.
IPMIs for the remote management of the hardware (Serial Over Lan (SOL) connection, iKVM IPMI commands such as start, restart, and turn off).
For the Manager, since specific hardware is not necessary, the only condition is the presence of at least two network interfaces. 
This allows for, a bonding for the management and connection of sensors and another bonding (optional) for communications to other networks. Both systems support the 802.1q standard for virtual LAN (opctional when configuring).
IT IS VERY IMPORTANT that the configuration of the Manager (or cluster of Managers) be performed first before configuring and registering the sensors. The Mangaer must be operational and in a network accesible to the sensors. Some of the sensor configuration processes depend on access to the Manager. The installation scenario for the redborder Manager is the same independently of the sensors being installed and registered (IPS, Flow, Malware (beta) or Vault (beta)).

![Escenario básico para la instalación del IPS](images/ch01_img001.png)

Escenario básico para la instalación del Manager
Basic scenario for the installation of the Manager

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
