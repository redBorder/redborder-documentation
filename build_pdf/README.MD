# How to generate PDFs version
Github actions is generating the pdfs on every build.
Check **Actions** in github, open the latest successful build, click on **Upload PDF artifacts** and click the link to download.

Actual PDFs:

- **redBorderGettingStartedGuide**: How to install Redborder
- **redBorderManual**: How to use Redborder web platform

In case you want to build them yourself follow these steps..

## Installation

Clone the project and cd into build_pdf directory. Execute the following command:
```bash
pip3 install -r requirements.txt 
```

## Manual Build

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