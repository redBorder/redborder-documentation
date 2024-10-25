---
title: Home
---
<!-- Additional styles for landing page -->
  <style>
    .mdx-container {
      background-size: contain;
    }

    .mdx-hero {

    }
    .mdx-hero h1 {
        color: currentcolor;
        margin-bottom: 1rem;
        font-size: 2.6rem;
    }
    @media screen and (max-width: 29.9375em) {
        .mdx-hero h1 {
            font-size: 1.4rem;
        }
    }

    @media screen and (min-width: 60em) {
        .mdx-hero {
            align-items: stretch;
            display: flex;
        }
        .mdx-hero__content {
            max-width: 38rem;
        }
        .mdx-hero__image {
            order: 1;
            transform: translateX(4rem);
            width: 38rem;
        }
    }
    @media screen and (min-width: 76.25em) {
      .mdx-hero__image {
        transform: translateX(8rem);
      }
    }
    .mdx-hero .md-button {
      border-color: var(--hb-hero-color);
    }
    .mdx-hero .md-button--primary {
      color: var(--md-primary-fg-color);
      background-color: var(--hb-hero-color);
      border-color: transparent;
      margin-right: 0.5rem;
      margin-top: 0.5rem;
    }

    .md-main .md-button--primary {
      color: var(--md-primary-fg-color);
      background-color: var(--hb-hero-color);
      border-color: transparent;
    }

    nav[class="md-tabs"] {
      border-bottom: none;
    }
</style>

<div class="home-logo-item">
  <img src="/assets/images/redborder-logo-max-dark.png" alt="redborder" class="light-logo"/>
  <img src="/assets/images/redborder-logo-max-ligth.png" alt="redborder" class="dark-logo"/>
</div>

<section class="mdx-container">
  <div class="md-grid md-typeset">
    <div class="mdx-hero">
      <div class="mdx-hero__content">
        <h1>Open, Active and professional <div id="typewriter">NDR platform</div></h1>
        <h3>Redborder is an open-source Network Detection and Response (NDR) cybersecurity platform that helps monitor and visualize network incidents in real-time.</h3>
        <a href="manager/redborder_basics/ch2_redborder_installation/" class="md-button md-button--primary">
          Install Redborder
        </a>
        <a href="https://redborder.com/" class="md-button" target="_blank">
          Check our official website
        </a>
      </div>
    </div>
  </div>
</section>

## Welcome

This is the documentation page for RedBorder; we're glad you're here. Our documentation team is responsible for maintaining and adding more information as needed. Here you will find what you need to know to implement and deploy the platform, as well as various topics of interest for your installation.

## Navigating the Site

### Getting started

Right now, you're on the homepage. In the top menu, available even on mobile devices, you'll see all the main sections of the documentation site. If you click on a section (*"Guides," for example*), you'll see a list of *subordinate items* to each main section in the left margin.

When you open a document, you'll see a table of contents in the right margin with clickable links (*If you're browsing from a mobile device, it's recommended to put the device in landscape mode*). For long documents, the table of contents makes navigating around the document easy. If you're reading a long document and want to go back up, simply scroll slightly up, and a new button will appear that, when clicked, will take you to the top of the page.

The documentation sections are as follows:

- **Guides**: covering specific ways to configure and use RedBorder.
- **Manager**: detailed information on different aspects of the RedBorder manager.
- **Proxy**: detailed information on the RedBorder proxy.
- **IPS**: detailed information on the RedBorder IPS.
- **Release notes**: information about RedBorder releases, updates, and versions.
- **RedBorder**: link to the official website.

### Languages

We want to make our documentation accessible to everyone. Currently, our documentation is available in Spanish and English. Future versions may include translations into other languages.

!!! info "Please Note..."

    Due to an inherent limitation in MkDocs, some platform functions may not be available in all languages.

### Using search

The platform features a comprehensive search function. You can use it to quickly search for specific information. Simply start typing in the "Search" input field in the top menu bar, and the site will return search results.

To open a page in the search results, simply click (or tap on mobile) on the desired page in the displayed list.

### What's next

If this is your first time visiting this documentation platform, you can visit the [getting started](guides/getting_started/first_steps.md) page to see initial information when learning about RedBorder.

If you have questions that are not covered, feel free to reach out to us; our contact methods are available on our [official website](https://redborder.com/).
