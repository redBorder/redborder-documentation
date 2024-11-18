# Mitre matrix

The Mitre matrix is a threat intelligence framework that allows us to identify the different types of attacks that can be carried out against a system. This information can be imported into the platform to be used to complement other sections of the platform, like **Incidents** or **Dashboards**.

By default, the Mitre matrix needs to be downloaded from the official website. 

![No Mitre downloaded](images/mitre_empty.png)

### Mitre Tactics overview

Just press the download button and come back in a minute. After that, you can see the **Mitre Tactics** list.

![Mitre Tactics](images/mitre_tactics.png)

The default list will show all the tactics that the MITRE framework has defined with the number of IPS rules associated with each one.

### Mitre Matrix view

The Mitre matrix is a table that shows the different techniques that have been triggered by any intrusion event during a certain period of time. Like other modules, the time frame can be edited to filter the information you are looking for, as well as other unique fields like **tactics** and **techniques**.

![Mitre Matrix](images/mitre_matrix.png)

The cells of the matrix are colored according to the highest of the severities defined on the triggered rules, which indicates the level of impact that the attack can have on the system. On the other hand, the number indicates the number of rules that have been triggered by the attack.

It is useful to have a global view of the attacks that have been carried out against the system, especially when different techniques are used to carry out the attack because it can mean that the attack may have a high impact on the system. It is also useful to prioritize the actions to be taken to mitigate the attack, or simply cover the vulnerabilities that can be exploited.