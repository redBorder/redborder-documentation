# Registros de Incidentes en Syslog

Redborder NDR puede configurarse para enviar información relacionada con incidentes a través de Syslog. El formato compatible es [RC5424](https://datatracker.ietf.org/doc/html/rfc5424). Si deseas configurar la integración de Syslog, consulta la sección de integración de la documentación de Redborder NDR.

## Basic Structure

```
<$PRI>$VERSION $TIMESTAMP $HOSTNAME $APP-NAME $PROCID $MSGID $STRUCTURED-DATA $MSG
```

### PRI

El valor de prioridad de Syslog, determinado por la facilidad (facility) y la severidad de Syslog. Por defecto, se configura en `LOCAL0` (16) para la facilidad y `INFORMATIONAL` (6) para la severidad.

### VERSION

La versión actual de Syslog: `1`

### TIMESTAMP

El campo TIMESTAMP es una marca de tiempo formalizada derivada de [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).

Utilizamos el formato ISO 8601, por ejemplo: `2024-12-15T01:20:46.897Z`

### HOSTNAME

El nombre de host local de la máquina Redborder NDR. Por ejemplo: `rb-w0cpi8fn1e.redborder.cluster`

### APP-NAME

Una cadena fija: `redborder-ndr`

### PROCID

Indica el ID del proceso fuente. Por ejemplo: `36081`

### MSGID

Identifica el tipo de mensaje. Actualmente, admitimos los siguientes tipos de `MSGID`:

- `incident-create`: Enviado cuando se crea un incidente.
- `incident-update`: Enviado cuando se actualizan los atributos de un incidente (por ejemplo, un cambio de descripción).
- `incident-assignment`: Enviado cuando un usuario es asignado o eliminado de un incidente.
- `incident-intrusion-event`: Enviado cada vez que se añade una detección de tipo `intrusion event` a un incidente.
- `incident-vault-event`: Enviado cada vez que se añade una detección de tipo `vault event` a un incidente.
- `incident-network-anomaly-event`: Enviado cada vez que se añade una detección de tipo `network anomaly event` a un incidente.

### STRUCTURED-DATA

Los datos estructurados proporcionan un mecanismo para expresar información en un formato bien definido, fácil de analizar e interpretar.

- incident-basic-info
- incident-details
- user-basic-info
- intrusion-event
- vault-event
- network-anomaly-event

Cada elemento de datos estructurados tiene un `SD-ID` que identifica su tipo y propósito. El `SD-ID` consiste en la concatenación de `structured_data_type@PEN`.

`PEN` (Private Enterprise Number) es una constante única registrada en IANA que representa a la organización. Redborder NDR utiliza `39483`.

Ejemplo de un `SD-ID`: `incident-basic-info@39483`

#### Structured-Data: incident-details

- **incident-id**: El ID del incidente.
- **incident-uuid**: El UUID del incidente.
- **incident-uri**: El URI del incidente.
- **incident-domain**: El dominio del incidente.
- **incident-name**: El nombre del incidente.
- **incident-priority**: La prioridad del incidente.
- **incident-source**: La fuente del primer evento que generó el incidente.
- **incident-status**: El estado del incidente.
- **incident-description**: Una descripción del incidente.
- **incident-assets**: JSON escapado que contiene los activos involucrados en el incidente.
- **incident-observables**: JSON escapado que contiene los observables del incidente.

Ejemplo:
```
[incident-details@39483 incident-id="5" incident-uuid="652f4c59-aa3e-4e44-b4a4-1c52ab622ebf" incident-uri="https://ndr.redborder.com/incidents/5" incident-domain="root" incident-name="Telegram API Interactions: Certificate Observed and IP Lookups to Suspected Domains (api.telegram.org, checkip.dyndns.org, reallyfreegeoip.org)" incident-priority="medium" incident-source="redBorder Intrusion" incident-status="New" incident-description="An incident involving multiple telemetry rules related to network requests has been detected. Rules indicate suspicious activity related to Telegram API, including certificate observations, domain ..." incident-assets="" incident-observables="[{\"mac_address\":\"00:00:00:00:00:00\"}, {\"ip\":\"10.9.17.101\"}, {\"port\":\"51184\"}, {\"ip\":\"10.9.17.1\"}, {\"port\":\"53\"}]"].
```

#### Structured-Data: incident-basic-info

Proporciona información común para todos los incidentes.

- **incident-id**: El ID del incidente.
- **incident-uuid**: El UUID del incidente.
- **incident-uri**: El URI del incidente.
- **incident-name**: El nombre del incidente.
- **incident-domain**: El dominio del incidente.
- **incident-priority**: La prioridad del incidente.

Ejemplo:
```
[incident-basic-info@39483 incident-id="4" incident-uuid="80a09435-f069-400d-8745-23fb93190f44" incident-uri="https://ndr.redborder.com/incidents/4" incident-name="Suspected Win32/Lumma Stealer Activity: Multiple Blocked Domains in DNS Lookups and TLS SNI." incident-domain="root" incident-priority="medium"]"
```
#### Structured-Data: user-basic-info

Proporciona información básica sobre un usuario involucrado en un incidente.

- **user-login**: El ID del usuario.
- **user-name**: El nombre del usuario.
- **user-email**: La dirección de correo electrónico del usuario.

Ejemplo:
```
[user-basic-info@39483 user-login="john" user-name="John Smith" user-email="johnsmith123@redborder.com"]
```

#### Structured-Data: intrusion-event

Representa la detección de un evento de intrusión relacionado con un incidente.

- **timestamp**: Marca de tiempo que indica cuándo ocurrió el evento.
- **incident-uuid**: Identificador único del incidente asociado.
- **incident-uri**: URI que proporciona detalles sobre el incidente.
- **incident-domain**: Dominio asociado con el incidente.
- **sensor-name**: Nombre del sensor que generó el evento.
- **sensor-uuid**: Identificador único del sensor que originó el evento.
- **priority**: Nivel de prioridad del evento de intrusión.
- **message**: Descripción del evento o su significado.
- **assets**: Activos detectados o involucrados en el evento.
- **observables**: Elementos observables relacionados con el evento (por ejemplo, IPs, puertos, direcciones MAC).
- **classification**: Categorización del tipo de evento de intrusión.
- **src**: Dirección IP de origen.
- **dst**: Dirección IP de destino.
- **src-port**: Número de puerto de origen.
- **dst-port**: Número de puerto de destino.
- **src-mac-address**: Dirección MAC de origen.
- **dst-mac-address**: Dirección MAC de destino.

Ejemplo:
```
[intrusion-event@39483 timestamp="2024-12-27T11:56:00.000Z" incident-uuid="201e3f61-17e0-4fd9-bf2d-fecf8e1a3a58" incident-uri="https://ndr.redborder.com/incidents/14" incident-domain="Aether Dynamics" sensor-name="rbips-s0rbg8nn" sensor-uuid="04231c06-da35-45f5-aa20-ab6658e194e8" priority="medium" message="ET INFO Suspicious GET To gate.php with no Referer" assets="" observables="[{\"mac_address\":\"08:00:27:b2:d5:aa\"}, {\"ip\":\"192.168.56.103\"}, {\"port\":\"1058\"}, {\"mac_address\":\"0a:00:27:00:00:00\"}, {\"ip\":\"141.8.224.79\"}, {\"port\":\"80\"}]" classification="Potentially Bad Traffic" src="192.168.56.103" dst="141.8.224.79" src-port="1058" dst-port="80" src-mac-address="08:00:27:b2:d5:aa" dst-mac-address="0a:00:27:00:00:00"]
```

#### Structured-Data: vault-event

La estructura `vault-event` encapsula información detallada sobre alarmas específicas configuradas en el sistema. A continuación, se describen sus componentes:

- **timestamp**: La marca de tiempo que indica cuándo ocurrió el evento original.
- **incident-uuid**: Un identificador único (UUID) para el incidente.
- **incident-uri**: Un URI que proporciona un enlace directo a los detalles del incidente.
- **incident-domain**: El dominio asociado con el incidente.
- **sensor-name**: El nombre del sensor que originó el evento.
- **sensor-uuid**: Un identificador único (UUID) del sensor que generó el evento.
- **priority**: El nivel de prioridad del evento (por ejemplo, notice, critical).
- **message**: Un mensaje descriptivo que resume el evento.
- **assets**: Cualquier activo detectado o implicado en el evento.
- **observables**: Elementos observables (por ejemplo, nombres de host, direcciones IP) identificados durante el evento.

Ejemplo:
```
[vault-event@39483 timestamp="2024-12-27T13:54:00.000Z" incident-uuid="9d661c32-442a-4455-a551-154cc4bb3c46" incident-uri="https://ndr.redborder.com/incidents/17" incident-domain="root" sensor-name="root" sensor-uuid="4803702189063327665" priority="notice" message="Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR" assets="" observables="[{\"hostname\":\"rb-a3hl3x8ocz.redborder.cluster\"}, {\"ip\":\"127.0.0.1\"}]"]
```

#### Structured-Data: network-anomaly-event

La estructura `network-anomaly-event` proporciona información detallada sobre anomalías detectadas en el tráfico de red. A continuación, se describen sus componentes:

- **timestamp**: La marca de tiempo que indica cuándo ocurrió el evento.
- **incident-uuid**: Un identificador único (UUID) para el incidente asociado.
- **incident-uri**: Un URI que enlaza con más detalles sobre el incidente.
- **incident-domain**: El dominio bajo el cual ocurrió el incidente.
- **sensor-name**: El nombre del sensor que detectó la anomalía.
- **sensor-uuid**: Un identificador único (UUID) para el sensor que detectó la anomalía.
- **priority**: El nivel de prioridad del evento (por ejemplo, high, critical).
- **message**: Un mensaje conciso que resume la anomalía.
- **assets**: Activos asociados o implicados en el evento.
- **observables**: Elementos observables (por ejemplo, direcciones IP, nombres de host) identificados en el evento.

Ejemplo:
```
[network-anomaly-event@39483 timestamp="2024-12-27T14:30:00.000Z" incident-uuid="57df203a-901a-45e0-985a-39e154403ee5" incident-uri="https://ndr.redborder.com/incidents/18" incident-domain="root" sensor-name="ISR" sensor-uuid="3135af80-fe2e-461c-aa89-0ece0a9cdfa0" priority="high" message="Network Traffic Anomalies on sensor ISR" assets="" observables="[{\"ip\":\"10.1.150.33\"}]"]
```

#### Sobre incident-assets

Este campo, incluido en algunas estructuras de datos, proporciona una lista de activos relacionados con el incidente en formato JSON.

Cada activo contiene los siguientes atributos:

- **id**: Un identificador único para el activo.
- **name**: El nombre del activo.
- **mac_address**: La dirección MAC del activo.
- **type**: El tipo de dispositivo.
- **operating_system**: El sistema operativo del activo

Ejemplo:
```
incident-assets="[{\"id\":\"1787\", \"name\":\"DataForge\", \"mac_address\":\"20:e5:2a:b6:93:f1\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 11\"}]"
```

#### Sobre incident-observables

Este campo contiene una lista de observables relacionados con el incidente, representados como objetos JSON.

Cada observable sigue una estructura "key": "value", donde la clave indica el tipo de observable y el valor proporciona su detalle correspondiente.

Tipos de observables:

- **mac_address**: Dirección MAC.
- **ip**: Dirección IP.
- **port**: Puerto.
- **hostname**: Nombre de host.
- **domain**: Dominio.
- **sha256**: Hash SHA-256.
- **file_path**: Ruta del archivo.

Ejemplo:
```
incident-observables="[{\"mac_address\":\"00:08:02:1c:47:ae\"}, {\"ip\":\"10.9.19.101\"}]"
```

### MSGID

Un resumen del mensaje del evento o de la acción llevada a cabo.

## Ejemplos

Los mensajes de syslog pueden clasificarse según el MSGID. A continuación, se presenta un ejemplo representativo de cada tipo de mensaje.

### Creación de un Incidente

Mensaje Syslog:
```
<134>1 2024-12-26T13:55:45.232Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 352517 incident-create [incident-details@39483 incident-id="6" incident-uuid="f7ce202b-8de6-46ed-a10f-82b99d239d1e" incident-uri="https://ndr.redborder.com/incidents/6" incident-domain="Aether Dynamics" incident-name="Suspected Blockchain API and Lumma Stealer CnC Domain Activity" incident-priority="high" incident-source="redBorder Intrusion" incident-status="Open" incident-description="" incident-assets="[{\"id\":\"1787\", \"name\":\"DataForge\", \"mac_address\":\"20:e5:2a:b6:93:f1\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 11\"}]" incident-observables="[{\"mac_address\":\"00:08:02:1c:47:ae\"}, {\"ip\":\"10.9.19.101\"}, {\"port\":\"61051\"}, {\"ip\":\"104.20.98.10\"}, {\"port\":\"443\"}, {\"mac_address\":\"00:00:00:00:00:00\"}, {\"port\":\"65341\"}, {\"ip\":\"10.9.19.1\"}, {\"port\":\"53\"}, {\"port\":\"64635\"}, {\"port\":\"62677\"}, {\"port\":\"54289\"}, {\"port\":\"53881\"}, {\"port\":\"56519\"}, {\"port\":\"56289\"}, {\"port\":\"53033\"}]"] New incident: 'Suspected Blockchain API and Lumma Stealer CnC Domain Activity' (Priority: high) (Domain: Aether Dynamics).
```

**$PRI**: *134*

**VERSION**: *1*

**$TIMESTAMP**: *2024-12-26T13:55:45.232Z*

**$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*

**$APP-NAME**: *redborder-ndr*

**$PROCID**: *352517*

**$MSGID**: *incident-create*

**$STRUCTURED-DATA**: *[incident-details@39483 incident-id="6" incident-uuid="f7ce202b-8de6-46ed-a10f-82b99d239d1e" incident-uri="https://ndr.redborder.com/incidents/6" incident-domain="Aether Dynamics" incident-name="Suspected Blockchain API and Lumma Stealer CnC Domain Activity" incident-priority="high" incident-source="redBorder Intrusion" incident-status="Open" incident-description="" incident-assets="[{\"id\":\"1787\", \"name\":\"DataForge\", \"mac_address\":\"20:e5:2a:b6:93:f1\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 11\"}]" incident-observables="[{\"mac_address\":\"00:08:02:1c:47:ae\"}, {\"ip\":\"10.9.19.101\"}, {\"port\":\"61051\"}, {\"ip\":\"104.20.98.10\"}, {\"port\":\"443\"}, {\"mac_address\":\"00:00:00:00:00:00\"}, {\"port\":\"65341\"}, {\"ip\":\"10.9.19.1\"}, {\"port\":\"53\"}, {\"port\":\"64635\"}, {\"port\":\"62677\"}, {\"port\":\"54289\"}, {\"port\":\"53881\"}, {\"port\":\"56519\"}, {\"port\":\"56289\"}, {\"port\":\"53033\"}]"]*

**$MSG**: *New incident: 'Suspected Blockchain API and Lumma Stealer CnC Domain Activity' (Priority: high) (Domain: Aether Dynamics).*

### Actualización de un Incidente

Mensaje Syslog:
```
<134>1 2024-12-26T15:31:30.603Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 648274 incident-update [incident-basic-info@39483 incident-id="9" incident-uuid="8c7bfb52-3619-47e0-b33c-7a3976b4ee21" incident-uri="https://ndr.redborder.com/incidents/9" incident-name="Suspected Blockchain API and Lumma Stealer CnC Domain Activity" incident-domain="Aether Dynamics" incident-priority="high"] Incident Attributes Updated: status="Incident Reported".
```

**$PRI**: *134*

**VERSION**: *1*

**$TIMESTAMP**: *2024-12-26T15:31:30.603Z*

**$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*

**$APP-NAME**: *redborder-ndr*

**$PROCID**: *648274*

**$MSGID**: *incident-update*

**$STRUCTURED-DATA**: *[incident-basic-info@39483 incident-id="9" incident-uuid="8c7bfb52-3619-47e0-b33c-7a3976b4ee21" incident-uri="https://ndr.redborder.com/incidents/9" incident-name="Suspected Blockchain API and Lumma Stealer CnC Domain Activity" incident-domain="Aether Dynamics" incident-priority="high"]*

**$MSG**: *Incident Attributes Updated: status="Incident Reported".*

### Asignación de un Incidente

Mensaje Syslog:
```
<134>1 2024-12-26T15:45:00.786Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 722435 incident-assignment [incident-basic-info@39483 incident-id="5" incident-uuid="652f4c59-aa3e-4e44-b4a4-1c52ab622ebf" incident-uri="https://ndr.redborder.com/incidents/5" incident-name="Telegram API Interactions: Certificate Observed and IP Lookups to Suspected Domains (api.telegram.org, checkip.dyndns.org, reallyfreegeoip.org)" incident-domain="root" incident-priority="medium"][user-basic-info@39483 user-login="john" user-name="John Smith" user-email="johnsmith123@redborder.com"] The user John Smith was added to the incident
```

**$PRI**: *134*

**VERSION**: *1*

**$TIMESTAMP**: *2024-12-26T15:45:00.786Z*

**$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*

**$APP-NAME**: *redborder-ndr*

**$PROCID**: *722435*

**$MSGID**: *incident-assignment*

**$STRUCTURED-DATA**: *[incident-basic-info@39483 incident-id="5" incident-uuid="652f4c59-aa3e-4e44-b4a4-1c52ab622ebf" incident-uri="https://ndr.redborder.com/incidents/5" incident-name="Telegram API Interactions: Certificate Observed and IP Lookups to Suspected Domains (api.telegram.org, checkip.dyndns.org, reallyfreegeoip.org)" incident-domain="root" incident-priority="medium"][user-basic-info@39483 user-login="john" user-name="John Smith" user-email="johnsmith123@redborder.com"]*

**$MSG**: *The user John Smith was added to the incident*

### Evento de Intrusión

Mensaje Syslog:
```
<134>1 2024-12-27T13:39:49.907Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 310052 incident-intrusion-event [intrusion-event@39483 timestamp="2024-12-27T12:31:00.000Z" incident-uuid="540f114b-41fc-4d6b-bd9d-cd0180abeaf9" incident-uri="https://ndr.redborder.com/incidents/15" incident-domain="Aether Dynamics" sensor-name="rbips-s0rbg8nn" sensor-uuid="04231c06-da35-45f5-aa20-ab6658e194e8" priority="high" message="ET EXPLOIT ETERNALBLUE Exploit M2 MS17-010" assets="[{\"id\":\"1791\", \"name\":\"IronClad-09\", \"mac_address\":\"00:25:b3:f5:fa:74\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 10\"}]" observables="[{\"ip\":\"192.168.116.149\"}, {\"port\":\"49767\"}, {\"mac_address\":\"00:00:00:00:54:01\"}, {\"ip\":\"192.168.116.143\"}, {\"port\":\"445\"}]" classification="Attempted Administrator Privilege Gain" src="192.168.116.149" dst="192.168.116.143" src-port="49767" dst-port="445" src-mac-address="00:25:b3:f5:fa:74" dst-mac-address="00:00:00:00:54:01"] New  intrusion event: 'ET EXPLOIT ETERNALBLUE Exploit M2 MS17-010' (Priority: high). Associated incident: '540f114b-41fc-4d6b-bd9d-cd0180abeaf9' (Domain: Aether Dynamics).
```

**$PRI**: *134*

**VERSION**: *1*

**$TIMESTAMP**: *2024-12-27T13:39:49.907Z*

**$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*

**$APP-NAME**: *redborder-ndr*

**$PROCID**: *310052*

**$MSGID**: *incident-intrusion-event*

**$STRUCTURED-DATA**: *[intrusion-event@39483 timestamp="2024-12-27T12:31:00.000Z" incident-uuid="540f114b-41fc-4d6b-bd9d-cd0180abeaf9" incident-uri="https://ndr.redborder.com/incidents/15" incident-domain="Aether Dynamics" sensor-name="rbips-s0rbg8nn" sensor-uuid="04231c06-da35-45f5-aa20-ab6658e194e8" priority="high" message="ET EXPLOIT ETERNALBLUE Exploit M2 MS17-010" assets="[{\"id\":\"1791\", \"name\":\"IronClad-09\", \"mac_address\":\"00:25:b3:f5:fa:74\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 10\"}]" observables="[{\"ip\":\"192.168.116.149\"}, {\"port\":\"49767\"}, {\"mac_address\":\"00:00:00:00:54:01\"}, {\"ip\":\"192.168.116.143\"}, {\"port\":\"445\"}]" classification="Attempted Administrator Privilege Gain" src="192.168.116.149" dst="192.168.116.143" src-port="49767" dst-port="445" src-mac-address="00:25:b3:f5:fa:74" dst-mac-address="00:00:00:00:54:01"]*

**$MSG**: *New  intrusion event: 'ET EXPLOIT ETERNALBLUE Exploit M2 MS17-010' (Priority: high). Associated incident: '540f114b-41fc-4d6b-bd9d-cd0180abeaf9' (Domain: Aether Dynamics).*

### Evento de Vault

Mensaje Syslog:
```
<134>1 2024-12-27T14:06:23.783Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 17506 incident-vault-event [vault-event@39483 timestamp="2024-12-27T13:54:00.000Z" incident-uuid="9d661c32-442a-4455-a551-154cc4bb3c46" incident-uri="https://ndr.redborder.com/incidents/17" incident-domain="root" sensor-name="root" sensor-uuid="4803702189063327665" priority="notice" message="Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR" assets="" observables="[{\"hostname\":\"rb-a3hl3x8ocz.redborder.cluster\"}, {\"ip\":\"127.0.0.1\"}]"] New  vault event: 'Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR' (Priority: notice). Associated incident: '9d661c32-442a-4455-a551-154cc4bb3c46' (Domain: root).
```

**$PRI**: *134*

**VERSION**: *1*

**$TIMESTAMP**: *2024-12-27T14:06:23.783Z*

**$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*

**$APP-NAME**: *redborder-ndr*

**$PROCID**: *17506*

**$MSGID**: *incident-vault-event*

**$STRUCTURED-DATA**: *[vault-event@39483 timestamp="2024-12-27T13:54:00.000Z" incident-uuid="9d661c32-442a-4455-a551-154cc4bb3c46" incident-uri="https://ndr.redborder.com/incidents/17" incident-domain="root" sensor-name="root" sensor-uuid="4803702189063327665" priority="notice" message="Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR" assets="" observables="[{\"hostname\":\"rb-a3hl3x8ocz.redborder.cluster\"}, {\"ip\":\"127.0.0.1\"}]"]*

**$MSG**: *New  vault event: 'Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR' (Priority: notice). Associated incident: '9d661c32-442a-4455-a551-154cc4bb3c46' (Domain: root).*

### Evento de Anomalía en la Red

Mensaje Syslog:
```
<134>1 2024-12-27T14:56:45.843Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 461121 incident-network-anomaly-event [network-anomaly-event@39483 timestamp="2024-12-27T14:30:00.000Z" incident-uuid="57df203a-901a-45e0-985a-39e154403ee5" incident-uri="https://ndr.redborder.com/incidents/18" incident-domain="root" sensor-name="ISR" sensor-uuid="3135af80-fe2e-461c-aa89-0ece0a9cdfa0" priority="high" message="Network Traffic Anomalies on sensor ISR" assets="" observables="[{\"ip\":\"10.1.150.33\"}]"] New  network anomaly event: 'Network Traffic Anomalies on sensor ISR' (Priority: high). Associated incident: '57df203a-901a-45e0-985a-39e154403ee5' (Domain: root).
```

**$PRI**: *134*

**VERSION**: *1*

**$TIMESTAMP**: *2024-12-27T14:56:45.843Z*

**$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*

**$APP-NAME**: *redborder-ndr*

**$PROCID**: *461121*

**$MSGID**: *incident-network-anomaly-event*

**$STRUCTURED-DATA**: *[network-anomaly-event@39483 timestamp="2024-12-27T14:30:00.000Z" incident-uuid="57df203a-901a-45e0-985a-39e154403ee5" incident-uri="https://ndr.redborder.com/incidents/18" incident-domain="root" sensor-name="ISR" sensor-uuid="3135af80-fe2e-461c-aa89-0ece0a9cdfa0" priority="high" message="Network Traffic Anomalies on sensor ISR" assets="" observables="[{\"ip\":\"10.1.150.33\"}]"]*

**$MSG**: *New  network anomaly event: 'Network Traffic Anomalies on sensor ISR' (Priority: high). Associated incident: '57df203a-901a-45e0-985a-39e154403ee5' (Domain: root).*
