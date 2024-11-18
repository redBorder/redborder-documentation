# How to generate Books

Github actions is generating the books on every build.
Check **Actions** in github, open the latest successful build, click on **Upload PDF artifacts** and click the link to download.

Actual Books:

- **Redborder_NDR_Manager_Installation_Guide**: How to install Redborder NDR Manager
- **Redborder_NDR_Intrusion_Installation_Guide**: How to install Redborder NDR INtrusion
- **Redborder_NDR_Flowgate_Installation_Guide**: How to install Redborder NDR Flowgate
- **Redborder_NDR_User_Manual**: How to use Redborder NDR platform
- **Redborder_NDR_API_Guide**: How to use Redborder NDR API

In case you want to manually build them:

## Installation

Clone the project and cd into build_pdf directory. Execute the following command:
```bash
pip3 install -r requirements.txt 
```

## Using mkdocs build

Execute the following command:
```bash
cd build_pdf
mkdocs build -f path_to_config_file.yml
```

## Using the build script:

Execute the following command:
```bash
./build_all.sh
```