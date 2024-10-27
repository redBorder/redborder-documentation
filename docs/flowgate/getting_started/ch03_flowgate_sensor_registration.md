# Flowgate Sensor Registration

A Flowgate sensor will represent the device that exports the configured type of information from an external location to the manager's own location.

## Identifying the Flowgate Sensor

The sensor must be claimed in the manager to start retransmitting data from the flowgate. To do this, go to the Sensors section on the website. In the list of sensors, you should see a section called Unclaimed.

![Unclaimed Sensors](images/Unclaimed_loc.png)

Unclaimed Sensors

This menu can be expanded by clicking on it, and you will see the sensors pending to be claimed by the manager.

![Flowgate Unclaimed](images/flowgate_unclaimed.png)

Flowgate Unclaimed

The **globe** icon indicates that it has been identified as a flowgate. If you have just completed the installation process, you can be certain that the IP displayed on the website is the same as the management interface.

!!! info "Keep in mind..."
    The IP shown on the flowgate sensor corresponds to the management interface.

## Claiming the Flowgate Sensor

The flowgate is identified with a unique hexadecimal character identifier. This serves as a link to claim the sensor. Let's select the identifier:

![Selección del UUID](images/select_uuid.png)

Selecting the UUID

Copy it by pressing CTRL + C, then click Add Sensor and Claim Sensor:

![Claiming a sensor](images/Claim_sensor.png)

Claiming a sensor

This will show the following window:

![Claim properties](images/Claim_sensor_fields.png)

Claim properties

In the name field, enter any name and in the UUID field, paste the identifier you copied earlier. Once the fields are filled in, click **Save**. This will queue the Flowgate configuration. The website will show it with an indicator in its properties.

![Configuration and claiming](images/Configuring_claimed.png)

Configuration and claiming

## Flowgate Sensor Autoconfiguration

If you have access to a console on the machine itself, you can observe the installation process with the journal:

``` bash title="Print the setup logs"
journalctl -u rb-register -f
```

![Registration logs](images/journal_register.png)

Registration logs

At the end of the registration process, the sensor indicator will update its status to **configured** if successful; **failed** otherwise:

![Flowgate configured](images/Flowgate_configured.png)

Flowgate configured

## What's Next?

Now you have a Flowgate sensor configured in the manager. You can add sensors to the Flowgate sensor as you can do directly to the manager.

![Flowgate adding sensors](images/flowgate_add_sensor.png)
Flowgate adding sensors