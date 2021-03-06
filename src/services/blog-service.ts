import BlogPost from "../models/BlogPost"
import { promised } from "q";

export default class BlogService {

    static getBlogPostUrl(post: BlogPost): string {

        const postDate = new Date(post.date);

        const year = postDate.getFullYear(),
              month = postDate.getMonth()+1;

        return `/blog/${year}/${month}/${post.slug}/`;
    }

    static getBlogPosts(graphql: any) : Promise<Array<BlogPost>> {
        // Combine API and mock blog posts
        var promise = new Promise<Array<BlogPost>>((accept, reject) => {
            this.getContentfulBlogPosts(graphql).then(posts => {

                const allBlogPosts = posts.concat(this.getMockBlogPosts());

                allBlogPosts.sort((a, b) => (a.date > b.date) ? 1 : -1);

                accept(allBlogPosts);
            });
        });

        return promise;
    }

    static getContentfulBlogPosts(graphql: any) : Promise<Array<BlogPost>> {

        const promise = new Promise<Array<BlogPost>>((resolve, reject) => {
            graphql(`query BlogPosts {
                allContentfulBlogPost  {
                    edges {
                        node {
                            id,
                            title,
                            description {
                                description
                            }
                            slug,
                            date,
                            mainBody {
                                childMarkdownRemark {
                                    html,
                                    excerpt
                                }
                            }
                        }
                    }
                }
            }`).then((result: any) => {
                
                const posts = new Array<BlogPost>();

                result.data.allContentfulBlogPost.edges.forEach((edge: any) => {

                    posts.push({
                        id: edge.node.id,
                        title: edge.node.title,
                        description: edge.node.description.description,
                        slug: edge.node.slug,
                        date: edge.node.date,
                        mainBody: edge.node.mainBody?.childMarkdownRemark?.html // Optional chaining requires TypeScript 3.7+ (if not available in VS Code, hit CTRL+SHIFT+P and "Select TypeScript Version" and select the workspace version)
                    })
                });

                resolve(posts);
            });
        });

        return promise;
    }

    static getMockBlogPosts() : Array<BlogPost> {
        return [{
            "id": "mock-1",
            "title": "Första inlägget",
            "description": "Lorem ipsum.",
            "slug": "forsta-inlagget",
            "date": "2020-01-04",
            "mainBody": ""
        },
        {
            "id": "mock-2",
            "title": "Andra inlägget",
            "description": "Lorem ipsum.",
            "slug": "andra-inlagget",
            "date": "2020-01-06",
            "mainBody": ""
        },
        {
            "id": "mock-3",
            "title": "Tredje inlägget",
            "description": "Lorem ipsum.",
            "slug": "ett-helt-annat-url-segment",
            "date": "2020-01-08",
            "mainBody": ""
        }]
    }
}