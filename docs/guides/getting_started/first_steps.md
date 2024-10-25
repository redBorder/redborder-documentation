
# First steps

Redborder is an Open Source network visibility, data analytics, and cybersecurity Big Data solution that is scalable up to the needs of enterprise networks and service providers

## Requeriments

The successful implementation of Redborder requires a machine with the **Rocky Linux 9** operating system installed. The minimum hardware requirements for the machine should be:

=== "Manager"

    * Disk: 80 GB
    * RAM: 16 GB
    * Network Interface: At least one

=== "Proxy"

    * Disk: 30 GB
    * RAM: 4 GB
    * Network Interface: At least one

=== "IPS"

    * Disk: 30 GB
    * RAM: 4 GB
    * Network Interfaces: At least two

## Installation

### Yum repo { #install-repo data-toc-label="Yum repo" }

Official Redborder latests packages for Rocky Linux 9 available on [repo.redborder.com](https://repo.redborder.com)

=== "Latest"

    ``` sh
    yum install epel-release && rpm -ivh https://repo.redborder.com/ng/24.11/rhel/9/x86_64/redborder-repo-24.11-0.0.1-1.el9.rb.noarch.rpm
    ```

### Redborder package { #install-package data-toc-label="Redborder package" }

The Redborder system comprises the main information management and visualization system, **Redborder Manager**, along with **Redborder proxy**, a solution for exporting network traffic, and **Redborder ips**, a sensor for threat detection.

=== "Manager"

    ``` sh
    yum install redborder-manager
    ```

=== "Proxy"

    ``` sh
    yum install redborder-proxy
    ```

=== "IPS"

    ``` sh
    yum install redborder-ips
    ```

## Configuration

To complete the initial configuration run the wizard and follow the steps.

    rb_setup_wizard

## Ready

**Ready to Get Started!**

You've successfully completed the initial steps. Now, all that's left is to wait as the system finishes the configuration. If you've followed each step carefully, you're on your way to harnessing the full capabilities of Redborder. Thank you for choosing Redborder for your network management and security needs! If you have any questions or need assistance, feel free to refer to the documentation or reach out to our support team. Welcome to Redborder!
