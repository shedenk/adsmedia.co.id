import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchPostBySlug, fetchPosts } from "@/services/api";
import { format } from "date-fns";
import { Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      loadPost(slug);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [slug]);

  const loadPost = async (slugId: string) => {
    try {
      setLoading(true);
      const data = await fetchPostBySlug(slugId);
      setPost(data);

      const allPosts = await fetchPosts();
      const recs = allPosts.filter((p: any) => p.slug !== slugId).slice(0, 3);
      setRecommendations(recs);

    } catch (error) {
      console.error("Failed to load post", error);
      navigate("/404");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container-custom pt-32 pb-20 max-w-4xl mx-auto">
        
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Kembali ke Blog
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : post ? (
          <article className="bg-card rounded-2xl shadow-sm border p-8 md:p-12">
            {post.cover_image && (
              <img 
                src={post.cover_image} 
                alt={post.title} 
                className="w-full h-auto max-h-[400px] object-cover rounded-xl mb-10" 
              />
            )}
            
            <header className="mb-10 text-center">
              <div className="text-sm text-primary mb-3 font-medium">
                {format(new Date(post.created_at), "dd MMMM yyyy")}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
            </header>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {recommendations.length > 0 && (
              <div className="mt-16 pt-10 border-t">
                <h3 className="text-2xl font-bold mb-6">Artikel Terkait</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendations.map(rec => (
                    <Link to={`/blog/${rec.slug}`} key={rec.id} className="group cursor-pointer">
                      <div className="aspect-video relative overflow-hidden rounded-lg mb-3">
                        {rec.cover_image ? (
                          <img src={rec.cover_image} alt={rec.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">No Image</span>
                          </div>
                        )}
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {rec.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-2">
                        {format(new Date(rec.created_at), "dd MMM yyyy")}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        ) : null}

      </div>
      <Footer />
    </main>
  );
}
