import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchPosts } from "@/services/api";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      console.error("Failed to load posts", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container-custom pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Blog Adsmedia</h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-muted-foreground mt-10">Belum ada postingan blog.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-card rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
                {post.cover_image && (
                  <img src={post.cover_image} alt={post.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <div className="text-xs text-muted-foreground mb-2 font-medium">
                    {format(new Date(post.created_at), "dd MMMM yyyy")}
                  </div>
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt || "Tidak ada ringkasan..."}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="text-primary font-medium hover:underline text-sm">
                    Baca selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
