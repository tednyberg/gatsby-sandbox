# Gatsby Sandbox
[![Netlify Status](https://api.netlify.com/api/v1/badges/4dedf9af-e9d5-4a01-9720-8d652b88a3c4/deploy-status)](https://app.netlify.com/sites/gatsby-sandbox/deploys)

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

## Härnäst för prototyp
* Förhandsgranskning med hjälp av Contentful Preview API
* Markdown-innehåll inklusive länkar till andra sidor och infogade bilder

### Mer att testa
* `gatsby-plugin-sitemap` för sitemaps
* Klientspecifika bibliotek (exempelvis sådana som behöver `window`): https://www.gatsbyjs.org/docs/using-client-side-only-packages/
* Kolla om Netlify är ett relevant alternativ: https://www.netlify.com/
* `gatsby-plugin-feed` för RSS-flöde(n)