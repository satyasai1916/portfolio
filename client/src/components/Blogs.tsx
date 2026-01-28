import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { type Blog } from "@shared/schema";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

interface BlogsProps {
  blogs: Omit<Blog, "content">[];
}

const Blogs: FC<BlogsProps> = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section id="blogs" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="heading-blogs"
          >
            Tech Blogs & Articles
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and thoughts on various technologies, development practices, and industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="block hover:no-underline">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl md:text-2xl">{blog.title}</CardTitle>
                    <ArrowUpRight size={20} className="text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base text-muted-foreground">
                    {blog.publication} - {blog.date}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
