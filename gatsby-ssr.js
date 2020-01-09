/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// Här kan vi exportera API:er som ska köras genom Node när de statiska HTML-filerna byggs
// Notera att vissa saker kan behöva finnas _både_ här och i gatsby-browser.js, om det är
// saker som ska göras både vid första serverrendering och i klienten

// Add class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
    setBodyAttributes({
      className: "server-side-body-class",
    })
  }