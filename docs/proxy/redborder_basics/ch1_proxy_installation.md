# Client Proxy Installation and redborder Live Registration

## Requirements

Redborder client proxy is a software that has minimum requirements in order to function correctly. The minimum essential elements required for installation as well as those recommended for correct performance are shown in the following chart:

**Installation requirements**

**Minimum requirements**
- RAM 1GB
- Processor: 1 core
- HD 16GB

**Recommended requirements**
- RAM 8GB
- Processor: 4 cores
- HD 32GB
- Network Interface: At least two

## Installation Process

The first action to start monitoring your network with RedBorder is to obtain the latest official RedBorder packages for **Rocky Linux 9** available at [repo.redborder.com](https://repo.redborder.com).

## Installing the RPM

``` bash title="Latest"
dnf install epel-release -y && rpm -ivh https://repo.redborder.com/ng/latest/rhel/9/x86_64/redborder-repo-1.0.0-1.el9.rb.noarch.rpm
```

``` bash title="Proxy"
dnf install redborder-proxy -y
```

With the packages downloaded and installed, the next step is to configure RedBorder. To do this, log out of the console session and log back in. You can use a basic command for this:

``` bash title="Relogin"
/bin/bash --login
```

This will update the paths to the scripts, allowing us to execute the setup command:

``` bash title="Launch setup wizard"
rb_setup_wizard
```

This command will start the **installation wizard** of the platform in the console to guide you through the entire process.

## Basic Configuration
## WIP From here to the end

Upon completing the installation process, we can enter the system with the root user and password (redborder by default):

![Login](images/ch01_img004.png)
*Login*

## Registering the redborder client proxy in redborder Live

In order to register the sensor in redborder Live, we must have a redborder account.

To register in redborder Live, we must access: [https://www.redborder.com/](https://www.redborder.com/). Click on try redborder, in the upper right of the screen.

![Try redborder](images/ch01_img005.png)
*Try redborder*

Fill out the form and click on **Register**. We will need to confirm the email in order to finish the process.

![Register on the web](images/ch01_img006.png)
*Register on the web*

Now, we must go to the redborder Live login page. The link for this page is: [https://live.redborder.com/](https://live.redborder.com/). We will log in with the same email address and password that we used in the registration.

![Log in in redborder Live](images/ch01_img007.png)
*Log in in redborder Live*

Go to Sensors and press `+ Claim Sensor`:

![Claim sensor](images/ch01_img008.png)
*Claim sensor*

A pop-up window will appear where we must enter a name for the sensor and paste the UUID that we copied before in the field below.

![Enter the name and UUID of your sensor](images/ch01_img009.png)
*Enter the name and UUID of your sensor*

Click on `Save` and wait until the sensor is configured correctly. We can then verify that the sensor is working in redborder Live.

![Sensor registered and claimed](images/ch01_img010.png)
*Sensor registered and claimed*

## Add a Flow sensor

To add a flow sensor, click on the `Edit button -> Add sensor -> Flow`:

![Adding a Flow sensor](images/ch01_img011.png)
*Adding a Flow sensor*

A pop-up window then appears which asks us for a name and the IP address from which the flow of data is being received:

![Create a new Flow sensor](images/ch01_img012.png)
*Create a new Flow sensor*

By going to the upper FLOW tab, we can verify that the traffic that was initially receiving the Client Proxy is now classified as Sensor Flow. Once we have created the different flow sensors, the traffic can be viewed separately:

![View Flow events](images/ch01_img013.png)
*View Flow events*