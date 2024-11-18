# General Settings

The **General Settings** option in the **Tools** section of the configuration area in the menu bar provides an interface for both platform configuration and network infrastructure.

![General Configuration: General Configuration of Redborder Manager](images/general_settings_input_deleteStoredJob_en.png)

For basic configuration in the Manager, the user can edit general parameters, application features, server settings, network, routes, IP geolocation, among other parameters.

Let's go through the general categories available in the general configuration:

## General Parameters

In this section, the user can change the following elements:

- **Company name**: name of the company using Redborder.
- **Company email**: email address of the company. It will be used as the sender of reports and license management.
- **Web *URL***: this is the interface *URL*, used for referencing in emails.
- **Minimum password length**: indicates the minimum number of characters a password must have to be accepted on the platform.
- **Session timeout**: time in seconds that the platform will wait to log out an inactive user.
- **Dashboard refresh time**: period for refreshing the dashboard in seconds.
- **Raw automatic reload time**: update period for the interface in seconds.
- **Vulnerability information update frequency**: frequency for updating available information about vulnerabilities.
- **Vulnerability information update time**: UTC time at which the update job for vulnerability information will run.
- **Snort rules update frequency**: frequency for updating the rules.
- **Snort rules update time**: UTC time at which the rule update job will run.
- **Enable Reverse Name Resolution**: if checked, the platform will attempt to resolve all IPs in each view to their corresponding domain.

Other elements that the user cannot change are:

- **Private Key**: key used by the system to communicate between cluster members (if any) and with the sensors (IPS or Flowgate if any).
- **Cluster UUID**: value used by the system as the identifier for the cluster of managers. The license is related to this identifier.

!!! warning "Important"

    All parameters defined in this interface are inherited by those elements at lower dependent levels (domains, sensors). To modify this information, the user must write or edit it.

## Banner

This section allows the user to add desired text to the login screen for the web via the *Login Screen Banner* field. It is also possible to add a banner to the console login via the *Console Line Banner* field.

By default, these fields do not contain text, so no message will be displayed during login.

## HTTP SSL Certificates

Allows setting SSL certificates for secure communications.

## Servers

Configuration of Syslog, MTA, NTP servers, and enabling flowgate configuration.

## Default Rules

Configuration of default rules for loading or removing module data from storage. You can choose to save all data or save the latest data received within a specified time period.

On the right, a summary is displayed with the parameters specified for storing the data.

## Monitoring and Logs

This section helps monitor the Redborder infrastructure. In the *Syslog Servers* field, you must specify which remote server the logs will be sent to.

You must select which protocol and Syslog mode you want to use for the sends.

!!! info "Keep in mind"
    *TCP* protocol is recommended to ensure secure sending. Choose this option whenever possible.

The *New Relic* section allows reporting to the *New Relic* cloud. In this case, the user must provide their *New Relic* license number and, if they have a cluster group, enter its name.

Enabling the *Enable Plugins* verification is optional because this is a paid service. Activate *Enable APM* for web monitoring.

## Amazon Cloudwatch

If the user wishes to send their logs to this Amazon service, all the displayed fields must be completed with the information provided by their contracted service.

## Google Maps API

It is possible to link Redborder with the Google Maps API to obtain better location information using the API key or client ID provided by this service.

## Backup Segments (WIP, Remote S3)

Allows user data backup on a remote server or database. For this, the host name, bucket, and secret access key must be provided.

## Outliers

To activate anomaly detection, expand the *Outliers* section and click **Enable anomaly detection functionality**.

To disable the option, simply uncheck it.

## OpenWeatherMap

*OpenWeatherMap* is used in the mobility module to enrich mobility data with weather information. This field allows the user to write down their *OperWeatherMap* API key to accomplish the enrichment.

## White Networks

In this section, networks whose traffic will pass without packet inspection because they are considered "trusted" can be specified.

**Add a new network**: click the **Add** button and provide the network IP.

To remove a network from the list, use the **Delete** icon.

## Black Networks

List of networks whose traffic should be blocked due to poor reputation.

**Add a new network**: click the **Add** button and provide the network IP.

To remove a network from the list, use the **Delete** icon.

## Network Routes

In this section, the user will define the network routes for the Manager.

**Add a new network**: click the **Add** button and provide the network IP route.

To remove a network route from the list, use the **Delete** icon.

## Fixed Hosts

In this section, the user will define the network routes for the Manager.

**Add a new network**: click the **Add** button and provide the network IP.

To remove a network from the list, use the **Delete** icon.

## GeoIP

To enable *Geo Protection* functionality, it is necessary to have an updated geolocation database to avoid errors in IP geolocation. Redborder is configured to support only the Maxmind database format.

These are the types of databases supported for IPv4 and IPv6 versions (old GeoIp binary format):

- **Country**: determines the country of an Internet visitor based on their IP address.
- **City**: provides the country, subdivisions, city, postal code, latitude, and longitude associated with worldwide IPv4 and IPv6 addresses.
- **ASN**: the *GeoIP2* anonymous IP database contains data on IP addresses used by anonymizing networks in various ways.

Download all files from the Maxmind website and unzip them. Only files with .dat format can be uploaded. To do this, click **Select file**.

## Logstash Tunning

In this section, the user can select different additional steps for data enrichment in logstash from the web interface (available for Traffic, Intrusion, and Mobility modules).

## Widgets Overview

With this configuration, the user can choose what information will be displayed in the left sidebar of the general view when entering the web platform. All the user needs to do is check or uncheck the desired widgets to make them visible or not in the *General View*. All widgets are shown by default.
