# Policies

Every IPS sensor need a set of rules to identify... In this chapter, you will set the rules the IPS needs to recognize traffic as intrusion. By default, there are no policies defined. It is considered that the administrator configure this based on determinant conditions: traffic volume, resources and requeriments of the hardware, customazation of the rules, etc...

The rules that are going to be appliyed on IPS are know as policies. There are two main policies:  **Signature policies** and **Reputation policies**. Signature policies those kind of rules that can be triggered by a match between the rule and one packet of the traffic. On the other hand, reputation policies identify IP address of the packet and trigger if is related with a specific network or country. 

Both kind of policies are complementary, so you can exploit a single one of the features or both at the same time. On next steps, you are going to see how to configure the policies.

This chapter is supposing that you already have an IPS claimed and running as a sensor.

![IPS sensor claimed and running](images/IPS_configured.png)
IPS sensor claimed and running

## Sensor properties

Clicking on the *four-lines* icon you can expand the properties of the IPS

![IPS sensor claimed and running](images/ips_properties.png)
IPS sensor claimed and running

## IPS Edit

Each of the following fields can be expanded to configure.

!!! warning "If you change any property..."
    Remember to press **Update** button at the bottom 

### Exporter

In case the IPS is going to also export the traffic captured, here you have to set the ip address and port to send the traffic, for at least one of the ips interfaces:

![Exporter](images/ips_exporter.png)
Exporter

To do so, press the *four-lines* icon and edit the properties of the connection:

![Exporter details](images/exporter_details.png)
Exporter details

!!! info "Relation between ports and traffic exportation protocols..."
    Normally, you are going to use port 2055 for any netflow protocol and port 6343 for sflow

#### Destiny address

This field is mandatory if you really want to export the traffic. You can put here the ip of the manager and the port based on the traffic protocol type.

#### Obervation id

Observation is just a new field included to have an extra way to filter the content on traffic view, splitting the information catched from different subnets. You can set a positive unique number or leave it empty you don't want to filter.

## Groups

In case the IPS has any segment configured, here you can manage the processing resources asigned to every segment.

![Groups](images/Groups.png)
Groups

## Signature policies

## Reputation policies

## Apply Configuration

After any change in the previous policies, the configuration can be applied here.

## Monitors

In monitors you can check the resources consumed by every part of this sensor. Here you can check if any category is having a high impact over the others.

![IPS monitor](images/ips_monitor.png)
IPS monitor



About Reputation policies:

The edit menu in IPS sensor:
