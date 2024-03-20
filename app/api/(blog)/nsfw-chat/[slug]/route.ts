import { NextResponse } from "next/server";

    const post:any = [
      {title: 'Anahsa NSFW', description: 'Anahsa NSFW AI Chat with Anahsa NSFW and create unique AI Chat and NSFW AI characters .Want to discover NSFW chat related to then chat with Anahsa NSFW'},
      {title: 'Abby Lynn NSFW', description: 'Abby Lynn NSFW AI Chat with Abby Lynn NSFW and create unique AI Chat and NSFW AI characters .Want to discover NSFW chat related to then chat with Abby Lynn NSFW'},
      {title: 'Abby Opel NSFW', description: 'Abby Opel NSFW AI Chat with Abby Opel NSFW and create unique AI Chat and NSFW AI characters .Want to discover NSFW chat related to then chat with Abby Opel NSFW'},
     
    ]

    export async function GET(request: Request, context: any) {
      const { slug } = context.params; // Assuming your route uses a slug parameter
      
      const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-"); // Normalize slug
      
      const matchingPost = post.find((post: any) => {
        // Normalize post title for comparison
        const normalizedTitle = post.title.toLowerCase().replace(/\s+/g, "-");
        return normalizedTitle === normalizedSlug;
      });
    
      return NextResponse.json({
        post: matchingPost || null,
      });
    }