
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NeonCard } from "@/components/ui/neon-card";
import { Button } from "@/components/ui/button";
import { useBlog } from "@/contexts/BlogContext";
import type { BlogPost } from "@/contexts/BlogContext";

const categories = [
  "Product Insights",
  "Technical",
  "Thought Leadership",
  "Industry Trends",
  "Case Study",
];

export default function AdminBlogPage() {
  const { posts, addPost, updatePost, deletePost, togglePublish } = useBlog();
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: categories[0],
    author: "Algoarn Team",
    published: false,
  });

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSubmit = async () => {
    const postData: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title: formData.title || "",
      slug: formData.slug || "",
      excerpt: formData.excerpt || "",
      content: formData.content || "",
      category: formData.category || categories[0],
      date: editingPost?.date || new Date().toISOString().split("T")[0],
      readTime: formData.readTime || "5 min read",
      author: formData.author || "Algoarn Team",
      published: formData.published || false,
    };

    if (editingPost) {
      updatePost(editingPost.id, postData);
      alert("Post updated successfully!");
    } else {
      addPost(postData);
      alert("Post created successfully!");
    }

    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: categories[0],
      author: "Algoarn Team",
      published: false,
    });
    setIsCreating(false);
    setEditingPost(null);

    // TODO: Replace with actual API call
    // await fetch('/api/admin/blog', { method: 'POST', body: JSON.stringify(postData) });
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData(post);
    setIsCreating(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePost(id);
      alert("Post deleted successfully!");
    }
  };

  const handleTogglePublish = async (id: string) => {
    togglePublish(id);
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingPost(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: categories[0],
      author: "Algoarn Team",
      published: false,
    });
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Blog Management
          </h1>
          <p className="text-white/60 mt-2">
            Create and manage your blog posts
          </p>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
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
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Title *
                </label>
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
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20"
                  placeholder="post-url-slug"
                />
                <p className="text-xs text-white/50 mt-1">
                  URL: /blog/{formData.slug || "post-slug"}
                </p>
              </div>

              {/* Category & Author */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Excerpt *
                </label>
                <textarea
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20 resize-none"
                  placeholder="Brief description of the post (shown in listing)"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Content (Markdown) *
                </label>
                <textarea
                  rows={16}
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua/50 focus:ring-2 focus:ring-algoarnAqua/20 resize-y font-mono text-sm"
                  placeholder="Write your post content in markdown format..."
                />
                <p className="text-xs text-white/50 mt-2">
                  Supports: ## Headings, **bold**, *italic*, [links](url),
                  lists, blockquotes
                </p>
              </div>

              {/* Read Time */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Read Time
                </label>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) =>
                    setFormData({ ...formData, readTime: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, published: e.target.checked })
                  }
                  className="w-5 h-5 rounded border-white/20 bg-white/5 text-algoarnAqua focus:ring-2 focus:ring-algoarnAqua/20"
                />
                <label
                  htmlFor="published"
                  className="text-sm font-medium text-white/80 cursor-pointer"
                >
                  Publish immediately
                </label>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <Button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-algoarnAqua to-algoarnBlue hover:from-algoarnAqua/90 hover:to-algoarnBlue/90"
                  style={{ borderRadius: "2rem" }}
                >
                  {editingPost ? "Update Post" : "Create Post"}
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
              <button className="px-4 py-2 text-sm bg-algoarnAqua/10 text-algoarnAqua border border-algoarnAqua/30 rounded-lg">
                All
              </button>
              <button className="px-4 py-2 text-sm bg-white/5 text-white/60 border border-white/10 rounded-lg hover:bg-white/10">
                Published
              </button>
              <button className="px-4 py-2 text-sm bg-white/5 text-white/60 border border-white/10 rounded-lg hover:bg-white/10">
                Drafts
              </button>
            </div>
          </div>

          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <NeonCard className="p-6 hover:scale-[1.01] transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Post Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-bold text-white">
                        {post.title}
                      </h3>
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
                    <p className="text-sm text-white/60 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <span>{post.category}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-algoarnAqua/30 transition-all text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleTogglePublish(post.id)}
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
          ))}

          {posts.length === 0 && (
            <NeonCard className="p-12 text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-2">
                No posts yet
              </h3>
              <p className="text-white/60 mb-6">
                Create your first blog post to get started
              </p>
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