import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Chatbotblog from "@/components/chatbotblog";
import type { Metadata, ResolvingMetadata } from 'next';

async function getPostBySlug(slug: string) {
  const response = await fetch(`https://onlyfansai.online/api/onlyfans-leak/${slug}`, {
    next: { revalidate: 3600 },
    method: "GET",
  });

  return response.json();
}

type Props = {
  params: { slug: string };
  
};

export async function generateMetadata(
  { params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const { post } = await getPostBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    
    },
  };
}

export default async function TicketDetails({ params }: Props) {
  const { post } = await getPostBySlug(params.slug); // Use slug from params

  let imageUrl = "/nsfww/2.jpg";

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex items-center">
          <div className="relative h-24 w-24 mr-4">
            <Image
              src="/chat/1.jpg" // Replace with your actual image path
              alt="Post Image"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
              // Consider adding security headers (Content-Security-Policy)
              // to mitigate potential vulnerabilities related to image loading
            />
          </div>
          <div>
            <h1 className="text-xl font-bold mb-1 pl-4">{post.title}</h1>
            <p className="text-sm mb-1 pl-4">{post.description}</p>
            <div className="flex items-center justify-center">
              <Badge variant="destructive" className="pl-2">
                Remember: Everything Character says is made up
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-4" />

      <div className="flex justify-center items-center mt-10">
        <Chatbotblog title={post.title} />
      </div>
    </div>
  );
}