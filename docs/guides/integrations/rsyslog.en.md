# Syslog

## Introduction

This documentation provides a step-by-step guide to understanding and integrating syslog within the redBorder Web Platform. Syslog is a widely used standard for logging system messages, allowing devices and applications to send logs to a central server. By following these instructions, you will learn how to configure and manage syslog to ensure that logs from various systems are captured and efficiently processed within the redBorder platform.


### Parameters

| Parameter          | Description                                |
| ------------------ | ------------------------------------------ |
| Syslog Server   | The IP address where you want to receive the logs    |
| Syslog Port    | The Port you want to use to send the logs |
| Syslog Protocol      | Select between UDP and TCP to send logs      |


!!! warning "Important" 
Ensure that the destination machine is properly configured to receive syslog messages. This includes opening the appropriate ports (e.g., UDP 514 or TCP 514) in the firewall and enabling the necessary protocols. Failure to do so will prevent the machine from receiving syslog logs.


## Configuring redBorder Web UI to integrate the Syslog

1. Navigate to `Tools -> Integrations`.
2. Click on the card titled **"Syslog Integration"** (click the "Start" button).
3. Fill in all required fields.
4. Click the **"Update"** button to apply the changes.

![Configuring redBorder Web UI to Use the GLPI API](images/syslog_step_1.png)