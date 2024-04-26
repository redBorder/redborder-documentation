
# What is RedBorder?

**Redborder** is the latest open, active, and scalable platform for Cybersecurity and Real-time Network Traffic Analysis (NTA). It is based on Big Data technology for enterprises and service providers.

Its ability to ingest, analyze, and report large amounts of data has been developed and tested in high-demand environments, as well as Network Traffic Analysis, Cybersecurity, or analysis and reporting of connections through wireless networks in different locations.

The platform unifies the different data sources provided by applications and probes. Additionally, it includes a set of common features: customizable panels and reports, correlation, analysis engines, user management, and layered storage.

Applications are within the platform and can be installed as plugins. These focus on digesting new types of data.

Probes are located outside the platform but are managed from it, and their function is to create new types of data and inspection capabilities.

Depending on the applications integrated into the platform, the user will see different options in the menu bar. The applications available in this new version of Redborder are as follows:

- Business Intelligence
- Malware
- Traffic
- Intrusion
- Monitor
- Vault
- Mobility
- Reports

Additionally, Redborder now includes an **anomaly detection system powered by artificial intelligence**, which will be constantly learning about trends and normal data behavior in the different applications of the platform.

## Basic scenario for Redborder installation

A typical basic scenario proposed by the solution consists of a set of sensors arranged at different sensitive points of the organization's network that will connect to a Manager or manager cluster for management and monitoring.

These points are formed by network links, called segments, through which sensitive traffic will flow and which the sensor will analyze more or less transparently, depending on the configured operating mode (IPS/IDS or Flow).

For the planning of sensor installation, some fundamental aspects should be taken into account:

- **Bypass segments** (specific network interfaces paired, usually with bypass support) will be placed in the middle of the traffic to be analyzed.
- **Management interfaces** (in bonding form) for remote access both from normal equipment and from the Manager.
- **IPMI access interfaces for remote hardware management** (SOL or Serial Over LAN connection, iKVM, and IPMI commands such as start, restart, and shutdown).

For the **Manager**, specific hardware is not necessary; **the only condition is the existence of one or more network interfaces.**

!!! info "Keep in mind..."

    In case a **cluster** has been created, two network interfaces are necessary: one for the management network (Management IP Address) and another for the synchronization network (Sync IP address).

In this way, it allows the creation of a bonding for management and connection with the sensors and another bonding (optional) for their communications towards other networks. Both systems support the 802.1q standard for virtual LAN (optional when configuring).

!!! warning "Important"

    It is **important** to first configure the Manager (or manager cluster) before configuring the sensors.

    The Manager must be operational and in a network accessible to the sensors. Some of the sensor configuration processes depend on access to the Manager.

![Basic scenario for Manager installation](images/ch01_img001.png)

Basic scenario for Manager installation

## User Interface Structure of the Installation Menu

For our new version of Redborder NG, we have completely revamped the installation wizard. Now we have a more intuitive and easier-to-use wizard, as well as new configurations for the new additions to the platform.

![Initial screen of the installation wizard](images/ch01_img002.png)

Initial screen of the installation wizard

!!! info "Keep in mind..."
    At the moment, the installation wizard is **only available in English.**

### Option Selection

Navigating through our new installation wizard is very straightforward:

- Move between available options: use the **arrow keys**.
- Check a checkbox: press the **space** key.
- Select an option: press the **enter** key.
