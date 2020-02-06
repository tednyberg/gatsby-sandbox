const createNodeHelpers = require("gatsby-node-helpers").default

const {
  createNodeFactory,
  generateNodeId,
  generateTypeName,
} = createNodeHelpers({
    typePrefix: "Heartcore"
});

const CONTENT_TYPE = "Page";

exports.PageNode = createNodeFactory(CONTENT_TYPE, node => {

    console.log(`Creating node for page "${node.name}" [${node._id}]...`);
    console.log(JSON.stringify(node, null, 2));

    node.id = generateNodeId(CONTENT_TYPE, node._id);

    return node;
});