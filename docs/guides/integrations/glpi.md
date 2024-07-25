# GLPI

## Introduction

This documentation provides a step-by-step guide to integrating [GLPI](https://www.zglpi.com/) with the redBorder Web Platform. By following these instructions, you will be able to make POST requests to the GLPI API to create and manage items within GLPI from the redBorder platform.

!!! note "Integration Version"
    This integration works with GLPI version 10.0.15.

## API Endpoint Example

Here is an example of the API endpoint for the integration:

    http://<glpi-server>/glpi/api_jsonrpc.php

### Parameters

| Parameter          | Description                                |
| ------------------ | ------------------------------------------ |
| GLPI Endpoint    | The IP address of your GLPI instance.    |
| GLPI API Token    | The API Token used to authenticate with the GLPI API |
| GLPI Token       | Token used to access the GLPI API.       |

!!! info "Note"
    The `API Token` is the credential used to log in to the GLPI web interface.

!!! warning "Important"
    Ensure that the user has appropriate permissions and has also created a `APP Token` with the necessary permissions to access the GLPI API.

## Configuring redBorder Web UI to Use the GLPI API

1. Navigate to `Tools -> Integrations`.
2. Click on the card titled **"GLPI API Integration"** (click the "Start" button).
3. Fill in all required fields.
4. Click the **"Update"** button to apply the changes.

![Configuring redBorder Web UI to Use the GLPI API](images/glpi_step_1.png)

## Assets Enrichment

To enrich assets with data from GLPI, follow these steps:

1. Once the GLPI parameters are entered, go to the section `Tools -> Worker & Job Queue`.
2. A new task, **"GLPI Inventory"**, will now be available. This task will only be visible if the GLPI parameters are set.
3. When executing this task, the values of the MAC addresses in the objects will be modified according to the information from GLPI. That is, if an MAC value has a different name or object type, it will be updated based on the information from GLPI.