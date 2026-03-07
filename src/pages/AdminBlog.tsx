import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, createPost, updatePost, deletePost } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Plus, Pencil, Trash2, Home, LogOut } from "lucide-react";
import { format } from "date-fns";

export default function AdminBlog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");

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
      alert("Gagal memuat postingan blog. Pastikan server backend Anda berjalan.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setExcerpt("");
    setCoverImage("");
    setContent("");
    setIsEditing(false);
    setCurrentId(null);
  };

  const handleEdit = (post: any) => {
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt || "");
    setCoverImage(post.cover_image || "");
    setContent(post.content);
    setIsEditing(true);
    setCurrentId(post.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus postingan ini?")) {
      try {
        await deletePost(id);
        alert("Postingan berhasil dihapus!");
        loadPosts();
      } catch (error) {
        console.error("Failed to delete post", error);
        alert("Gagal menghapus postingan.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { title, slug, excerpt, cover_image: coverImage, content };
      
      if (isEditing && currentId) {
        await updatePost(currentId, payload);
        alert("Postingan berhasil diperbarui!");
      } else {
        await createPost(payload);
        alert("Postingan berhasil dibuat!");
      }
      resetForm();
      loadPosts();
    } catch (error) {
      console.error("Failed to save post", error);
      alert("Gagal menyimpan postingan. Pastikan token bearer di .env sudah benar.");
    }
  };

  const autoGenerateSlug = (value: string) => {
    setTitle(value);
    if (!isEditing) {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(generatedSlug);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 bg-card p-6 rounded-2xl border shadow-sm">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Blog Dashboard
            </h1>
            <p className="text-muted-foreground text-sm">Kelola konten blog website Adsmedia</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to="/blog"><Home className="w-4 h-4 mr-2" /> Lihat Blog</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/"><LogOut className="w-4 h-4 mr-2" /> Keluar</Link>
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Create / Edit */}
          <Card className="lg:col-span-1 shadow-sm h-fit sticky top-8">
            <CardHeader>
              <CardTitle>{isEditing ? "Edit Postingan" : "Buat Postingan Baru"}</CardTitle>
              <CardDescription>
                {isEditing ? "Perbarui konten yang ada." : "Tambahkan artikel blog baru ke website Anda."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Judul</label>
                  <Input 
                    value={title} 
                    onChange={(e) => autoGenerateSlug(e.target.value)} 
                    placeholder="Masukkan judul artikel" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Slug URL</label>
                  <Input 
                    value={slug} 
                    onChange={(e) => setSlug(e.target.value)} 
                    placeholder="contoh-judul-artikel" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">URL Gambar Sampul (Opsional)</label>
                  <Input 
                    value={coverImage} 
                    onChange={(e) => setCoverImage(e.target.value)} 
                    placeholder="https://example.com/image.jpg" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Ringkasan Singkat (Excerpt)</label>
                  <Textarea 
                    value={excerpt} 
                    onChange={(e) => setExcerpt(e.target.value)} 
                    placeholder="Tulis ringkasan singkat artikel..." 
                    className="resize-none"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Konten Lengkap (HTML Didukung)</label>
                  <Textarea 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    placeholder="<p>Tulis konten lengkap di sini...</p>"
                    required
                    className="min-h-[200px]"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    {isEditing ? "Simpan Perubahan" : "Terbitkan Artikel"}
                  </Button>
                  {isEditing && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Batal
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Table List */}
          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Daftar Artikel</CardTitle>
                <CardDescription>Kelola artikel blog yang sudah terbit.</CardDescription>
              </div>
              <Button size="sm" onClick={resetForm} disabled={!isEditing} variant={isEditing ? "default" : "secondary"}>
                <Plus className="w-4 h-4 mr-2" /> Baru
              </Button>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground bg-muted/50 rounded-lg border border-dashed mt-4">
                  Belum ada artikel. Mulai buat artikel pertama Anda!
                </div>
              ) : (
                <div className="border rounded-md mt-4 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead>Judul</TableHead>
                        <TableHead>Tanggal</TableHead>
                        <TableHead className="text-right">Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {posts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell className="font-medium max-w-[200px] truncate" title={post.title}>
                            {post.title}
                            <div className="text-xs text-muted-foreground font-normal truncate">
                              /{post.slug}
                            </div>
                          </TableCell>
                          <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                            {format(new Date(post.created_at), "dd MMM yyyy")}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}>
                                <Pencil className="w-4 h-4 text-primary" />
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
