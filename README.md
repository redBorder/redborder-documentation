## redBorder documentation

Welcome to the official documentation for redBorder. Site is deployed at https://docs.redborder.com.

## Installation

This documentation site uses [MkDocs](https://www.mkdocs.org/) along with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

Install python dependencies using pip:
```bash
pip3 install -r requirements.txt
```

## Running local site

Run site locally at http://localhost:8000:
```bash
mkdocs serve
```

To run the site on a different port, such as 8080:
```bash
mkdocs serve --dev-addr=127.0.0.1:8080
```

Build site for production:
```bash
mkdocs build
```

## Building PDFs version

Get into [build_pdf](https://github.com/redBorder/redborder-documentation/tree/master/build_pdf) directory and folow the README steps.
## License

MIT license.
