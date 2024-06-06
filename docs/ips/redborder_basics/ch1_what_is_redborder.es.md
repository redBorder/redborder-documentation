
# ¿Qué es un IDS?

		<para>Un <emphasis role="bold">IDS</emphasis> (de sus siglas en inglés Intrusion Detection System) es un Sistema de Detección de Intrusiones en la red o redes a proteger en una organización.</para> 
		<para>Suele ser un software específico que se ejecuta en el espacio de usuario y que sondea el tráfico que se refleja (puerto mirror o SPAN) en una interfaz 
		del sistema o el que circula entre dos interfaces unidas en un bridge (switch por software).</para>
		<para>Dicho tráfico es analizado buscando anomalías, firmas específicas o comportamientos sospechosos.</para> 
		<para>El objetivo del IDS es <emphasis role="bold">detectar intrusiones y lanzar alertas sin interferir en el tráfico de la organización.</emphasis></para>

# What is an IPS?
<para>Un <emphasis role="bold">IPS</emphasis> es un sistema de Prevención de Intrusiones en la red o redes de la organización.</para> 
		<para>Su operativa es idéntica a la del IDS (de hecho suele ser el mismo software con un comportamiento adaptado), excepto que en este caso
		 sí interfiere en el tráfico de la organización, de manera que cuando se detecta una comunicación correspondiente a un ataque el sistema puede optar no sólo por
		  <emphasis role="bold">lanzar alertas sino incluso por descartar los paquetes de dicha comunicación, creando el mismo efecto que un cortafuegos.</emphasis></para>
		<section>

## Escenario básico para la instalación del IPS

			<para>Un escenario básico típico propuesto por la solución consiste en un conjunto de sensores dispuestos en diferentes puntos sensibles de la 
			red de la organización que conectarán con un manager o cluster de managers para su gestión y monitorización.</para>
			<para>Dichos puntos están formados por enlaces de red, llamados segmentos, por los que circulará el tráfico sensible 
			y que el sensor analizará de manera más o menos transparente, en función del modo de funcionamiento configurado (IPS/IDS).</para>
			<para>Para la planificación de la instalación de equipos sensores, se deberán tener en cuenta algunos aspectos fundamentales:</para> 
				
					<para><emphasis role="bold">Los segmentos bypass</emphasis> (interfaces específicas de red pareadas, normalmente con soporte bypass) se interpondrán en medio del tráfico a analizar.</para>
				</listitem>
				<listitem>
					<para><emphasis role="bold">Las interfaces de gestión </emphasis> (en forma de bonding) para acceso remoto tanto desde equipos normales como desde el Manager.</para>
				</listitem>
				<listitem>
					<para><emphasis role="bold">Las interfaces de acceso IPMI para la gestión remota del hardware</emphasis> (conexión SOL o Serial Over Lan, iKVM y comandos IPMI como inicio, reinicio y apagado).</para>
				</listitem>
			</itemizedlist>
			<para>Para el <emphasis role="bold">Manager,</emphasis> al no ser necesario un hardware específico, la única condición es <emphasis role="bold">la existencia de al menos, dos interfaces de red. </emphasis></para>
			<para>De esta manera se permite la creación de un bonding para la gestión y conexión con los sensores y otro bonding (opcional) para sus comunicaciones hacia otras redes. Ambos sistemas soportan el estándar 802.1q para virtual LAN (opcional a la hora de configurar).</para>
			<warning>
				<title>Advertencia</title>
				<para>Es MUY IMPORTANTE que primero se realice la configuración del Manager (o cluster de managers) antes de configurar y registrar los sensores.</para>
				<para>El Manager debe estar operativo y en una red accesible a los sensores. Algunos de los procesos de configuración de los sensores dependen del acceso al Manager. <footnote><para>El escenario de instalación del Manager redBorder es el mismo independientemente de los sensores que se instalen y registren en el mismo (IPS, Flow, Malware (beta) o Vault (beta)</para></footnote>.</para>
			</warning>

![Escenario básico para la instalación del IPS](images/ch01_img001.png)

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
