# Syslog Incident Logs

Redborder NDR can be configured to send incident-related information via Syslog. The supported format is [RC5424](https://datatracker.ietf.org/doc/html/rfc5424). If you'd like to configure the Syslog integration, please refer to the integration section of the Redborder NDR documentation.

## Basic Structure

```
<$PRI>$VERSION $TIMESTAMP $HOSTNAME $APP-NAME $PROCID $MSGID $STRUCTURED-DATA $MSG
```

### PRI

The Syslog priority value, determined by the Syslog facility and severity. By default, it is set to `LOCAL0` (16) for the facility and `INFORMATIONAL` (6) for the severity.

### VERSION

The current version of Syslog: `1`

### TIMESTAMP

The TIMESTAMP field is a formalized timestamp derived from [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).

We use the ISO 8601 format, e.g.,`2024-12-15T01:20:46.897Z`

### HOSTNAME

The local hostname of the Redborder NDR machine. For example: `rb-w0cpi8fn1e.redborder.cluster`

### APP-NAME

A fixed string: `redborder-ndr`

### PROCID

Indicates the source process ID. For example: `36081`

### MSGID

Identifies the type of message. Currently, we support the following `MSGID` types:

- `incident-create`: Sent when an incident is created.
- `incident-update`: Sent when an incident's attributes are updated (e.g., a description change).
- `incident-assignment`: Sent when a user is assigned to or removed from an incident.
- `incident-intrusion-event`: Sent whenever a detection of type `intrusion event` is added to an incident.
- `incident-vault-event`:  Sent whenever a detection of type `vault event` is added to an incident.
- `incident-network-anomaly-event`: Sent whenever a detection of type `network anomaly event` is added to an incident.

### STRUCTURED-DATA

Structured data provides a mechanism for expressing information in a well-defined, easily parseable, and interpretable format.

- incident-basic-info
- incident-details
- user-basic-info
- intrusion-event
- vault-event
- network-anomaly-event

Each structured data element has an `SD-ID` that identifies its type and purpose. The `SD-ID` consists of the concatenation of `structured_data_type@PEN`.

`PEN` (Private Enterprise Number) is a unique constant registered with IANA that represents the organization. Redborder NDR uses `39483`.

Example of an `SD-ID`: `incident-basic-info@39483`

#### Structured-Data: incident-details

- **incident-id**: The ID of the incident.
- **incident-uuid**: The UUID of the incident.
- **incident-uri**: The URI of the incident.
- **incident-domain**: The domain of the incident.
- **incident-name**: The name of the incident.
- **incident-priority**: The priority of the incident.
- **incident-source**: The source of the first event that generated the incident.
- **incident-status**: The status of the incident.
- **incident-description**: A description of the incident.
- **incident-assets**: Escaped JSON containing the assets involved in the incident.
- **incident-observables**: Escaped JSON containing the observables of the incident.

Example:
```
[incident-details@39483 incident-id="5" incident-uuid="652f4c59-aa3e-4e44-b4a4-1c52ab622ebf" incident-uri="https://ndr.redborder.com/incidents/5" incident-domain="root" incident-name="Telegram API Interactions: Certificate Observed and IP Lookups to Suspected Domains (api.telegram.org, checkip.dyndns.org, reallyfreegeoip.org)" incident-priority="medium" incident-source="redBorder Intrusion" incident-status="New" incident-description="An incident involving multiple telemetry rules related to network requests has been detected. Rules indicate suspicious activity related to Telegram API, including certificate observations, domain ..." incident-assets="" incident-observables="[{\"mac_address\":\"00:00:00:00:00:00\"}, {\"ip\":\"10.9.17.101\"}, {\"port\":\"51184\"}, {\"ip\":\"10.9.17.1\"}, {\"port\":\"53\"}]"].
```

#### Structured-Data: incident-basic-info

Provides common information for all incidents.

- **incident-id**: The ID of the incident.
- **incident-uuid**: The UUID of the incident.
- **incident-uri**: The URI of the incident.
- **incident-name**: The name of the incident.
- **incident-domain**: The domain of the incident.
- **incident-priority**: The priority of the incident.

Example:
```
[incident-basic-info@39483 incident-id="4" incident-uuid="80a09435-f069-400d-8745-23fb93190f44" incident-uri="https://ndr.redborder.com/incidents/4" incident-name="Suspected Win32/Lumma Stealer Activity: Multiple Blocked Domains in DNS Lookups and TLS SNI." incident-domain="root" incident-priority="medium"]"
```
#### Structured-Data: user-basic-info

Provides basic information about a user involved in an incident.

- **user-login**: The ID of the user.
- **user-name**: The name of the user.
- **user-email**: The email address of the user.

Example:
```
[user-basic-info@39483 user-login="john" user-name="John Smith" user-email="johnsmith123@redborder.com"]
```

#### Structured-Data: intrusion-event

Represents the detection of an intrusion event related to an incident.

- **timestamp**: Timestamp indicating when the event occurred.
- **incident-uuid**: Unique identifier of the associated incident.
- **incident-uri**: URI providing details about the incident.
- **incident-domain**: Domain associated with the incident.
- **sensor-name**: Name of the sensor that generated the event.
- **sensor-uuid**: Unique identifier of the sensor that originated the event.
- **priority**: Priority level of the intrusion event.
- **message**: Description of the event or its significance.
- **assets**: Assets detected or involved in the event.
- **observables**: Observable elements related to the event (e.g., IPs, ports, MAC addresses).
- **classification**: Categorization of the intrusion event type.
- **src**: Source IP address.
- **dst**: Destination IP address.
- **src-port**: Source port number.
- **dst-port**: Destination port number.
- **src-mac-address**: Source MAC address.
- **dst-mac-address**: Destination MAC address.

Example:
```
[intrusion-event@39483 timestamp="2024-12-27T11:56:00.000Z" incident-uuid="201e3f61-17e0-4fd9-bf2d-fecf8e1a3a58" incident-uri="https://ndr.redborder.com/incidents/14" incident-domain="Aether Dynamics" sensor-name="rbips-s0rbg8nn" sensor-uuid="04231c06-da35-45f5-aa20-ab6658e194e8" priority="medium" message="ET INFO Suspicious GET To gate.php with no Referer" assets="" observables="[{\"mac_address\":\"08:00:27:b2:d5:aa\"}, {\"ip\":\"192.168.56.103\"}, {\"port\":\"1058\"}, {\"mac_address\":\"0a:00:27:00:00:00\"}, {\"ip\":\"141.8.224.79\"}, {\"port\":\"80\"}]" classification="Potentially Bad Traffic" src="192.168.56.103" dst="141.8.224.79" src-port="1058" dst-port="80" src-mac-address="08:00:27:b2:d5:aa" dst-mac-address="0a:00:27:00:00:00"]
```

#### Structured-Data: vault-event

The `vault-event` structure encapsulates detailed information about specific alarmas configured within the system. Below is the breakdown of its components:

- **timestamp**: The timestamp marking when the original event occurred.
- **incident-uuid**: A unique identifier (UUID) for the incident.
- **incident-uri**: A URI providing a direct link to the incident's details.
- **incident-domain**: The domain associated with the incident.
- **sensor-name**: The name of the sensor that originated the event.
- **sensor-uuid**: A unique identifier (UUID) of the originating sensor.
- **priority**: The priority level of the event (e.g., notice, critical).
- **message**: A descriptive message summarizing the event.
- **assets**: Any assets detected or implicated in the event.
- **observables**: Observables (e.g., hostnames, IP addresses) identified during the event.

Example:
```
[vault-event@39483 timestamp="2024-12-27T13:54:00.000Z" incident-uuid="9d661c32-442a-4455-a551-154cc4bb3c46" incident-uri="https://ndr.redborder.com/incidents/17" incident-domain="root" sensor-name="root" sensor-uuid="4803702189063327665" priority="notice" message="Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR" assets="" observables="[{\"hostname\":\"rb-a3hl3x8ocz.redborder.cluster\"}, {\"ip\":\"127.0.0.1\"}]"]
```

#### Structured-Data: network-anomaly-event

The `network-anomaly-event` structure provides detailed information about detected anomalies in network traffic. Below is a description of its components:

- **timestamp**: The timestamp indicating when the event occurred.
- **incident-uuid**: A unique identifier (UUID) for the associated incident.
- **incident-uri**: A URI that links to more details about the incident.
- **incident-domain**: The domain under which the incident occurred.
- **sensor-name**: The name of the sensor that detected the anomaly.
- **sensor-uuid**: A unique identifier (UUID) for the sensor that detected the anomaly.
- **priority**: The priority level of the event (e.g., high, critical).
- **message**: A concise message summarizing the anomaly.
- **assets**: Assets associated with or implicated in the event.
- **observables**: Observables (e.g., IP addresses, hostnames) identified in the event.

Example:
```
[network-anomaly-event@39483 timestamp="2024-12-27T14:30:00.000Z" incident-uuid="57df203a-901a-45e0-985a-39e154403ee5" incident-uri="https://ndr.redborder.com/incidents/18" incident-domain="root" sensor-name="ISR" sensor-uuid="3135af80-fe2e-461c-aa89-0ece0a9cdfa0" priority="high" message="Network Traffic Anomalies on sensor ISR" assets="" observables="[{\"ip\":\"10.1.150.33\"}]"]
```

#### About incident-assets

This field, included in some data structures, provides a list of assets related to the incident in JSON format.

Each asset contains the following attributes:

- **id**: A unique identifier for the asset.
- **name**: The name of the asset.
- **mac_address**: The MAC address of the asset.
- **type**: The type of device.
- **operating_system**: The operating system of the asset.

Example:
```
incident-assets="[{\"id\":\"1787\", \"name\":\"DataForge\", \"mac_address\":\"20:e5:2a:b6:93:f1\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 11\"}]"
```

#### About incident-observables

This field contains a list of observables related to the incident, represented as JSON objects.

Each observable follows a "key": "value" structure, where the key indicates the type of observable and the value provides its corresponding detail.

Type of observables:

- **mac_address**: MAC Address.
- **ip**: Ip Address.
- **port**: Port.
- **hostname**: Hostname.
- **domain**: Domain.
- **sha256**: SHA-256 hash.
- **file_path**: File path.

Example:
```
incident-observables="[{\"mac_address\":\"00:08:02:1c:47:ae\"}, {\"ip\":\"10.9.19.101\"}]"
```

### MSGID

A summary of the message from the event or the action carried out.

## Examples

Syslog messages can be classified based on the MSGID. Below is a representative example of each type of message.

### Incident Create

Syslog Message:
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

### Incident Update

Syslog Message:
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

### Incident Assignment

Syslog Message:
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

### Incident Intrusion Event

Syslog Message:
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

### Incident vault Event

Syslog Message:
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

### Incident Network Anomaly Event

Syslog Message:
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
