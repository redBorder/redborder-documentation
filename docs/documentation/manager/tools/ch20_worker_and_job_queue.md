# Worker and Job Queue

In this option, users can check the status of the workers and the jobs running in the background. They can also verify which jobs have been completed.

**Workers** are programs that constantly run in the background while **Jobs** are programs that runs periodically or only once but does not remain running in the background. It runs and then closes.

![Worker and Job Queue: status of the worker list and job queue](images/worker_jobs_en.png)

Jobs can be launched manually by the menu **Worker Options**, but there are cases when a job needs to be deleted before launch them manually.

![Worker and Job Queue: Jobs possible to launch manually](images/worker_jobs_menu_launch_job_en.png)

**Delete Stored Job** deletes all stored jobs since a date each day at 00:00h. That date depends on the number of "days to keep the stored jobs" information (default: 90 days), which can be changed in a field of **General Settings**.
    
![Worker and Job Queue: Field of days to keep Stored Jobs](images/general_settings_input_deleteStoredJob_en.png)

**Stored Jobs** shows the list of completed services. You can check the status of each one via the "Information" icon or remove it from the list using the "Delete" icon. Also, you can search by the **name of the job**.

![Worker and Job Queue: list of jobs stored](images/stored_jobs_list_en.png)

**Information** icon allows to check status and other information of the job.

![Worker and Job Queue: Information message example in stored jobs](images/stored_jobs_info_en.png)

**Delete** icon delete from Stored Jobs the selected job.

![Worker and Job Queue: Delete message example in stored jobs](images/stored_jobs_delete_msg_en.png)

**Search** field allows you to search by the name of the job and it refreshes automatically each time a letter changes.

![Worker and Job Queue: Example searching by "r"](images/stored_jobs_filter_r_en.png)
![Worker and Job Queue: Example searching by "rb"](images/stored_jobs_filter_rb_en.png)
![Worker and Job Queue: Example searching by "x" to get a no result search](images/stored_jobs_filter_no_result_en.png)