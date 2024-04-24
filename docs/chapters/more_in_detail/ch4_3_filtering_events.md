# Event filtering

In the submenu of the section, there are many options that allow us to visualize events according to the user's analysis needs.

One of these options is **Filters**, which allows the filtering of events according to the criteria defined by the user. These filters can be saved for later use to display events.

## Filtering options

- **Filter zoom**: events isolated graphically according to a period of time.
- **Filter selected**: allows converting one or more filtered elements in the table.
- **Advanced Search**: allows establishing conditions for an advanced search acting as a filter. It is very useful for isolating and analyzing specific data.

## Filtering Actions

- **Saved filters**: shows a list of saved filters.
- **Create an alarm**: allows setting an alarm based on the applied filters.

![Alarms](images/ch04_img030.png)

Tools -> Alarms

- **Create a widget**: creates a widget based on the search criteria that can be included in dashboards or reports. However, not all widgets can be applied to reports.

![Create widget in existing dashboard](images/ch04_img031.png)

## Filter events by time

It is possible to isolate events corresponding to a period of time to analyze in more detail the data associated with the selected attribute.

There are five ways to make a time filter:

- Time Period Filter
- Zoom Filter
- Custom Filter
- Advanced Search
- Attribute Filter

### Time period filter

A simple and fast way to view only events corresponding to a specific period of time is to select some of the options provided by the tabbed timeline filter:

![Event Filtering, Timeline](images/ch04_img032.png)

Event filtering, timeline

### Zoom filter

The user can select a period of time manually. To do this, click with the mouse at a specific point on the graph, drag and drop to the desired point in time. Afterward, you will be able to see the expanded time period on the graph.

After doing the above, you will see a new option in the submenu: **Filter zoom**

![Event filtering, zoom filter](images/ch04_img033.png)

Event filtering, zoom filter

### Custom filter

The **Custom** tab in the time range filtering line allows a custom filter. By dragging the mouse from one point to another in the month you want to query, specific data will be displayed. Therefore, we have the view for that time range, and the table below shows only the data contained in this strip.

Click **Submit** to apply the filter.

!!! tip "It is recommended..."
    After selecting the **Custom** time, it is possible to use the zoom filter if you want to analyze a period more accurately.

![Event filtering, custom filter](images/ch04_img034.png)

### Advanced search

To use this option, click on the **Filters** tab, which displays a submenu where you can find the **Advanced Search** option.

This is the option that allows for more detail since it is the user who determines the search conditions and, therefore, the filtering. You can choose from all the available attributes for this application.

You can add as many filtering conditions as you consider necessary, just be sure to indicate the attribute, start date, and end date you want to query.

- *Add search rule*: click (+)
- *Delete search rule*: click (-)

![Event filtering, advanced search](images/ch04_img035.png)

Event filtering, advanced search

You can save this search configuration as a filter; therefore, it will be available to query at any other time, both in the **View Saved Filters** option and in **Saved Filters** that you will find in the filter's contextual menu.

To load a saved filter, you can use the **View Saved Filters** button, select the filter, and click the Add Filter button.

![Event filtering, saved filter](images/ch04_img036.png)

Event filtering, saved filter

### Attribute filter

There are two ways to turn a value of an attribute into a filter:

- *Search Engine*: enter the value of the attribute you want to find and press Enter. The chosen filter will be automatically included. You can include as many filters as searches made.
- *Column Selection in the Table*: you can select one or more rows from the table to isolate the data related to those elements. For multiple selection, click on the different elements you want to filter; If you want to cancel the selection, click on the elements again.

Once the rows are selected, there will be the option to include or exclude the graphical elements, as well as the data table. To re-include them, press the **Filter Selected** button located at the top of the data table. To exclude them, you need to press the **Exclude Selected** button located next to the previous button.

![Event filtering, include and exclude attributes](images/ch04_img037.png)

Event filtering, include and exclude attributes

In the case of an individual selection, it is possible to perform the filter or exclusion more quickly:

1. *By clicking on the name of a sensor, the data will be included in the view. At this point, the label will show a color corresponding to the line/area/flow/bar that is shown in the view. To exclude, click on it again.*
2. *Open the dropdown menu next to each element of the table and contains the following options:*
    - **Filter**: adds the appropriate filter to include the element in the presented data.
    - **Exclude**: adds the appropriate filter to exclude the element from the presented data.
    - **Copy to clipboard**: the value of the selected item is copied to the clipboard so that it is available for later use.

![Event filtering, filter by attribute](images/ch04_img038.png)

Event filtering, filter by attribute
