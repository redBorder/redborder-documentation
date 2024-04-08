
# Menu and Module Options

In the analysis area of the menu bar (top bar, left margin), we can find different sections corresponding to the Apps we have integrated into the RedBorder platform.

Later on, we will explore the different options for data visualization, types of charts, granularity (maximum degree of temporal detail for an event query), and attributes that can be combined to obtain a fully customizable network traffic visualizer.

![Module Overview](images/ch04_img010.png)

Module Overview

## Options available in the submenu

![Submenu Options](images/ch04_img011.png)

Submenu Options

### Filters

Allow users to isolate a portion of the information for detailed inspection. In this tab, you can see the number of filters that have been applied to take actions on them:

- *Advanced search.*
- *Create an alarm.*
- *Create a widget.*

![Filters](images/ch04_img012.png)

Filters

### Views

Offers different options for displaying information.

- *Raw*: Raw events.
- *Tops*: Shows the total sum of data from different events to display them as one.
- *Compare*: Comparison of events within a time period.
- *Unique*: Display the number of unique events, grouped as indicated.

![Views](images/ch04_img013.png)

Views

### Aggregation

There are different values or units of measure in which the data can be displayed. For example, flows per second (flows/s) or bytes per second (bps). Note that each module has its own aggregation options.

![Aggregation](images/ch04_img014.png)

Aggregation

### Granularity

Indicates the degree of temporal detail that can be shown in the information. The minimum value for granularity is one minute.

![Granularity](images/ch04_img015.png)

Granularity

### Chart

Displays the different types of charts among which we can show the data. The available chart types vary depending on the selected view. They are as follows:

![Chart Type: Area](images/ch04_img016.png)

Chart Type: Area

![Chart Type: Lines](images/ch04_img017.png)

Chart Type: Lines

![Chart Type: Bars](images/ch04_img018.png)

Chart Type: Bars

![Chart Type: Stacked Bars](images/ch04_img019.png)

Chart Type: Stacked Bars

![Chart Type: Accumulated](images/ch04_img020.png)

Chart Type: Accumulated

### Options

In this section, the user can perform various actions to manage the data being displayed. The options vary depending on the selected view.

- *Show filtered total/Hide filtered total*: shows or hides the chart considering the selected filters.
- *Export to CSV*: Provides the option to export a CSV report of any selected field by selecting the event limit.
- *Time Machine*: Allows changing the date/time of the machine to view all information and events that have occurred in that time period.
- *Sort aggregations*: Allows changing the order of the aggregations displayed in the module.
- *Save tabs as default*: By selecting this option, the default tabs layout can be modified.

![Options](images/ch04_img021.png)

Options

### Attributes

Events received by the Manager consist of a "column: value" pair. The values given in each column can be understood as specific event data that actually provide information. These are called "attributes".

Attributes can be displayed in different ways: as tabs or as columns (Add Tabs/Columns) depending on the view you are in.

![Attributes](images/ch04_img022.png)

Attributes

All attributes have specific meaning and functionality. For example, in the Traffic module, we can observe highly relevant attributes such as *Public IP*, which shows the real IP address of devices on the network, *Public IP MAP*, indicating their position on the map, or *Country Code*, which indicates the country they belong to.

![Attributes: Overview](images/ch04_img023.png)

Attributes: Overview
