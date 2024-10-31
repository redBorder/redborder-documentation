# Incident Details

## Incident Overview

This view provides comprehensive information about the incident, allowing users to document each step of the response process.

![Incident detail](images/ch05_1_incident_detail.png)

### Overview

The Overview section summarizes key information about the incident, displaying:

- **Assets** involved
- **Observables** identified
- **Indicators** linked to the incident

An interactive graph visualizes the relationships between observables, enabling users to quickly understand their connections.

![Overview of the incident](images/ch05_1_overview.png)

### Detection

The **Detection** section lists relevant events and its observables and assets contributing to the incident, providing insight into how it was identified.

![Detection](images/ch05_1_detection.png)

### Response

The **Response** section presents a **playbook**, a step-by-step guide tailored to the incident type. Playbooks ensure a systematic response approach, with tasks organized by phase. Each task includes a description, space for user comments, and a completion marker.

![Response](images/ch05_1_response.png)

In this example, the playbook contains four phases:

- **Identification**
- **Containment**
- **Eradication**
- **Recovery**

Each phase lists tasks to be completed sequentially. Users can document their actions and mark tasks as done.

### Worklog

The **Worklog** records all actions taken by users on the incident. Users can view, filter, and manually add comments as needed.

![Worklog](images/ch05_1_worklog.png)

#### Worklog Search & Filter

Worklog entries can be filtered by **Type** and **User** and sorted by date. The types of logs include:

- **Incident Changes**: System-generated logs for status updates and user actions.
- **Response Logs**: User-added logs during investigation and response activities.
- **Notes**: User-created notes for additional information.

#### Adding notes

Users can add notes to the worklog by clicking **Add Note**, which opens a text editor. The editor supports:

- Link insertion
- Code blocks and text formatting
- Other formatting options

![Add note](images/ch05_1_add_note.png)
