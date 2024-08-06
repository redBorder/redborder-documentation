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

In case the IPS is going to also export the traffic captured, here you have to set the ip address of a flow sensor and the port based on the protocol:

![Exporter](images/ips_exporter.png)
Exporter

To do so, press the *four-lines* icon and edit the properties of the connection:

![Exporter details](images/exporter_details.png)
Exporter details

!!! info "Relation between ports and traffic exportation protocols..."
    Normally, you are going to use port 2055 for any netflow protocol and port 6343 for sflow

#### Destiny address

This field is mandatory if you really want to export the traffic. You can put here the ip of the flow sensor and the port based on the traffic protocol type.

#### Obervation id

Observation is just a new field included to have an extra way to filter the content on traffic view, splitting the information catched from different subnets. You can set a positive unique number or leave it empty you don't want to filter.

## Groups

In case the IPS has any segment configured, here you can manage the processing resources asigned to every segment.

![Groups](images/Groups.png)
Groups

## Signature policies

By default, no signature policy is created for the ips. That's what you can watch in **Signatures policy menu**.

![Signature Policies](images/signature_policy_view.png)
Signature Policies

To add the first policy press **New Policy**, it will appear a window to create one:

![Signature Policiy Detail](images/signature_policy_detail.png)
Signature Policiy Detail

Here you have to select a name, and one of the rules sources. After that, confirm clicking **Create Signature Policy**. All rules in that policy will appear:

![Rules selection](images/snort_rule_select.png)
Rules selection

The rules details can be seen by expanding each category:

![Rules expanded](images/rules_expanded.png)
Rules expanded

By default, all rules are being ignored. You can change the action to do when a packet triggers an action to **pass, alert, drop or clear**. We can select a set of rules and/or categories to apply at the same time the same action by checking the boxes at the right and expanding **Change Action(s) menu**.

After the setup of the policy, go back to the **Signatures policy menu**. Here you will see the new policy created:

![Signature Policies](images/sig_pol.png)
Signature Policies

To finally apply the configuration, click on **Assign** button.

## Reputation policies

By default, as it happended with signature policies, no policy is created for the ips. To add the first policy press **New Rep Policy**, it will appear a window to create one. Here you have to select a name, and one of the rules sources. After that, confirm clicking **Create Signature Policy**. A political map will appear:

![Reputation map](images/map.png)
Reputation map

You can configure the address by a set of networks or considering entire contries. Click on **+Add** on the corresponding category to add a network, or a location.

![Country](images/country.png)
Country

Here you can select the action to take into account for each rule defined: **analyze, bypass or drop**

In case a region has a rule, it will color that part in the map, depending on the action selected:

![Color map](images/color_map.png)
Color map

After the setup of the policy, go back to the **Reputation policy menu**. Here you will see the new policy created:

![Signature Policies](images/rep_pol.png)
Signature Policies

To finally apply the configuration, click on **Assign** button.

## Apply Configuration

After any change in the previous policies, the configuration can be applied here by selecting the corresponding checkboxes and clicking **Update**.

![Configuration update](images/apply_conf.png)
Configuration update

## Monitors

In monitors you can check the resources consumed by every part of this sensor. Here you can check if any category is having a high impact over the others.

![IPS monitor](images/ips_monitor.png)
IPS monitor



About Reputation policies:

The edit menu in IPS sensor:
