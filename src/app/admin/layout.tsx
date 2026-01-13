"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const isAuthPage =
      pathname === "/admin/login" || pathname === "/admin/update-password";

    if (isAuthPage) {
      setOk(true);
      return;
    }

    (async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      setOk(true);
    })();
  }, [pathname, router]);

  if (!ok) return null;

  return <>{children}</>;
}
