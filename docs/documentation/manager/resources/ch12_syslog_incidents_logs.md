# Syslog  Incidents Logs

Redborder NDR can be configured to send incidents related issues via Syslog. The supported format is [RC5424](https://datatracker.ietf.org/doc/html/rfc5424). If tou'd like to configure the Syslog integration, please check integration section of the Redborder NDR documentation.

## Basic Structure

```
<$PRI>$VERSION $TIMESTAMP $HOSTNAME $APP-NAME $PROCID $MSGID $STRUCTURED-DATA $MSG
```

### PRI

Syslog priority value, depending on the Syslog facility and severity. By default is set to `LOCAL0` (16) facility and `INFORMATIONAL` (6) severity.

### VERSION

Syslog current version: `1`

### TIMESTAMP

The TIMESTAMP field is a formalized timestamp derived from [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).

We use ISO 8601 format, for example: `2024-12-15T01:20:46.897Z`

### HOSTNAME

Local hostname of the Redborder NDR machine. For example: `rb-w0cpi8fn1e.redborder.cluster`

### APP-NAME

Fixed string `redborder-ndr`

### PROCID

Indicate source process ID. For example: `36081`

### MSGID

Identify the type of message. At this moment we have three types of MSGID:

- `incident-create`: A message for every incident creation.
- `incident-update`: Messages about incident attributes update (for example the incident description change).
- `incident-assignment`: A message when an user is assign or remove from an incident.
- `incident-intrusion-event`: A message is sent everytime a detection of type `intrusion event` is added to an existing incident.
- `incident-vault-event`: A message is sent everytime a detection of type `vault event` is added to an existing incident.
- `incident-network-anomaly-event`: A message is sent everytime a detection of type `network anomaly event` is added to an existing incident.

### STRUCTURED-DATA

Provides a mechanism to express information in a well defined, easily parseable and interpretable data format.
Redborder NDR has the following types of structure datas:

1. incident-basic-info
2. incident-details
3. user-basic-info
3. intrusion-event
4. vault-event
5. network-anomaly-event


Every structured data elements has SD-ID. The SD-ID identify the type and purpose each structured data. It consist in the concatenation of the `structured_data_type@PEN`.

PEN (private enterprise number) is an unique constant registered in IANA that represent the organization, Redborder NDR uses `39483`.

Example of SD-ID: *incident-basic-info@39483* 

#### incident-details

- **incident-id**: id of the incident
- **incident-uuid**: uuid of the incident
- **incident-uri**: URI of the incident
- **incident-domain**: domain of the incident
- **incident-name**: name of the incident
- **incident-priority**: priority of the incident
- **incident-source**: original source of the first event that generate the incident
- **incident-status**: status of the incident
- **incident-description**: a description of the incident
- **incident-assets**: escaped json with the assets involve in the incident
- **incident-observables**: escaped json with the observables of the incident

Example of `incident-details` structured data:
```
[incident-details@39483 incident-id="5" incident-uuid="652f4c59-aa3e-4e44-b4a4-1c52ab622ebf" incident-uri="https://ndr.redborder.com/incidents/5" incident-domain="root" incident-name="Telegram API Interactions: Certificate Observed and IP Lookups to Suspected Domains (api.telegram.org, checkip.dyndns.org, reallyfreegeoip.org)" incident-priority="medium" incident-source="redBorder Intrusion" incident-status="New" incident-description="An incident involving multiple telemetry rules related to network requests has been detected. Rules indicate suspicious activity related to Telegram API, including certificate observations, domain ..." incident-assets="" incident-observables="[{\"mac_address\":\"00:00:00:00:00:00\"}, {\"ip\":\"10.9.17.101\"}, {\"port\":\"51184\"}, {\"ip\":\"10.9.17.1\"}, {\"port\":\"53\"}]"].
```

#### incident-basic-info

Provide the following common elements of all incidents:

- **incident-id**: id of the incident
- **incident-uuid**: uuid of the incident
- **incident-uri**: URI of the incident
- **incident-name**: name of the incident
- **incident-domain**: domain of the incident
- **incident-priority**: priority of the incident

Example `incident-basic-info` structured data:
```
[incident-basic-info@39483 incident-id="4" incident-uuid="80a09435-f069-400d-8745-23fb93190f44" incident-uri="https://ndr.redborder.com/incidents/4" incident-name="Suspected Win32/Lumma Stealer Activity: Multiple Blocked Domains in DNS Lookups and TLS SNI." incident-domain="root" incident-priority="medium"]"
```
#### user-basic-info

- **user-login**: the username of the user
- **user-name**: name of the user
- **user-email**: email of the user

Example of syslog message with a `incident-basic-info` and a `user-basic-info` structured data on it:
```
[user-basic-info@39483 user-login="john" user-name="John Smith" user-email="johnsmith123@redborder.com"]
```

#### intrusion-event

- **timestamp**: timestamp of the original intrusion event
- **incident-uuid**: the incident uuid
- **incident-uri**: the uri of the incident
- **incident-domain**: the domain of the incident
- **sensor-name**: name of the sensor that originate the event
- **sensor-uuid**: uuid of the sensor that originate the event
- **priority**: priority of the intrusion event
- **message**: the message of the event
- **assets**: assets detected on the event
- **observables**: observables detected on the event
- **classification**: clasification of the intrusion event
- **src**: source IP
- **dst**: destiny IP
- **src-port**: source Port
- **dst-port**: destiny Port
- **src-mac-address**: source mac address
- **dst-mac-address**: destiny mac address

Example of syslog message with `incident-intrusion-event': 
```
[intrusion-event@39483 timestamp="2024-12-27T11:56:00.000Z" incident-uuid="201e3f61-17e0-4fd9-bf2d-fecf8e1a3a58" incident-uri="https://ndr.redborder.com/incidents/14" incident-domain="Aether Dynamics" sensor-name="rbips-s0rbg8nn" sensor-uuid="04231c06-da35-45f5-aa20-ab6658e194e8" priority="medium" message="ET INFO Suspicious GET To gate.php with no Referer" assets="" observables="[{\"mac_address\":\"08:00:27:b2:d5:aa\"}, {\"ip\":\"192.168.56.103\"}, {\"port\":\"1058\"}, {\"mac_address\":\"0a:00:27:00:00:00\"}, {\"ip\":\"141.8.224.79\"}, {\"port\":\"80\"}]" classification="Potentially Bad Traffic" src="192.168.56.103" dst="141.8.224.79" src-port="1058" dst-port="80" src-mac-address="08:00:27:b2:d5:aa" dst-mac-address="0a:00:27:00:00:00"]
```

#### vault-event

- **timestamp**: timestamp of the original event
- **incident-uuid**: uuid of the incident
- **incident-uri**: uri of the incident
- **incident-domain**: domain of the incident
- **sensor-name**: name of the sensor that originate the event
- **sensor-uuid**: uuid of the sensor that originate the event
- **priority**: priority of the vault event
- **message**: message of the event
- **assets**: assets detected on the event
- **observables**: observables detected on the event

Example of syslog message with `incident-intrusion-event': 
```
[vault-event@39483 timestamp="2024-12-27T13:54:00.000Z" incident-uuid="9d661c32-442a-4455-a551-154cc4bb3c46" incident-uri="https://ndr.redborder.com/incidents/17" incident-domain="root" sensor-name="root" sensor-uuid="4803702189063327665" priority="notice" message="Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR" assets="" observables="[{\"hostname\":\"rb-a3hl3x8ocz.redborder.cluster\"}, {\"ip\":\"127.0.0.1\"}]"]
```

#### network-anomaly-event

- **timestamp**
- **incident-uuid**
- **incident-uri**
- **incident-domain**
- **sensor-name**
- **sensor-uuid**
- **priority**
- **message**
- **source**
- **assets**
- **observables**

## Examples of different types of messages

### Creation of an incident

Syslog message of a creation of an incident:
```
<134>1 2024-12-26T13:55:45.232Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 352517 incident-create [incident-details@39483 incident-id="6" incident-uuid="f7ce202b-8de6-46ed-a10f-82b99d239d1e" incident-uri="https://ndr.redborder.com/incidents/6" incident-domain="Aether Dynamics" incident-name="Suspected Blockchain API and Lumma Stealer CnC Domain Activity" incident-priority="high" incident-source="redBorder Intrusion" incident-status="Open" incident-description="" incident-assets="[{\"id\":\"1787\", \"name\":\"DataForge\", \"mac_address\":\"20:e5:2a:b6:93:f1\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 11\"}]" incident-observables="[{\"mac_address\":\"00:08:02:1c:47:ae\"}, {\"ip\":\"10.9.19.101\"}, {\"port\":\"61051\"}, {\"ip\":\"104.20.98.10\"}, {\"port\":\"443\"}, {\"mac_address\":\"00:00:00:00:00:00\"}, {\"port\":\"65341\"}, {\"ip\":\"10.9.19.1\"}, {\"port\":\"53\"}, {\"port\":\"64635\"}, {\"port\":\"62677\"}, {\"port\":\"54289\"}, {\"port\":\"53881\"}, {\"port\":\"56519\"}, {\"port\":\"56289\"}, {\"port\":\"53033\"}]"] New incident: 'Suspected Blockchain API and Lumma Stealer CnC Domain Activity' (Priority: high) (Domain: Aether Dynamics).
```

- **$PRI**: *134*
- **VERSION**: *1*
- **$TIMESTAMP**: *2024-12-26T13:55:45.232Z*
- **$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*
- **$APP-NAME**: *redborder-ndr*
- **$PROCID**: *352517*
- **$MSGID**: *incident-create*
- **$STRUCTURED-DATA**: *[incident-details@39483 incident-id="6" incident-uuid="f7ce202b-8de6-46ed-a10f-82b99d239d1e" incident-uri="https://ndr.redborder.com/incidents/6" incident-domain="Aether Dynamics" incident-name="Suspected Blockchain API and Lumma Stealer CnC Domain Activity" incident-priority="high" incident-source="redBorder Intrusion" incident-status="Open" incident-description="" incident-assets="[{\"id\":\"1787\", \"name\":\"DataForge\", \"mac_address\":\"20:e5:2a:b6:93:f1\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 11\"}]" incident-observables="[{\"mac_address\":\"00:08:02:1c:47:ae\"}, {\"ip\":\"10.9.19.101\"}, {\"port\":\"61051\"}, {\"ip\":\"104.20.98.10\"}, {\"port\":\"443\"}, {\"mac_address\":\"00:00:00:00:00:00\"}, {\"port\":\"65341\"}, {\"ip\":\"10.9.19.1\"}, {\"port\":\"53\"}, {\"port\":\"64635\"}, {\"port\":\"62677\"}, {\"port\":\"54289\"}, {\"port\":\"53881\"}, {\"port\":\"56519\"}, {\"port\":\"56289\"}, {\"port\":\"53033\"}]"]*
- **$MSG**: *New incident: 'Suspected Blockchain API and Lumma Stealer CnC Domain Activity' (Priority: high) (Domain: Aether Dynamics).*

### Update of an incident attribute

Syslog message of an incident update:
```
<134>1 2024-12-26T15:31:30.603Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 648274 incident-update [incident-basic-info@39483 incident-id="9" incident-uuid="8c7bfb52-3619-47e0-b33c-7a3976b4ee21" incident-uri="https://ndr.redborder.com/incidents/9" incident-name="Suspected Blockchain API and Lumma Stealer CnC Domain Activity" incident-domain="Aether Dynamics" incident-priority="high"] Incident Attributes Updated: status="Incident Reported".
```

- **$PRI**: *134*
- **VERSION**: *1*
- **$TIMESTAMP**: *2024-12-26T15:31:30.603Z*
- **$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*
- **$APP-NAME**: *redborder-ndr*
- **$PROCID**: *648274*
- **$MSGID**: *incident-update*
- **$STRUCTURED-DATA**: *[incident-basic-info@39483 incident-id="9" incident-uuid="8c7bfb52-3619-47e0-b33c-7a3976b4ee21" incident-uri="https://ndr.redborder.com/incidents/9" incident-name="Suspected Blockchain API and Lumma Stealer CnC Domain Activity" incident-domain="Aether Dynamics" incident-priority="high"]*
- **$MSG**: * Incident Attributes Updated: status="Incident Reported".*

### User assignment or remove to an incident

Syslog message of adding an user to an incident:
```
<134>1 2024-12-26T15:45:00.786Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 722435 incident-assignment [incident-basic-info@39483 incident-id="5" incident-uuid="652f4c59-aa3e-4e44-b4a4-1c52ab622ebf" incident-uri="https://ndr.redborder.com/incidents/5" incident-name="Telegram API Interactions: Certificate Observed and IP Lookups to Suspected Domains (api.telegram.org, checkip.dyndns.org, reallyfreegeoip.org)" incident-domain="root" incident-priority="medium"][user-basic-info@39483 user-login="john" user-name="John Smith" user-email="johnsmith123@redborder.com"] The user John Smith was added to the incident
```

- **$PRI**: *134*
- **VERSION**: *1*
- **$TIMESTAMP**: *2024-12-26T15:45:00.786Z*
- **$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*
- **$APP-NAME**: *redborder-ndr*
- **$PROCID**: *722435*
- **$MSGID**: *incident-assignment*
- **$STRUCTURED-DATA**: *[incident-basic-info@39483 incident-id="5" incident-uuid="652f4c59-aa3e-4e44-b4a4-1c52ab622ebf" incident-uri="https://ndr.redborder.com/incidents/5" incident-name="Telegram API Interactions: Certificate Observed and IP Lookups to Suspected Domains (api.telegram.org, checkip.dyndns.org, reallyfreegeoip.org)" incident-domain="root" incident-priority="medium"][user-basic-info@39483 user-login="john" user-name="John Smith" user-email="johnsmith123@redborder.com"]*
- **$MSG**: * The user John Smith was added to the incident*

### New intrusion event detected

Syslog message of a new detection of type intrusion

```
<134>1 2024-12-27T13:39:49.907Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 310052 incident-intrusion-event [intrusion-event@39483 timestamp="2024-12-27T12:31:00.000Z" incident-uuid="540f114b-41fc-4d6b-bd9d-cd0180abeaf9" incident-uri="https://ndr.redborder.com/incidents/15" incident-domain="Aether Dynamics" sensor-name="rbips-s0rbg8nn" sensor-uuid="04231c06-da35-45f5-aa20-ab6658e194e8" priority="high" message="ET EXPLOIT ETERNALBLUE Exploit M2 MS17-010" assets="[{\"id\":\"1791\", \"name\":\"IronClad-09\", \"mac_address\":\"00:25:b3:f5:fa:74\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 10\"}]" observables="[{\"ip\":\"192.168.116.149\"}, {\"port\":\"49767\"}, {\"mac_address\":\"00:00:00:00:54:01\"}, {\"ip\":\"192.168.116.143\"}, {\"port\":\"445\"}]" classification="Attempted Administrator Privilege Gain" src="192.168.116.149" dst="192.168.116.143" src-port="49767" dst-port="445" src-mac-address="00:25:b3:f5:fa:74" dst-mac-address="00:00:00:00:54:01"] New  intrusion event: 'ET EXPLOIT ETERNALBLUE Exploit M2 MS17-010' (Priority: high). Associated incident: '540f114b-41fc-4d6b-bd9d-cd0180abeaf9' (Domain: Aether Dynamics).
```

- **$PRI**: *134*
- **VERSION**: *1*
- **$TIMESTAMP**: *2024-12-27T13:39:49.907Z*
- **$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*
- **$APP-NAME**: *redborder-ndr*
- **$PROCID**: *310052*
- **$MSGID**: *incident-intrusion-event*
- **$STRUCTURED-DATA**: *[intrusion-event@39483 timestamp="2024-12-27T12:31:00.000Z" incident-uuid="540f114b-41fc-4d6b-bd9d-cd0180abeaf9" incident-uri="https://ndr.redborder.com/incidents/15" incident-domain="Aether Dynamics" sensor-name="rbips-s0rbg8nn" sensor-uuid="04231c06-da35-45f5-aa20-ab6658e194e8" priority="high" message="ET EXPLOIT ETERNALBLUE Exploit M2 MS17-010" assets="[{\"id\":\"1791\", \"name\":\"IronClad-09\", \"mac_address\":\"00:25:b3:f5:fa:74\", \"type\":\"Workstation Endpoint\", \"operating_system\":\"Microsoft Windows 10\"}]" observables="[{\"ip\":\"192.168.116.149\"}, {\"port\":\"49767\"}, {\"mac_address\":\"00:00:00:00:54:01\"}, {\"ip\":\"192.168.116.143\"}, {\"port\":\"445\"}]" classification="Attempted Administrator Privilege Gain" src="192.168.116.149" dst="192.168.116.143" src-port="49767" dst-port="445" src-mac-address="00:25:b3:f5:fa:74" dst-mac-address="00:00:00:00:54:01"]*
- **$MSG**: * New  intrusion event: 'ET EXPLOIT ETERNALBLUE Exploit M2 MS17-010' (Priority: high). Associated incident: '540f114b-41fc-4d6b-bd9d-cd0180abeaf9' (Domain: Aether Dynamics).*

### New vault event detected

Syslog message of a new detection of type vault

```
<134>1 2024-12-27T14:06:23.783Z rb-a3hl3x8ocz.redborder.cluster redborder-ndr 17506 incident-vault-event [vault-event@39483 timestamp="2024-12-27T13:54:00.000Z" incident-uuid="9d661c32-442a-4455-a551-154cc4bb3c46" incident-uri="https://ndr.redborder.com/incidents/17" incident-domain="root" sensor-name="root" sensor-uuid="4803702189063327665" priority="notice" message="Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR" assets="" observables="[{\"hostname\":\"rb-a3hl3x8ocz.redborder.cluster\"}, {\"ip\":\"127.0.0.1\"}]"] New  vault event: 'Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR' (Priority: notice). Associated incident: '9d661c32-442a-4455-a551-154cc4bb3c46' (Domain: root).
```

- **$PRI**: *134*
- **VERSION**: *1*
- **$TIMESTAMP**: *2024-12-27T14:06:23.783Z*
- **$HOSTNAME**: *rb-a3hl3x8ocz.redborder.cluster*
- **$APP-NAME**: *redborder-ndr*
- **$PROCID**: *17506*
- **$MSGID**: *incident-vault-event*
- **$STRUCTURED-DATA**: *[vault-event@39483 timestamp="2024-12-27T13:54:00.000Z" incident-uuid="9d661c32-442a-4455-a551-154cc4bb3c46" incident-uri="https://ndr.redborder.com/incidents/17" incident-domain="root" sensor-name="root" sensor-uuid="4803702189063327665" priority="notice" message="Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR" assets="" observables="[{\"hostname\":\"rb-a3hl3x8ocz.redborder.cluster\"}, {\"ip\":\"127.0.0.1\"}]"]*
- **$MSG**: * New  vault event: 'Alarm Cisco ISR high memory used fired because it exceeded the upper limit of 50% with 348983704.8% between 2024-12-27 13:49:02 +0000 and 2024-12-27 13:54:02 +0000 with conditions: sensor_name is ISR' (Priority: notice). Associated incident: '9d661c32-442a-4455-a551-154cc4bb3c46' (Domain: root).*

### New network anomaly event detected