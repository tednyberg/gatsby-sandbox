import BlogPost from "../models/BlogPost"

export default class BlogService {

    static getBlogPostUrl(post: BlogPost): string {

        const postDate = new Date(post.date);

        const year = postDate.getFullYear(),
              month = postDate.getMonth()+1;

        return `/blog/${year}/${month}/${post.slug}/`;
    }

    static getBlogPosts() : Array<BlogPost> {

        // I praktiken skulle här ske ett API-anrop för att hämta alla bloginlägg
        return [{
            "id": 1,
            "title": "Första inlägget",
            "description": "Lorem ipsum.",
            "slug": "forsta-inlagget",
            "date": "2020-01-04"
        },
        {
            "id": 2,
            "title": "Andra inlägget",
            "description": "Lorem ipsum.",
            "slug": "andra-inlagget",
            "date": "2020-01-06"
        },
        {
            "id": 3,
            "title": "Tredje inlägget",
            "description": "Lorem ipsum.",
            "slug": "ett-helt-annat-url-segment",
            "date": "2020-01-08"
        }]
    }
}