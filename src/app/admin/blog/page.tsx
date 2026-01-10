"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { NeonCard } from "@/components/ui/neon-card";
import { Button } from "@/components/ui/button";

type BlogRow = {
  id: string;
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  author: string | null;
  read_time: string | null;
  published: boolean;
  created_at: string | null;
  updated_at: string | null;
};

const categories = [
  "Product Insights",
  "Technical",
  "Thought Leadership",
  "Industry Trends",
  "Case Study",
];

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogRow[]>([]);
  const [loading, setLoading] = useState(true);

  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogRow | null>(null);

  const [filter, setFilter] = useState<"all" | "published" | "drafts">("all");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: categories[0],
    author: "Algoarn Team",
    read_time: "5 min read",
    published: false,
  });

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/blog", { cache: "no-store" });
    const json = await res.json();
    setPosts(json.data || []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const visiblePosts = useMemo(() => {
    if (filter === "published") return posts.filter((p) => p.published);
    if (filter === "drafts") return posts.filter((p) => !p.published);
    return posts;
  }, [posts, filter]);

  function resetForm() {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: categories[0],
      author: "Algoarn Team",
      read_time: "5 min read",
      published: false,
    });
  }

  function handleTitleChange(title: string) {
    setFormData((p) => ({
      ...p,
      title,
      slug: generateSlug(title),
    }));
  }

  async function handleSubmit() {
    if (!formData.title.trim()) return alert("Title is required");
    if (!formData.slug.trim()) return alert("Slug is required");
    if (!formData.excerpt.trim()) return alert("Excerpt is required");
    if (!formData.content.trim()) return alert("Content is required");

    setSaving(true);

    const payload = {
      title: formData.title.trim(),
      slug: formData.slug.trim(),
      excerpt: formData.excerpt.trim(),
      content: formData.content,
      category: formData.category,
      author: formData.author.trim() || "Algoarn Team",
      read_time: formData.read_time.trim() || "5 min read",
      published: !!formData.published,
    };

    const url = editingPost ? `/api/admin/blog/${editingPost.id}` : "/api/admin/blog";
    const method = editingPost ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    setSaving(false);

    if (!res.ok) {
      alert(json.error || "Save failed");
      return;
    }

    alert(editingPost ? "Post updated successfully!" : "Post created successfully!");
    setIsCreating(false);
    setEditingPost(null);
    resetForm();
    await load();
  }

  function handleEdit(post: BlogRow) {
    if (!post?.id) {
      alert('Missing id for this post. Ensure "id" is uuid primary key and returned from API.');
      return;
    }

    setEditingPost(post);
    setFormData({
      title: post.title ?? "",
      slug: post.slug ?? "",
      excerpt: post.excerpt ?? "",
      content: post.content ?? "",
      category: post.category ?? categories[0],
      author: post.author ?? "Algoarn Team",
      read_time: post.read_time ?? "5 min read",
      published: !!post.published,
    });
    setIsCreating(true);
  }

  async function handleDelete(id: string) {
    if (!id) return alert('Missing id to delete (got "undefined")');
    if (!confirm("Are you sure you want to delete this post?")) return;

    const res = await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
    const json = await res.json();

    if (!res.ok) {
      alert(json.error || "Delete failed");
      return;
    }

    alert("Post deleted successfully!");
    await load();
  }

  async function handleTogglePublish(post: BlogRow) {
    if (!post?.id) return alert('Missing id to publish/unpublish (got "undefined")');

    const res = await fetch(`/api/admin/blog/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !post.published }),
    });

    const json = await res.json();
    if (!res.ok) {
      alert(json.error || "Update failed");
      return;
    }

    await load();
  }

  function handleCancel() {
    setIsCreating(false);
    setEditingPost(null);
    resetForm();
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Blog Management</h1>
          <p className="text-white/60 mt-2">Create and manage your blog posts</p>
        </div>

        {!isCreating && (
          <Button
            onClick={() => setIsCreating(true)}
            className="px-6 py-3 bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
            style={{ borderRadius: "2rem" }}
          >
            + New Post
          </Button>
        )}
      </div>

      {/* CREATE/EDIT FORM */}
      {isCreating && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <NeonCard className="p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingPost ? "Edit Post" : "Create New Post"}
                </h2>
                <button
                  onClick={handleCancel}
                  className="text-white/60 hover:text-white transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20"
                  placeholder="Enter post title"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Slug *</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20"
                  placeholder="post-url-slug"
                />
                <p className="text-xs text-white/50 mt-1">URL: /blog/{formData.slug || "post-slug"}</p>
              </div>

              {/* Category & Author */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-slate-900">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Excerpt *</label>
                <textarea
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20 resize-none"
                  placeholder="Brief description of the post (shown in listing)"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Content (Markdown) *</label>
                <textarea
                  rows={16}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20 resize-y font-mono text-sm"
                  placeholder="Write your post content in markdown format..."
                />
                <p className="text-xs text-white/50 mt-2">
                  Supports: ## Headings, **bold**, *italic*, [links](url), lists, blockquotes
                </p>
              </div>

              {/* Read Time */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Read Time</label>
                <input
                  type="text"
                  value={formData.read_time}
                  onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20"
                  placeholder="e.g., 5 min read"
                />
              </div>

              {/* Published Toggle */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-5 h-5 rounded border-white/20 bg-white/5 text-algoarnAqua focus:ring-2 focus:ring-algoarnAqua/20"
                />
                <label htmlFor="published" className="text-sm font-medium text-white/80 cursor-pointer">
                  Publish immediately
                </label>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <Button
                  onClick={handleSubmit}
                  disabled={saving}
                  className="px-8 py-3 bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90 disabled:opacity-60"
                  style={{ borderRadius: "2rem" }}
                >
                  {saving ? "Saving..." : editingPost ? "Update Post" : "Create Post"}
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="px-8 py-3 border-white/20 hover:bg-white/5"
                  style={{ borderRadius: "2rem" }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </NeonCard>
        </motion.div>
      )}

      {/* POSTS LIST */}
      {!isCreating && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">
              All Posts ({posts.length})
            </h2>

            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                  filter === "all"
                    ? "bg-algoarnAqua/10 text-algoarnAqua border-algoarnAqua/30"
                    : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("published")}
                className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                  filter === "published"
                    ? "bg-algoarnAqua/10 text-algoarnAqua border-algoarnAqua/30"
                    : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                }`}
              >
                Published
              </button>
              <button
                onClick={() => setFilter("drafts")}
                className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                  filter === "drafts"
                    ? "bg-algoarnAqua/10 text-algoarnAqua border-algoarnAqua/30"
                    : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                }`}
              >
                Drafts
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-white/60">Loading…</div>
          ) : (
            visiblePosts.map((post) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                <NeonCard className="p-6 hover:scale-[1.01] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1 space-y-2 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-bold text-white truncate">{post.title}</h3>

                        {post.published ? (
                          <span className="px-2 py-1 text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/30 rounded">
                            Published
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 rounded">
                            Draft
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-white/60 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center gap-4 text-xs text-white/50 flex-wrap">
                        <span>{post.category || "—"}</span>
                        <span>·</span>
                        <span>{post.slug || "—"}</span>
                        <span>·</span>
                        <span>{post.read_time || "—"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-algoarnAqua/30 transition-all text-white"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleTogglePublish(post)}
                        className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-algoarnAqua/30 transition-all text-white"
                      >
                        {post.published ? "Unpublish" : "Publish"}
                      </button>

                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-4 py-2 text-sm bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-all text-red-400"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </NeonCard>
              </motion.div>
            ))
          )}

          {!loading && visiblePosts.length === 0 && (
            <NeonCard className="p-12 text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-2">No posts yet</h3>
              <p className="text-white/60 mb-6">Create your first blog post to get started</p>
              <Button
                onClick={() => setIsCreating(true)}
                className="px-6 py-3 bg-gradient-to-r from-algoarnAqua to-algoarnBlue"
                style={{ borderRadius: "2rem" }}
              >
                Create Post
              </Button>
            </NeonCard>
          )}
        </div>
      )}
    </div>
  );
}
