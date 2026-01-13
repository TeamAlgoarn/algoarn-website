import Link from "next/link";
import { NeonCard } from "@/components/ui/neon-card";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-10 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Algoarn Admin Panel</h1>
          <p className="text-white">Internal area to manage website content and data.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/admin/contacts">
            <NeonCard className="p-6 rounded-2xl hover:border-algoarnAqua cursor-pointer transition-all">
              <h2 className="text-xl font-semibold mb-2">Contact Submissions</h2>
              <p className="text-white text-sm">
                View and manage all messages sent from the Contact page.
              </p>
            </NeonCard>
          </Link>

          <Link href="/admin/careers">
            <NeonCard className="p-6 rounded-2xl hover:border-algoarnAqua cursor-pointer transition-all">
              <h2 className="text-xl font-semibold mb-2">Careers</h2>
              <p className="text-white text-sm">Manage careers content.</p>
            </NeonCard>
          </Link>

          <Link href="/admin/blog">
            <NeonCard className="p-6 rounded-2xl hover:border-algoarnAqua cursor-pointer transition-all">
              <h2 className="text-xl font-semibold mb-2">Blog</h2>
              <p className="text-white text-sm">View and manage blog posts.</p>
            </NeonCard>
          </Link>
        </div>
      </div>
    </main>
  );
}
