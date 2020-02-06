// NOTE: We definitely should convert to TypeScript for real-life implementation (typings are included in Umbraco client package)

const Client = require("@umbraco/headless-client").Client

const PageNode = require("./node-factories").PageNode

exports.sourceNodes = async ({ actions }, pluginOptions) => {

    const { createNode, createParentChildLink } = actions
       
    console.log(`Sourcing Heartcore content from project ${pluginOptions.projectAlias}...`);

    const client = new Client({ projectAlias: pluginOptions.projectAlias })

    const createNodes = async (pages = [], parent) => {
  
        for(var i=0;i<pages.length;i++) {

            let page = pages[i];

            switch(page.contentTypeAlias) {
                case "homePage":
                case "blog":
                case "blogPost":
                    const pageNode = PageNode(page, parent);
                    const node = createNode(pageNode);
                    
                    if (page._hasChildren) {
                        console.log(`Retrieving children under page "${page.name} [${page._id}]..."`)
                        const children = await client.delivery.content.children(page._id);
                        
                        if (children && children.totalPages > 0) {
                            console.log(`"${page.name}" has ${children.totalPages} children`);
                            await createNodes(children.hits, node);
                        }
                        else {
                            console.log(`"${page.name}" doesn't have any children`);
                        }
                    }
    
                    // Specify permanent relationship to parent (in our case child content may not exist without its parent, see "Adding relationships between nodes": https://www.gatsbyjs.org/docs/creating-a-source-plugin/)
                    if (parent) {
                        createParentChildLink({ parent: parent, child: node});
                    }
                    break;
                default:
                    console.log(`Skipping unsupported content "${page.name}" of type ${page.contentTypeAlias}`);
                    break;
            }
        }
    }

    // Apply API key if specified (required if content delivery API is protected)
    if(pluginOptions.apiKey) {
        client.setAPIKey(pluginOptions.apiKey);
    }

    const rootContent = await client.delivery.content.root()

    await createNodes(rootContent);

    //Getting the content from the method where a media item is targeted by its Id
    // const mediaResult = await client.delivery.media.byId('b21f3fc4-7d8e-47f7-885b-65b770cb5374')

    //Printing to the console as JSON with indentation for readability
    // console.log(JSON.stringify(rootContent, null, 2))
    
    // console.log(JSON.stringify(mediaResult, null, 2))

    // Process data into nodes.
    // data.forEach(datum => createNode(processDatum(datum)))
    
    // We're done, return.
    return;
}