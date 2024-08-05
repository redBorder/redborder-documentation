# Policies

Every IPS sensor need a set of rules to identify... In this chapter, you will set the rules the IPS needs to recognize traffic as intrusion. By default, there are no policies defined. It is considered that the administrator configure this based on determinant conditions: traffic volume, resources and requeriments of the hardware, customazation of the rules, etc...

The rules that are going to be appliyed on IPS are know as policies. There are two main policies:  **Signature policies** and **Reputation policies**. Signature policies those kind of rules that can be triggered by a match between the rule and one packet of the traffic. On the other hand, reputation policies identify IP address of the packet and trigger if is related with a specific network or country. 

Both kind of policies are complementary, so you can exploit a single one of the features or both at the same time. On next steps, you are going to see how to configure the policies.

This chapter is supposing that you already have an IPS claimed and running as a sensor.

![IPS sensor claimed and running](images/IPS_configured.png)
IPS sensor claimed and running

## Sensor properties

Clicking on the *four-lines* icon you can expand the properties of the IPS



## Signature policies


About Reputation policies:

The edit menu in IPS sensor:

