/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Här kan vi exportera API:er som ska användas på klientsidan, dvs i webbläsaren som har
// laddat de statiska HTML-filerna

// Log when client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log(`Route path changed to '${location.pathname}' from '${prevLocation ? prevLocation.pathname : null}'`);
}