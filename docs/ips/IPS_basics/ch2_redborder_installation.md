
# Installation of the RedBorder IPS

Welcome to the RedBorder installation process. Thanks to this guide, anyone can prepare the platform **without specific programming knowledge in Linux**.

Installing the RedBorder Manager is the first step to start monitoring and protecting your network information with RedBorder's solution. You should review the content of this chapter before starting the installation of the platform (also known as the RedBorder Manager).

!!! tip "Recommendation..."
    Have a minimal knowledge of networking, as well as basic networking concepts.

## Installation Requirements

A successful implementation of RedBorder requires a machine with the Rocky Linux 9 operating system installed. The machine's hardware requirements should be at a minimum:

=== "IPS"

    * Disk: 50 GB
    * RAM: 16 GB
    * CPU: 4 cores
    * Network Interfaces: At least two

## Installation Process

The first action to start monitoring your network with RedBorder is to obtain the latest official RedBorder packages for **Rocky Linux 9** available at [repo.redborder.com](https://repo.redborder.com).

``` bash title="Latest"
dnf install epel-release -y && rpm -ivh https://repo.redborder.com/ng/latest/rhel/9/x86_64/redborder-repo-1.0.0-1.el9.rb.noarch.rpm
```

``` bash title="Command to install redborder IPS"
dnf install redborder-ips -y
```

With the packages downloaded and installed, the next step is to configure RedBorder. To do this, restart the session in the console:
``` bash title="Command to restart the console"
/bin/bash --login
```

This will update the paths to the scripts, allowing you to execute the installation command:

``` bash title="Command run the setup wizard"
rb_setup_wizard
```

!!! warning "If you are connected to the machine remotely..."
    The setup wizard cannot be launched via SSH. If virtualized, use the console provided by the virtualization environment. Otherwise, you will need to connect directly to the physical machine.

## Installation Wizard

Having started the **installation wizard** for the platform in the console, it can be used as a guide throughout the process. The first screen shows an index of the upcoming steps.

![Starting the wizard](images/ch02_configure_wizard_start.png)

Starting the wizard

If you are unsure about the current configuration, you can cancel with the "No" option, which will display the next screen before returning to the console view.

### Network configuration

#### Normalizing interfaces names

![Name normalization](images/ch01_interface_naming_warn.png)

Name normalization

After confirming, the IPS will restart, and you can resume by launching the wizard again:

``` bash title="Command run the setup wizard"
rb_setup_wizard
```

In the lower box, the existing network interfaces on the machine are listed. Below all the interfaces the machine has, there is the **Finalize** option, which can be selected **after successfully configuring** the interfaces.

![Network Configuration](images/ch02_img001.png)

Network Configuration

When selecting an interface and entering it, you are given the option to configure it with a static IP address or to have it work dynamically (with DHCP).

![Network Interface Configuration](images/ch02_img002.png)

Network Interface Configuration

If selecting the static IP option, you must specify the IP, subnet mask, and default gateway:

![Static Interface Configuration](images/ch02_img003.png)

Static Interface Configuration

### DNS Configuration

The installation wizard will give you the option to choose whether to configure DNS servers. It is mandatory to configure at least one server; however, up to 3 DNS servers can currently be configured on the platform. This can be done on the following screen:

![DNS Configuration](images/ch02_img004.png)

DNS Configuration

<details>
<summary> OMITTED STEP COLLAPSED </summary>
### Selection of the Management Interface
You will be asked to select one of the interfaces as the management interface. While the management interface will be used to connect with other RedBorder machines or management systems, the other interfaces will be used to read and transmit traffic.

!!! info "Recommendation"
    It is recommended to use eth0 as the management interface to clearly identify it as the management interface.

image

Management Interface Selection

</details>

### Segment Configuration

Segments identify those networks to which the IPS has access and on which it will act as a network security device. For the IPS to be operational, at least one segment must be declared on the interfaces.

![Segment Configuration](images/ch02_configure_segments.png)

Segment Configuration

#### Info

In info, we can view information related to each network interface and even identify it on the physical network card. This is useful for deciding which will be the active segments and what should be physically connected to what:

![Segment Information](images/ch02_info_segments.png)

Segment Information

When selecting an interface, you should choose a blinking time for the physical network interface, which will help identify it on the physical machine in question:

![Interface Blinking](images/ch02_blink.png)

Interface Blinking

!!! important "If you select one of the interfaces..."
    You can return to segment configuration by pressing **ESC** or choose the blinking duration. During the interface blinking, the installation process will not continue.

#### Force bypass (WIP)

#### New Segment

To assign a new segment, select one of the available interfaces.

!!! important "Regarding the management interface..."
You must reserve the main management interface and it should not be assigned as a segment.

![Create a new Segment](images/ch02_new_segment.png)

Create a new Segment

The creation of a new segment will be shown in a previous list:

![New Segment in the List](images/ch02_new_segment_in_list.png)

New Segment in the List

#### Remove Segment

If you want to perform the opposite action, you can remove the segments you want from the list. You can select the ones you want to remove:

![Remove Segments](images/ch02_delete_segment.png)

Remove Segments

And they will disappear from the previous list:

![Segment Configuration](images/ch02_configure_segments.png)

Segment Configuration

#### Finalize Segment Configuration

Once you have configured the desired segments, press **finalize**.

### Configuration with the Remote Server

The IPS will be associated with a manager or cluster with which to share the captured data. To associate it, it is necessary to specify the manager or cluster address. You can specify either a domain address or an IP address.

![Configuration with Remote Server](../../proxy/platform_configurations/images/ch01_cloud_config.png)

Configuration with Remote Server

## End of Configuration

Before applying the configuration, the wizard will summarize all the information filled out, waiting for the user to accept it.

![Accept Configuration](images/ch02_apply_conf.png)

Accept Configuration

## End of Installation

The installation is almost complete; you only need to wait for the process to finish.

![Applying Configuration](images/ch02_finishing_configuration.png)

Applying Configuration

Click "OK" to return to the console view.

Additionally, you can view the registration process logs with the following command:

``` bash title="Command run the setup wizard"
journalctl -u rb-register -f
```

At the end of the installation process, the journal will display the following:

![End of installation](../../proxy/platform_configurations/images/ch01_end_registration.png)

End of installation

## What's Next?

In the next chapter, we will complete the association of the IPS with the manager so it can start capturing traffic and alerting on detected intrusions.
