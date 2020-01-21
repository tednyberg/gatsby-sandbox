import { resolve } from 'path'
import { GatsbyCreatePages } from './GatsbyTypes'
import BlogService from "./src/services/blog-service"

interface Props {
    graphql: any;
    boundActionCreators: any
}

export const createPages: GatsbyCreatePages = async (props: Props) => {
    const { createPage } = props.boundActionCreators

    const blogPostTemplate = resolve("./src/templates/blog-post.tsx");

    var promise = new Promise((resolve, reject) => {
        BlogService.getBlogPosts(props.graphql).then(blogPosts => {
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

            resolve();
        });
    });

    return promise;
}