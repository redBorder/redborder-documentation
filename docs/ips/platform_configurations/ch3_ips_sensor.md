# IPS Sensor Registration

## Identify the IPS sensor

Identifying the IPS will be more or less easy depending on the way the IPS was installed.

### Modo manager

In case the IPS has been installed in **manager** mode, we just need to verify that the sensor has been properly claimed:

![IPS in manager mode claimed](images/IPS_manager_claimed.png)

IPS in manager mode claimed

### Modo proxy

![Unclaimed sensors](images/Unclaimed_loc.png)

Unclaimed sensors

This menu can be displayed by clicking on it and we can see the list of sensors pending to be claimed by the manager. 

![IPS unclaimed](images/ips_unclaimed.png)

IPS unclaimed

The **shield** icon indicates that this sensor has been identified as an ips.

!!! info "Please note..."
    The IP shown on the ips sensor corresponds to the management interface.

## Reclaim the IPS sensor

As a name, the IPS is identified with a unique identifier of hexadecimal characters. It serves as a link to claim the sensor. Let's select the identifier:

![UUID selection](images/select_uuid.png).

UUID selection

Copy by pressing CTRL + C, press 'Add Sensor' and 'Claim Sensor':

![Action of claiming a sensor](images/Claim_sensor.png).

Action to claim a sensor

This will show us the following window:

![Claim properties](images/Claim_sensor_fields.png).

Claim properties

In the 'Name' field we introduce any name and in the 'UUID' field we paste the identifier that we copied previously. Once the fields are filled in, click **Save**. This will glue the IPS configuration. The web will show them with indicator in its properties.

![Configuration and claim](images/Configuring_claimed_IPS.png)

Configuration and claiming

## IPS sensor autoconfiguration

If we have access to a console on the machine itself, we can watch the installation process with the journal:

``` bash title="Print the setup logs"
journalctl -u rb-register -f
```

![Logs of the registry](images/journal_register.png)

Logs of the registry

At the end of the whole registration process, the sensor indicator will update its status as **configured (green)** in positive case, or **failed (red)** in negative case:

![IPS configured](images/IPS_configured.png)

IPS configured

On next chapter, you will set the rules the IPS needs to recognize traffic as intrusion.
