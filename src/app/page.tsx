// src/app/page.tsx
"use client";
 
import { useEffect, useState } from "react";
import HomePage from '../components/home/HeroSection'; // <-- your big HomePage code with HeroSection etc.
 
export default function RootHomePage() {
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    setMounted(true);
  }, []);
 
  // First render on the client will match the empty server markup (null),
  // then React will render <HomePage /> AFTER hydration — no mismatch.
  if (!mounted) {
    return null;
  }
 
  return (
    <div className="space-y-16">
      <HomePage />
    </div>
  );
}
 
 