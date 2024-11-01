
# Anomaly Detection

## Enabling Anomaly Detection
Enable anomaly detection from General Settings -> outliers. In the Tops view of each module, the "Outliers" option will appear in the event dropdown menu.

![Anomalies](images/ch04_img048.png)

The system will perform anomaly detection and update the graph with the results.

![Detected Anomalies](images/ch04_img0049.png)

In the resulting graph, the dotted line corresponds to the prediction while the circles represent the detected anomalies.

![Anomaly Details](images/ch04_img050.png)

When hovering over the graph, it displays the actual value, the expected value, and the prediction value.

## Automating Anomaly Detection

To automate this process, it is possible to create alarms in the system that will notify the user when anomalies occur. To do this, click on **Tools -> Alarms** and adjust the alarm parameters, enabling the **Outliers Enabled** option, setting the Time Window, and the conditions or filters on which to perform the detection.

![Anomaly Alarms](images/ch04_img051.png)

If email notification has been configured, the user will receive an email notification when the alarm is triggered.

![Email Alarm Notification](images/ch04_img0052.png)
