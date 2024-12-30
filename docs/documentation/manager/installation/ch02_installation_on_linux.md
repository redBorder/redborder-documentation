
# Installation on Linux

How to install Redborder Mananager on Linux systems.

Important things to know before installing:

- This installation is non-reversible, cannot be directly uninstalled or rolled back.
- The linux distribution supported at the moment is [Rocky Linux 9 minimal](https://rockylinux.org/download).

## Prerequisites

### Virtual machine or baremetal

The minimum requirements may vary depending on the node mode, these are the requirements for a full-mode node:

| **Component**      | **Specification**                                     |
|--------------------|-------------------------------------------------------|
| **Operating System** | Rocky Linux 9 minimal                               |
| **Memory**         | 16 GB RAM                                             |
| **Storage**        | 80 GB HDD space                                       |
| **CPU**            | at least 4 CPU Cores or 4 vCPU                        |
| **Network Interfaces**  | at least 1 for single node or 2 to make a cluster of multiples nodes     |

## Packages Installation

Install the supported operative system and run the following command as root:

``` bash title="Repositories installation"
yum install epel-release
rpm -ivh https://repo.redborder.com/ng/25.01/rhel/9/x86_64/redborder-repo-25.01-0.0.1-1.el9.rb.noarch.rpm
```
``` bash title="Install redborder-manager package"
yum clean all
yum install redborder-manager -y
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

The very first screen is also guiding with the next steps.

![Start wizard](images/ch02_wizard_001.png)

Press **Yes** to continue.

### Configuration Network (optional)

Press **Yes** to manually configure the network settings or press **No** to keep the actual system configuration.

![Start Network Configuration](images/ch02_wizard_002.png)

Select the network interface you want to manually configure.

![Network Interface Configuration](images/ch02_wizard_003.png)

Once all network interface configurations are complete, select **Finalize** to proceed to the next steps.

#### Network Device Mode

By selecting an interface and entering it, we are given the option to configure it with a static IP address or to function dynamically (with DHCP).

![Network Interface Configuration](images/ch02_wizard_004.png)

#### Network Configuration for a Network Interface

Enter the IP address, Netmask, and Gateway (leave the gateway blank if it's not needed, e.g., for the sync network interface):

![Static Interface Configuration](images/ch02_wizard_005.png)

Repeat process to configure Sync network interface.

![DNS Configuration](images/ch02_wizard_007.png)

### Selecting management interface

The management interface is the one you will use to access the Redborder Manager. 

![Management Interface Selection](images/ch02_wizard_006.png)

### DNS Configuration (optional)

Press **Yes** if you want to configure the DNS.

![DNS Configuration](images/ch02_wizard_009.png)

You can enter up to three different DNS addresses.

![DNS Configuration](images/ch02_wizard_010.png)

Press **OK** to continue.

### Hostname and domain name configuration

Modify the following values if you want to customize the hostname and domain name of the node or just press **OK** to keep the actual ones.

![Hostname and Domain Configuration](images/ch02_wizard_011.png)

### Configure Cluster Service (Serf)

Redborder Manager has the ability to work in a distributed manner. Serf is a decentralized solution for service discovery and orchestration that is lightweight, highly available, and fault-tolerant. Press **OK** to start the Serf configuration.

![Start Serf Configuration](images/ch02_wizard_012.png)

#### Sync Network configuration

Sync network is the network for all managers to sync among them. In case you are really installing a cluster just make sure to select other interface different from management.

![Configure Sync Network and Interface](images/ch02_wizard_013.png)

#### Communication cluster Mode

Select Unicast or Multicast for the Serf communications.

![Configure Serf Mode](images/ch02_wizard_014.png)

#### Secret encryption key

Provide a password for Serf. Remember to save this password securely, as you'll need it to add more nodes to the cluster.

![Secret encryption key](images/ch02_wizard_015.png)

### Storage with Amazon S3 (Optional)

It is possible to use Amazon's remote storage service with S3.

![Storage with Amazon s3y](images/ch02_wizard_016.png)

### External Database (Optional)

It is also possible to configure Redborder to use the Amazon RDS service or some other PostgreSQL database.

![External Database](images/ch02_wizard_017.png)

### Set manager mode

Here, you can select the mode for the node you are installing. These modes affect how the nodes will be configured at the service level. If you are installing a single node or the first node (leader), select the full mode (default) and press **OK** to continue.

![Set manager mode](images/ch02_wizard_018.png)

### Applying configuration

Confirm the wizard settings by pressing **Yes**.

![Apply configuration](images/ch02_wizard_019.png)

The system now will apply the configuration. Press **Ok** to exit the wizard.

![Exit the wizard](images/ch02_wizard_020.png)

Congratulations! You have successfully installed the **Redborder Manager**.

Now the node will configure, this process may take several minutes depending on the mode and the hardware on which it is installed.

Once this process is completed, you will be able to access the **Redborder Webui** service by accesing via browser to `https://<manager-management-ip>`
