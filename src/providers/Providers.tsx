"use client";

import { BlogProvider } from "@/contexts/BlogContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <BlogProvider>{children}</BlogProvider>;
}