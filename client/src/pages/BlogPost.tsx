import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { type Blog } from "@shared/schema";

// wouter passes route params as a prop
interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost: FC<BlogPostProps> = ({ params }) => {
  const { slug } = params;

  const { data: blogPost, isLoading, error } = useQuery<Blog>({
    queryKey: [`/api/blog/${slug}`],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-lg text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-4 max-w-md">
          <p className="text-xl text-destructive font-semibold">Blog post not found</p>
          <p className="text-muted-foreground">The article you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-8 max-w-3xl">
        {blogPost.imageUrl && (
          <img src={blogPost.imageUrl} alt={blogPost.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        )}
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <p className="text-muted-foreground text-lg mb-4">
          By {blogPost.publication} on {blogPost.date}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {blogPost.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown>{blogPost.content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
