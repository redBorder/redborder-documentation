---
title: Inicio
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
        <h1>Abierta, Activa y Profesional <div id="typewriter">Plataforma NDR</div></h1>
        <h3>Redborder es una plataforma de ciberseguridad de código abierto para la Detección y Respuesta en Redes (NDR) que ayuda a monitorear y visualizar incidentes en la red en tiempo real.</h3>
        <a href="manager/redborder_basics/ch2_redborder_installation/" class="md-button md-button--primary">
          Instala Redborder
        </a>
        <a href="https://redborder.com/" class="md-button" target="_blank">
          Visita nuestro sitio web oficial
        </a>
      </div>
    </div>
  </div>
</section>

## Bienvenido

Esta es la página de documentación de RedBorder; nos complace que esté aquí. Nuestro equipo de documentación se encarga de mantenerla y agregar más en caso de ser necesaria. Aquí encontrará lo que necesita saber para implementar y desplegar la plataforma, así como también varios temas de interés para su instalación.

## Navegar por el sitio

### Comenzando

En este momento se encuentra en la página principal. En el menú superior, disponible aún en dispositivos móviles, verá todas las secciones principales de la documentación. Si hace clic en alguna sección, (*"Guides" por ejemplo*) verá en el margen izquierdo una lista de *elementos subordinados* a cada sección principal.

Al abrir un documento, verá una tabla de contenidos en el margen derecho con links que puede clicar (*Si está navegando desde un dispositivo móvil, se recomienda colocar el dispositivo en horizontal*). Para documentos largos la tabla de contenidos hará desplazarse alrededor del documento con facilidad. Si está leyendo un documento extenso y desea volver hacia arriba, desplácese ligeramente hacia arriba, un nuevo botón aparecerá y que al clicarlo, le llevará al inicio de la página.

Las secciones de documentación son las siguientes:

- **Guides**: que cubren formas específicas de configurar y usar RedBorder.
- **Manager**: información detallada sobre los diferentes aspectos del manager de RedBorder.
- **Proxy**: información detallada sobre el proxy de RedBorder.
- **IPS**: información detallada sobre el IPS de RedBorder.
- **Release notes**: información sobre los lanzamientos actualizaciones y versiones de RedBorder.
- **RedBorder**: link al sitio oficial

### Idiomas

Queremos hacer que nuestra documentación se accesible para todos. De momento, nuestra documentación se encuentra disponible en español e inglés. Futuras versiones podrían llegar a incluir traducciones a otros idiomas

!!! info "Ten en cuenta..."

    Debido a una limitación inherente a MkDocs, puede que algunas funciones de la plataforma no estén disponibles en todos los idiomas.

### Utilizando la búsqueda

La plataforma cuenta con una función de búsqueda integral. Puede utilizarla para buscar información específica de manera rápida. Simplemente comience a escribir en el campo de entrada "Buscar" en la barra de menú superior y el sitio devolverá los resultados de la búsqueda.

Para abrir una página en los resultados de la búsqueda simplemente haga clic (o toque en el móvil) en la página deseada en la lista mostrada.

### ¿Qué es lo siguiente?

Si esta es su primera vez visitando esta plataforma de documentación, puede visitar la página [primeros pasos](guides/getting_started/first_steps.es.md) para ver la información inicial para aprender sobre RedBorder.

Si llega a tener dudas que no se encuentran cubiertas, puede acudir a nosotros, nuestros métodos de contacto están disponibles en nuestro [sitio oficial](https://redborder.com/).
