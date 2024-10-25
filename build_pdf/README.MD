# How to generate PDFs version

- **redBorderGettingStartedGuide**: How to install Redborder
- **redBorderManual**: How to use Redborder web platform

## Installation

Clone the project and cd into build_pdf directory. Execute the following commando tin stall the pip dependencies:
```bash
pip3 install -r requirements.txt 
```

## Manual Build

Executing the following command:
```bash
cd build_pdf
mkdocs build -f path_to_config_file.yml
```

## Using the build script:

Execute the bash script:
```bash
bash build_all.sh
```

## Getting the PDFs from github actions

Github actions is generating the pdfs on every build.
Check **Actions** in github, open the latest successful build, click on **Upload PDF artifacts** and click the link to download.
