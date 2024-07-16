# Zabbix

## Integrate Zabbix with the redBorder Web Platform

This documentation provides a step-by-step guide to integrate [Zabbix](https://www.zabbix.com/) with the redBorder Web Platform. By following these instructions, you will be able to make POST requests to the Zabbix API to create and manage items within Zabbix from the redBorder platform.

## API Endpoint Example

Here is an example of the API endpoint for integration:

```http
http://<zabbix-server>/zabbix/api_jsonrpc.php
```

### Parameters

- `<zabbix-server>`: The IP address of your Zabbix instance.
- `Username`: The Zabbix username required to query the API.
- `Password`: The password of the user specified in Username.
- `Token`: Token used to access the Zabbix API.

🚨 **Nota:** Note: The Username and Password are the credentials used to log into Zabbix.
- It should be noted that the user must have permissions and have created a Token with appropriate permissions to access the Zabbix API data.


## Configure the redBorder Web Interface to Use the Zabbix API

1. Go to `Tools` -> `Integrations`.
2. Click on the card labeled **"Zabbix API Integration"** (in the "Get started" button).
3. Fill in all the fields.
4. Press the **"Update"** button to apply the changes.

![Configure redBorder Web UI to Use the Zabbix API](images/zabbix_step_1.png)
