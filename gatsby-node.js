/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const BlogService = require("./src/services/blog-service"),
      path = require('path'),
      fs = require("fs");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    
    const blogPosts = BlogService.getBlogPosts();

    const blogPostTemplate = path.resolve("./src/templates/blog-post.js");

    blogPosts.forEach(post => {

        console.log(`Adding page ${post.slug}...`);

        const path = BlogService.getBlogPostUrl(post);

        createPage({
            path,
            component: blogPostTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            // Path is automatically included in context
            context: {
                post
            },
        });
    });
};