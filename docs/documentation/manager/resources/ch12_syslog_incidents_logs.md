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

For example `incident-basic-info@39483`.

#### incident-basic-info

Provide the following common elements of all incidents:

- incident-id
- incident-uuid
- incident-domain
- incident-priority
- incident-uri

#### incident-details

- incident-id
- incident-uuid
- incident-domain
- incident-priority
- incident-uri
- incident-source
- incident-status
- incident-description
- incident-assets
- incident-observables

#### user-basic-info

- user-login
- user-name
- user-email

#### intrusion-event

- timestamp
- incident-uuid
- incident-uri
- incident-domain
- sensor-name
- sensor-uuid
- priority
- message
- sig-id
- classification
- src
- dst
- src-port
- dst-port

#### vault-event

- timestamp
- incident-uuid
- incident-uri
- incident-domain
- sensor-name
- sensor-uuid
- priority
- message
- target
- hostname
- app-name
- fromhost-ip

#### network-anomaly-event

- timestamp
- incident-uuid
- incident-uri
- incident-domain
- sensor-name
- sensor-uuid
- priority
- message
- source
- assets
- observables
