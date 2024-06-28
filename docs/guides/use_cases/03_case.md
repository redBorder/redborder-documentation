# Detecting an Eternalblue Attack with Redborder

In this case, we will see how Redborder can use Snort rules to detect an Eternalblue attack.

It all starts with a malicious phishing email which contains a dropper that installs ransomware. The ransomware will try to use a known exploit to take control of all possible machines.

![Eternalblue attack: scenario](images/ch30_img004_a.png)

Eternalblue attack: scenario

Redborder can use Snort rules to detect the SMBv1 protocol echo response used by the ransomware, so we can use the intrusion module to see the signatures to identify the attack.

![Eternalblue attack: Intrusion](images/ch30_img004_b.png)

Eternalblue attack: Intrusion

Here we can see the current signatures collected by Redborder.

![Eternalblue attack: filtering signature](images/ch30_img004_c.png)

Eternalblue attack: filtering signature

Once we have filtered the Eternalblue signature, we can show the SRC Address metric to track IPs involved in the attack.

![Eternalblue attack: selecting SRC Address metric](images/ch30_img004_d.png)

Eternalblue attack: selecting SRC Address metric

Now we have the IPs of the machines involved, so it is possible to take actions to solve the security hole.

![Eternalblue attack: IPs involved in the attack](images/ch30_img004_e.png)

Eternalblue attack: IPs involved in the attack

!!! info "Keep in mind..."
  
    It is important to have an updated version of Snort rules to detect weird behaviour and traffic with Redborder.
