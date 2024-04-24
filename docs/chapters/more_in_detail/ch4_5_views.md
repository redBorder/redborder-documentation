
# Views, multiple options for data visualization

Views provide multiple perspectives to display data associated with network traffic.

!!! info "Keep in mind..."
    In the **Dashboard** section, you can create custom widgets for each type of application to specify a type of view for displaying events.

Most of the Redborder Apps contain the following views (they may vary depending on the App):

- **Tops**: Aggregation of events based on a unit to display the most outstanding ones. It sums up the total data of different events to show them as a single event.
- **Raw**: View all raw data events, classified by attributes and time slots.
- **Compare**: Compare time intervals to analyze differences in the network's state.
- **Unique**: Displays the different elements that have interacted with the network according to the attribute.

![Views Menu](images/ch04_img042.png)

Views menu

!!! tip "It is recommended..."
    Combining views with different types of charts will give you multiple possibilities for data analysis.

## Tops

The *Tops* view allows us to see which events were the most prominent as we select the time interval. What we visualize in the chart is the sum of all these events shown as a single event. If you hover over each of these "peaks" or *Tops*, you'll see the event breakdown by date, time, and type of dimension or attribute you are checking.

![Tops View](images/ch04_img043.png)

*Tops* view

## Raw

This view provides raw data events; therefore, you will see the total number of events per attribute segmented by time slots.

Therefore, in the data table, we will gather all event data classified by columns. The data will be displayed on the screen; however, if you want to see more, simply scroll and wait for more data to load: *Load more*.

The Raw view can provide graphs in periods of the last 3, 5, 15, 30, or 60 minutes.

![Raw View](images/ch04_img044.png)

*Raw* view

!!! info "Keep in mind..."
    As shown in the image, the ideal chart type for the Raw view is data flows or **Flows**.

    In the Raw view, attributes are displayed in columns.

### Flow event management

The Raw view allows displaying all events collected by attributes and segmented by time slots. Combined with a flow chart, it also shows the data flow occurring in the network.

Each column in the data table shows the values corresponding to the selected attributes. In this table, we can perform various actions:

- **Timestamp**: you can see the time slot referenced to display the number of events that occurred at that moment. With a granularity greater than or equal to 2 minutes, events with less than two minutes difference between them are grouped into a single set. To separate them, simply click on the menu icon to the right of the row of the group in question.
- **Verify event information**: when reaching the maximum granularity of events, it is possible to see all the information in detail of a specific event. To do this, simply click on the information icon to the right of the row in question.
- **Create object**: some of the attributes shown in the event information allow the possibility of converting them into an Object. This means that these values can add a name and a description that allows the location of an item more quickly and easily.

!!! info "Keep in mind..."
    Remember that the maximum available granularity is 1 minute.

## Compare

This view gives the evolution of network usage when comparing two time intervals. This comparison can be done for hours or days at 5-minute intervals, ensuring a maximum degree of detail. With this, the user can quickly identify the peak network usage.

In the data table, you will see what corresponds to the selected time interval.

![Compare View](images/ch04_img045.png)

*Compare* view

## Unique

Through the **Unique** view, the user can obtain information about the different elements that have interacted, at least once, with the network within a specific period of time. When you place the mouse over any point of the graph, the user will get the total unique elements result for the selected time period.

- **Group by** (*only available in Unique view*): It allows us to group the data displayed on the chart based on a given attribute. This option provides filtering and classification of elements according to the analysis criteria we need.

![Unique View](images/ch04_img046.png)

*Unique* view

## Analyze (Malware module, WIP)

In this view, you can get a detailed analysis of a URL, IP, Hash, or a file, as if it had entered through other channels.

To do this, just enter the IP, URL, or Hash you want to analyze and click on **Search**. Or, if you want to analyze a file, you need to upload the file and then upload it to the platform by selecting **Upload**.

You can jump from one view to another without needing to go back to the Malware events interface by selecting it from the dropdown in the upper right margin.

![Analyze View](images/ch04_img047.png)

*Analyze* view
