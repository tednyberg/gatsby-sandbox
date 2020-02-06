# Gatsby Sandbox

## Produktionsmiljö
[![Netlify Status](https://api.netlify.com/api/v1/badges/4dedf9af-e9d5-4a01-9720-8d652b88a3c4/deploy-status)](https://app.netlify.com/sites/gatsby-sandbox/deploys)

## Förhandsgranskningsmiljö
[![Netlify Status](https://api.netlify.com/api/v1/badges/fec68423-f7dc-4a53-9344-1dc3bc4dcd5a/deploy-status)](https://app.netlify.com/sites/gatsby-sandbox-preview/deploys)

### Sammanfattning av uppsättning
* installerade Gatsby med deras "hello world"-boilerplate (med yarn som pakethanterare)
* lade till `typescript` och relevanta typings som dev dependencies
* skapade `tsconfig.json` och `tslint.json`
* lade till skript `type-check` i `package.json`
* lade till `CreatePages.ts` och `GatsbyTypes.ts` för att kunna använda TypeScript för `createPages` i `gatsby-node.js` (inspirerat av https://gist.github.com/clarkdave/53cc050fa58d9a70418f8a76982dd6c8#file-types-ts)
* lade till `gatsby-plugin-typescript`-paketet och lade till det bland `plugins` i `gatsby-config.js`
* Skapade några statiska sidor under `src/pages` samt en mall under `src/templates`
* Lade till några mockup-blogginlägg i `gatsby-node.js`
* Lade till `gatsby-source-contentful`-paketet för att hämta blogginlägg från en trial-version av Contentful
* Lade till `netlify.toml` för Netlify-konfiguration
* Lade till `gatsby-transformer-remark` för att konvertera Markdown-innehåll från Contentful

## Testat i prototyp
* Förhandsgranskning med hjälp av Contentful Preview API
* Markdown-innehåll med hjälp av `gatsby-transformer-remark`
* Source plugin för Heartcore, med stöd av `@umbraco/headless-client` och `gatsby-node-helpers`

### Mer att testa
* Länkade filer i Markdown-innehåll med `gatsby-remark-copy-linked-files`
* Bilder i Markdown-innehåll med `gatsby-remark-images`
* Bilder via Cloudinary med `gatsby-transformer-cloudinary` 
* `gatsby-plugin-sitemap` för sitemaps
* Klientspecifika bibliotek (exempelvis sådana som behöver `window`): https://www.gatsbyjs.org/docs/using-client-side-only-packages/
* Kolla om Netlify är ett relevant alternativ: https://www.netlify.com/
* `gatsby-plugin-feed` för RSS-flöde(n)
* "On-demand template" för att kunna förhandsgranska ett visst Contentful-innehåll utan att omgenerera sajten (exempelvis blogginlägg)
* Utvärdera prestanda med **Google Lighthouse**
* "Critical CSS"-stöd i Gatsby