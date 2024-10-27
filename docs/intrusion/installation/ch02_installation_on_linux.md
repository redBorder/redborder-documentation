# Installation on Linux

How to install Redborder Intrusion on Linux systems.

Important things to know before installing:

1. This installation is non-reversible, cannot be directly uninstalled or rolled back.
2. The linux distribution supported at the moment is [Rocky Linux 9 minimal](https://rockylinux.org/download).
3. This sensor must be registered with a **Redborder Manager**, so ensure you have one available.

## Prerequisites

### Virtual machine or baremetal

The requirements may vary depending on the volume of traffic to analyze. The following are the minimum requirements:

| **Component**      | **Specification**                                     |
|--------------------|-------------------------------------------------------|
| **Operating System** | Rocky Linux 9 minimal                               |
| **Memory**         | 8 GB RAM                                              |
| **Storage**        | 40 GB HDD space                                       |
| **CPU**            | at least 4 CPU Cores or 4 vCPU                        |
| **Network Interfaces**  | at least 2 (management interface + an interface for single-port network segment)     |

## Packages Installation

Install the supported operative system and run the following command as root:

``` bash title="Repositories installation"
yum install epel-release
rpm -ivh https://repo.redborder.com/ng/24.11/rhel/9/x86_64/redborder-repo-24.11-0.0.1-1.el9.rb.noarch.rpm
```
``` bash title="Install redborder-manage package"
yum clean all
yum install redborder-ips -y
```

Respawn a new bash to reload the environment variables:

``` bash title="Bash reload"
/bin/bash --login
```

## Setup wizard

Start the **installation wizard**:

``` bash title="Installation wizard command"
rbcli setup wizard
```

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

## Node Mode

At this point, we need to choose the mode in which the IPS will operate:

![IPS Registration Configuration](images/ch02_ips_mode.png)

IPS Registration Configuration

 In flowgate mode, the wizard will ask for the address of a manager to register with. On the other hand, in manager mode, the wizard will request the address of the manager acting as the **web server**; therefore, it will also ask for the **credentials** of the **administrator** user who is registering this IPS.

!!! info "Please note..."
Configuring the IPS in manager mode will automatically register the sensor with the web.

### Flowgate Mode: Configuration with the Remote Server

The IPS will be associated with a manager or cluster with which to share the captured data. To associate it, it is necessary to specify the manager or cluster address. You can specify either a domain address or an IP address.

![Configuration with Remote Server](images/ch01_cloud_config.png)

Configuration with Remote Server

### Manager mode: Web registration

The IPS will be associated with a manager that hosts the web interface. To enable this association, you need to provide the manager's address and the credentials of a user with administrative permissions. Additionally, you can modify the sensor's name when it is registered on the web:

![IPS Registration Configuration](images/ch02_sensor_reg.png)

IPS Registration Configuration

Upon clicking OK, you will be prompted for the password of the registered administrator on the **web**:

![Web User Password](images/ch02_pasword_config.png)

Web User Password

## End of Configuration

Before applying the configuration, the wizard will summarize all the information filled out, waiting for the user to accept it.

![Accept Configuration](images/ch02_apply_conf.png)

Accept Configuration

## End of Installation

The installation is almost complete; you only need to wait for the process to finish.

![Applying Configuration](images/ch02_finishing_configuration.png)

Applying Configuration

Click "OK" to return to the console view.

Additionally, you can view the registration process logs with the related command:

#### Flowgate mode

``` bash title="Command run the setup wizard"
journalctl -u rb-register -f
```

At the end of the installation process, the journal will display these logs:

![End of installation](images/ch01_end_registration.png)

#### Manager mode

``` bash title="Display logs register"
cat /var/log/rb-register-common/register.log
```

At the end of the installation process, the journal will display these logs:

![End of installation](images/ch01_end_registration_manager.png)

## What's Next?

In the following chapter, we will finish associating the IPS with the manager so that it can handle traffic and alert you to any detected intrusions. All of this will be manageable from the web.

!!! info "If you installed the IPS in manager mode..."
Remember that if you have installed the IPS in manager mode, the association process should already be complete.
