// // // // // // // "use client";

// // // // // // // import Link from "next/link";
// // // // // // // import { usePathname } from "next/navigation";
// // // // // // // import { useState } from "react";
// // // // // // // import Image from "next/image";

// // // // // // // const navLinks = [
// // // // // // //   { href: "/", label: "Home" },
// // // // // // //   { href: "/suca", label: "SUCA" },
// // // // // // //   { href: "/services", label: "Services" },
// // // // // // //   { href: "/blog", label: "Blog" },
// // // // // // //   { href: "/about", label: "About Us" },
// // // // // // //   { href: "/careers", label: "Careers" },
// // // // // // //   { href: "/contact", label: "Contact Us" },
// // // // // // // ];

// // // // // // // export default function Navbar() {
// // // // // // //   const pathname = usePathname();
// // // // // // //   const [open, setOpen] = useState(false);

// // // // // // //   return (
// // // // // // //     <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
// // // // // // //       <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
// // // // // // //         {/* LOGO */}
// // // // // // //         <Link href="/" className="flex items-center gap-2">
// // // // // // //   <Image
// // // // // // //     src="/algo-logo.jpg"   // or "/logo.png" if you named it that
// // // // // // //     alt="Algoarn Logo"
// // // // // // //     width={120}
// // // // // // //     height={32}
// // // // // // //     className="h-8 w-auto"
// // // // // // //   />
// // // // // // // </Link>


// // // // // // //         {/* Desktop Menu */}
// // // // // // //         <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
// // // // // // //           {navLinks.map((item) => (
// // // // // // //             <Link
// // // // // // //               key={item.href}
// // // // // // //               href={item.href}
// // // // // // //               className={`transition-colors ${
// // // // // // //                 pathname === item.href
// // // // // // //                   ? "text-algoarnAqua"
// // // // // // //                   : "text-white/70 hover:text-white"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {item.label}
// // // // // // //             </Link>
// // // // // // //           ))}
// // // // // // //         </nav>

// // // // // // //         {/* Desktop CTA */}
// // // // // // //         {/* <Link
// // // // // // //           href="/contact"
// // // // // // //           className="hidden md:inline-flex px-4 py-2 rounded-full bg-algoarnBlue hover:bg-algoarnAqua text-sm font-semibold neon-card transition-colors"
// // // // // // //         >
// // // // // // //           Contact Us
// // // // // // //         </Link> */}

// // // // // // //         {/* Mobile Button */}
// // // // // // //         <button
// // // // // // //           className="md:hidden text-white"
// // // // // // //           onClick={() => setOpen(!open)}
// // // // // // //         >
// // // // // // //           ☰
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Mobile Menu */}
// // // // // // //       {open && (
// // // // // // //         <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">
// // // // // // //           <nav className="flex flex-col p-4 space-y-2">
// // // // // // //             {navLinks.map((item) => (
// // // // // // //               <Link
// // // // // // //                 key={item.href}
// // // // // // //                 href={item.href}
// // // // // // //                 className={`block py-2 text-sm ${
// // // // // // //                   pathname === item.href
// // // // // // //                     ? "text-algoarnAqua"
// // // // // // //                     : "text-white/70 hover:text-white"
// // // // // // //                 }`}
// // // // // // //                 onClick={() => setOpen(false)}
// // // // // // //               >
// // // // // // //                 {item.label}
// // // // // // //               </Link>
// // // // // // //             ))}

// // // // // // //             <Link
// // // // // // //               href="/contact"
// // // // // // //               className="mt-3 px-4 py-2 rounded-full bg-algoarnBlue hover:bg-algoarnAqua text-center text-sm font-semibold neon-card transition-colors"
// // // // // // //               onClick={() => setOpen(false)}
// // // // // // //             >
// // // // // // //               Contact Us
// // // // // // //             </Link>
// // // // // // //           </nav>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </header>
// // // // // // //   );
// // // // // // // }


// // // // // // "use client";

// // // // // // import Link from "next/link";
// // // // // // import Image from "next/image";
// // // // // // import { usePathname } from "next/navigation";
// // // // // // import { useState } from "react";

// // // // // // const navLinks = [
// // // // // //   { href: "/", label: "Home" },
// // // // // //   { href: "/services", label: "AI Services" },
// // // // // //   { href: "/suca", label: "AI Products" }, // you can rename later
// // // // // //   { href: "/contact", label: "Contact" },
// // // // // //   { href: "/careers", label: "Careers" },
// // // // // // ];

// // // // // // export default function Navbar() {
// // // // // //   const pathname = usePathname();
// // // // // //   const [open, setOpen] = useState(false);

// // // // // //   return (
// // // // // //   <header className="sticky top-0 z-50 bg-black border-b border-white/10">
// // // // // //   <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
// // // // // //         {/* Logo */}
// // // // // //         <Link href="/" className="flex items-center">
// // // // // //           <Image
// // // // // //             src="/algo-logo.jpg" 
// // // // // //              alt="Algoarn Logo"
// // // // // //   width={300}
// // // // // //   height={76}
// // // // // //   className="h-14 md:h-16 w-auto"
           
// // // // // //           />
// // // // // //         </Link>

// // // // // //         {/* Desktop nav */}
// // // // // //         <nav className="hidden md:flex items-center gap-10 text-sm lg:text-base">
// // // // // //           {navLinks.map((link) => {
// // // // // //             const active = pathname === link.href;
// // // // // //             return (
// // // // // //               <Link
// // // // // //                 key={link.href}
// // // // // //                 href={link.href}
// // // // // //                 className={`relative pb-1 transition-colors ${
// // // // // //                   active
// // // // // //                     ? "text-white"
// // // // // //                     : "text-white/70 hover:text-white"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {link.label}
// // // // // //                 {/* underline for active link */}
// // // // // //                 {active && (
// // // // // //                   <span className="absolute left-0 -bottom-[2px] h-[2px] w-full bg-white" />
// // // // // //                 )}
// // // // // //               </Link>
// // // // // //             );
// // // // // //           })}
// // // // // //         </nav>

// // // // // //         {/* Mobile menu button */}
// // // // // //         <button
// // // // // //           className="md:hidden text-white text-2xl"
// // // // // //           onClick={() => setOpen((prev) => !prev)}
// // // // // //         >
// // // // // //           ☰
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Mobile menu */}
// // // // // //       {open && (
// // // // // //         <div className="md:hidden bg-black border-t border-white/10">
// // // // // //           <nav className="flex flex-col px-4 py-3 space-y-2 text-sm">
// // // // // //             {navLinks.map((link) => {
// // // // // //               const active = pathname === link.href;
// // // // // //               return (
// // // // // //                 <Link
// // // // // //                   key={link.href}
// // // // // //                   href={link.href}
// // // // // //                   onClick={() => setOpen(false)}
// // // // // //                   className={`py-1 ${
// // // // // //                     active
// // // // // //                       ? "text-white font-medium"
// // // // // //                       : "text-white/70 hover:text-white"
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   {link.label}
// // // // // //                 </Link>
// // // // // //               );
// // // // // //             })}
// // // // // //           </nav>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </header>
// // // // // //   );
// // // // // // }


// // // // // "use client";

// // // // // // import Link from "next/link";
// // // // // // import { usePathname } from "next/navigation";
// // // // // // import { useState } from "react";
// // // // // // import Image from "next/image";

// // // // // // const navLinks = [
// // // // // //   { href: "/", label: "Home" },
// // // // // //   { href: "/suca", label: "SUCA" },
// // // // // //   { href: "/services", label: "Services" },
// // // // // //   { href: "/blog", label: "Blog" },
// // // // // //   { href: "/about", label: "About Us" },
// // // // // //   { href: "/careers", label: "Careers" },
// // // // // //   { href: "/contact", label: "Contact Us" },
// // // // // // ];

// // // // // // export default function Navbar() {
// // // // // //   const pathname = usePathname();
// // // // // //   const [open, setOpen] = useState(false);

// // // // // //   return (
// // // // // //     <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
// // // // // //       <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
// // // // // //         {/* LOGO */}
// // // // // //         <Link href="/" className="flex items-center gap-2">
// // // // // //   <Image
// // // // // //     src="/algo-logo.jpg"   // or "/logo.png" if you named it that
// // // // // //     alt="Algoarn Logo"
// // // // // //     width={120}
// // // // // //     height={32}
// // // // // //     className="h-8 w-auto"
// // // // // //   />
// // // // // // </Link>


// // // // // //         {/* Desktop Menu */}
// // // // // //         <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
// // // // // //           {navLinks.map((item) => (
// // // // // //             <Link
// // // // // //               key={item.href}
// // // // // //               href={item.href}
// // // // // //               className={`transition-colors ${
// // // // // //                 pathname === item.href
// // // // // //                   ? "text-algoarnAqua"
// // // // // //                   : "text-white/70 hover:text-white"
// // // // // //               }`}
// // // // // //             >
// // // // // //               {item.label}
// // // // // //             </Link>
// // // // // //           ))}
// // // // // //         </nav>

// // // // // //         {/* Desktop CTA */}
// // // // // //         {/* <Link
// // // // // //           href="/contact"
// // // // // //           className="hidden md:inline-flex px-4 py-2 rounded-full bg-algoarnBlue hover:bg-algoarnAqua text-sm font-semibold neon-card transition-colors"
// // // // // //         >
// // // // // //           Contact Us
// // // // // //         </Link> */}

// // // // // //         {/* Mobile Button */}
// // // // // //         <button
// // // // // //           className="md:hidden text-white"
// // // // // //           onClick={() => setOpen(!open)}
// // // // // //         >
// // // // // //           ☰
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Mobile Menu */}
// // // // // //       {open && (
// // // // // //         <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">
// // // // // //           <nav className="flex flex-col p-4 space-y-2">
// // // // // //             {navLinks.map((item) => (
// // // // // //               <Link
// // // // // //                 key={item.href}
// // // // // //                 href={item.href}
// // // // // //                 className={`block py-2 text-sm ${
// // // // // //                   pathname === item.href
// // // // // //                     ? "text-algoarnAqua"
// // // // // //                     : "text-white/70 hover:text-white"
// // // // // //                 }`}
// // // // // //                 onClick={() => setOpen(false)}
// // // // // //               >
// // // // // //                 {item.label}
// // // // // //               </Link>
// // // // // //             ))}

// // // // // //             <Link
// // // // // //               href="/contact"
// // // // // //               className="mt-3 px-4 py-2 rounded-full bg-algoarnBlue hover:bg-algoarnAqua text-center text-sm font-semibold neon-card transition-colors"
// // // // // //               onClick={() => setOpen(false)}
// // // // // //             >
// // // // // //               Contact Us
// // // // // //             </Link>
// // // // // //           </nav>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </header>
// // // // // //   );
// // // // // // }


// // // // // "use client";

// // // // // import Link from "next/link";
// // // // // import Image from "next/image";
// // // // // import { usePathname } from "next/navigation";
// // // // // import { useState } from "react";

// // // // // const navLinks = [
// // // // //   { href: "/", label: "Home" },
// // // // //   { href: "/services", label: "AI Services" },
// // // // //   { href: "/suca", label: "AI Products" }, // you can rename later
// // // // //   { href: "/contact", label: "Contact" },
// // // // //   { href: "/careers", label: "Careers" },
// // // // // ];

// // // // // export default function Navbar() {
// // // // //   const pathname = usePathname();
// // // // //   const [open, setOpen] = useState(false);

// // // // //   return (
// // // // //   <header className="sticky top-0 z-50 bg-black border-b border-white/10">
// // // // //   <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
// // // // //         {/* Logo */}
// // // // //        <Link href="/" className="flex items-center">
// // // // //   <div className="h-16 md:h-20 flex items-center">
// // // // //     <Image
// // // // //       src="/algo-logo.jpg"  // make sure this file exists in /public
// // // // //       alt="Algoarn Logo"
// // // // //       width={300}           // or 260 / 280 if you want slightly smaller
// // // // //       height={76}
// // // // //       priority              // load immediately to reduce flicker
// // // // //       className="h-full w-auto"
// // // // //     />
// // // // //   </div>
// // // // // </Link>


// // // // //         {/* Desktop nav */}
// // // // //         <nav className="hidden md:flex items-center gap-10 text-sm lg:text-base">
// // // // //           {navLinks.map((link) => {
// // // // //             const active = pathname === link.href;
// // // // //             return (
// // // // //               <Link
// // // // //                 key={link.href}
// // // // //                 href={link.href}
// // // // //                 className={`relative pb-1 transition-colors ${
// // // // //                   active
// // // // //                     ? "text-white"
// // // // //                     : "text-white/70 hover:text-white"
// // // // //                 }`}
// // // // //               >
// // // // //                 {link.label}
// // // // //                 {/* underline for active link */}
// // // // //                 {active && (
// // // // //                   <span className="absolute left-0 -bottom-[2px] h-[2px] w-full bg-white" />
// // // // //                 )}
// // // // //               </Link>
// // // // //             );
// // // // //           })}
// // // // //         </nav>

// // // // //         {/* Mobile menu button */}
// // // // //         <button
// // // // //           className="md:hidden text-white text-2xl"
// // // // //           onClick={() => setOpen((prev) => !prev)}
// // // // //         >
// // // // //           ☰
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Mobile menu */}
// // // // //       {open && (
// // // // //         <div className="md:hidden bg-black border-t border-white/10">
// // // // //           <nav className="flex flex-col px-4 py-3 space-y-2 text-sm">
// // // // //             {navLinks.map((link) => {
// // // // //               const active = pathname === link.href;
// // // // //               return (
// // // // //                 <Link
// // // // //                   key={link.href}
// // // // //                   href={link.href}
// // // // //                   onClick={() => setOpen(false)}
// // // // //                   className={`py-1 ${
// // // // //                     active
// // // // //                       ? "text-white font-medium"
// // // // //                       : "text-white/70 hover:text-white"
// // // // //                   }`}
// // // // //                 >
// // // // //                   {link.label}
// // // // //                 </Link>
// // // // //               );
// // // // //             })}
// // // // //           </nav>
// // // // //         </div>
// // // // //       )}
// // // // //     </header>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import { useState, useEffect } from "react";
// // // // import Link from "next/link";
// // // // import Image from "next/image";
// // // // import { usePathname } from "next/navigation";
// // // // import { Button } from "@/components/ui/button";

// // // // const navLinks = [
// // // //   { label: "Home", href: "/" },
// // // //   { label: "SUCA", href: "/suca" },
// // // //   { label: "Services", href: "/services" },
// // // //   { label: "Blog", href: "/blog" },
// // // //   { label: "About", href: "/about" },
// // // //   { label: "Careers", href: "/careers" },
// // // // ];

// // // // export function Navbar() {
// // // //   const pathname = usePathname();
// // // //   const [open, setOpen] = useState(false);
// // // //   const [scrolled, setScrolled] = useState(false);

// // // //   // subtle shadow when scrolling
// // // //   useEffect(() => {
// // // //     const onScroll = () => {
// // // //       setScrolled(window.scrollY > 10);
// // // //     };
// // // //     onScroll();
// // // //     window.addEventListener("scroll", onScroll);
// // // //     return () => window.removeEventListener("scroll", onScroll);
// // // //   }, []);

// // // //   const isActive = (href: string) => {
// // // //     if (href === "/") return pathname === "/";
// // // //     return pathname.startsWith(href);
// // // //   };

// // // //   return (
// // // //     <header
// // // //       className={`sticky top-0 z-50 transition-shadow ${
// // // //         scrolled ? "shadow-lg shadow-black/40" : ""
// // // //       }`}
// // // //     >
// // // //       <div className="border-b border-white/10 bg-black/70 backdrop-blur-xl">
// // // //         <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
// // // //           {/* Logo + small tagline */}
// // // //           <Link href="/" className="flex items-center gap-3">
// // // //             <div className="h-10 md:h-12 flex items-center">
// // // //               <Image
// // // //                 src="/algo-logo.jpg" // make sure this file is in /public
// // // //                 alt="Algoarn Logo"
// // // //                 width={240}
// // // //                 height={64}
// // // //                 priority
// // // //                 className="h-full w-auto"
// // // //               />
// // // //             </div>
// // // //             <span className="hidden md:block text-[11px] leading-tight text-white/60">
// // // //               <span className="block uppercase tracking-[0.16em]">
// // // //                 Smart AI for Smarter
// // // //               </span>
// // // //               <span className="block text-white/75">
// // // //                 Institutions &amp; Businesses
// // // //               </span>
// // // //             </span>
// // // //           </Link>

// // // //           {/* Desktop nav */}
// // // //           <nav className="hidden md:flex items-center gap-6">
// // // //             <div className="flex items-center gap-4 text-xs">
// // // //               {navLinks.map((link) => (
// // // //                 <Link
// // // //                   key={link.href}
// // // //                   href={link.href}
// // // //                   className={`relative px-1 py-1 font-medium transition-colors ${
// // // //                     isActive(link.href)
// // // //                       ? "text-white"
// // // //                       : "text-white/60 hover:text-white"
// // // //                   }`}
// // // //                 >
// // // //                   {link.label}
// // // //                   {isActive(link.href) && (
// // // //                     <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-algoarnBlue to-algoarnAqua" />
// // // //                   )}
// // // //                 </Link>
// // // //               ))}
// // // //             </div>

// // // //             <Link href="/contact">
// // // //               <Button size="sm" className="text-xs px-4">
// // // //                 Contact Us
// // // //               </Button>
// // // //             </Link>
// // // //           </nav>

// // // //           {/* Mobile burger */}
// // // //           <button
// // // //             type="button"
// // // //             className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-black/60"
// // // //             onClick={() => setOpen((v) => !v)}
// // // //             aria-label="Toggle navigation"
// // // //           >
// // // //             <span className="relative w-4 h-3 flex flex-col justify-between">
// // // //               <span
// // // //                 className={`h-[2px] w-full bg-white transition-transform ${
// // // //                   open ? "translate-y-[5px] rotate-45" : ""
// // // //                 }`}
// // // //               />
// // // //               <span
// // // //                 className={`h-[2px] w-full bg-white transition-opacity ${
// // // //                   open ? "opacity-0" : "opacity-100"
// // // //                 }`}
// // // //               />
// // // //               <span
// // // //                 className={`h-[2px] w-full bg-white transition-transform ${
// // // //                   open ? "-translate-y-[5px] -rotate-45" : ""
// // // //                 }`}
// // // //               />
// // // //             </span>
// // // //           </button>
// // // //         </div>

// // // //         {/* Mobile menu */}
// // // //         {open && (
// // // //           <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
// // // //             <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
// // // //               {navLinks.map((link) => (
// // // //                 <Link
// // // //                   key={link.href}
// // // //                   href={link.href}
// // // //                   onClick={() => setOpen(false)}
// // // //                   className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm ${
// // // //                     isActive(link.href)
// // // //                       ? "bg-white/10 text-white"
// // // //                       : "text-white/70 hover:bg-white/5 hover:text-white"
// // // //                   }`}
// // // //                 >
// // // //                   <span>{link.label}</span>
// // // //                   {isActive(link.href) && (
// // // //                     <span className="text-[10px] uppercase tracking-[0.18em] text-algoarnAqua">
// // // //                       Active
// // // //                     </span>
// // // //                   )}
// // // //                 </Link>
// // // //               ))}

// // // //               <div className="pt-2">
// // // //                 <Link href="/contact" onClick={() => setOpen(false)}>
// // // //                   <Button className="w-full text-sm">Contact Us</Button>
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // }
// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { usePathname } from "next/navigation";
// // // import { Button } from "@/components/ui/button";

// // // const navLinks = [
// // //   { label: "Home", href: "/" },
// // //   { label: "SUCA", href: "/suca" },
// // //   { label: "Services", href: "/services" },
// // //   { label: "Blog", href: "/blog" },
// // //   { label: "About", href: "/about" },
// // //   { label: "Careers", href: "/careers" },
// // // ];

// // // export function Navbar() {
// // //   const pathname = usePathname();
// // //   const [open, setOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);

// // //   // subtle shadow when scrolling
// // //   useEffect(() => {
// // //     const onScroll = () => {
// // //       setScrolled(window.scrollY > 10);
// // //     };
// // //     onScroll();
// // //     window.addEventListener("scroll", onScroll);
// // //     return () => window.removeEventListener("scroll", onScroll);
// // //   }, []);

// // //   const isActive = (href: string) => {
// // //     if (href === "/") return pathname === "/";
// // //     return pathname.startsWith(href);
// // //   };

// // //   return (
// // //     <header
// // //       className={`sticky top-0 z-50 transition-shadow ${
// // //         scrolled ? "shadow-lg shadow-black/40" : ""
// // //       }`}
// // //     >
// // //       <div className="border-b border-white/10 bg-black/70 backdrop-blur-xl">
// // //         <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
// // //           {/* Logo + small tagline */}
// // //           <Link href="/" className="flex items-center gap-3">
// // //             <div className="h-10 md:h-12 flex items-center">
// // //               <Image
// // //                 src="/algo-logo.jpg" // make sure this file is in /public
// // //                 alt="Algoarn Logo"
// // //                 width={240}
// // //                 height={64}
// // //                 priority
// // //                 className="h-full w-auto"
// // //               />
// // //             </div>
// // //             <span className="hidden md:block text-[11px] leading-tight text-white/60">
// // //               <span className="block uppercase tracking-[0.16em]">
// // //                 Smart AI for Smarter
// // //               </span>
// // //               <span className="block text-white/75">
// // //                 Institutions &amp; Businesses
// // //               </span>
// // //             </span>
// // //           </Link>

// // //           {/* Desktop nav */}
// // //           <nav className="hidden md:flex items-center gap-6">
// // //             <div className="flex items-center gap-4 text-xs">
// // //               {navLinks.map((link) => (
// // //                 <Link
// // //                   key={link.href}
// // //                   href={link.href}
// // //                   className={`relative px-1 py-1 font-medium transition-colors ${
// // //                     isActive(link.href)
// // //                       ? "text-white"
// // //                       : "text-white/60 hover:text-white"
// // //                   }`}
// // //                 >
// // //                   {link.label}
// // //                   {isActive(link.href) && (
// // //                     <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-algoarnBlue to-algoarnAqua" />
// // //                   )}
// // //                 </Link>
// // //               ))}
// // //             </div>

// // //             <Link href="/contact">
// // //               <Button size="sm" className="text-xs px-4">
// // //                 Contact Us
// // //               </Button>
// // //             </Link>
// // //           </nav>

// // //           {/* Mobile burger */}
// // //           <button
// // //             type="button"
// // //             className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-black/60"
// // //             onClick={() => setOpen((v) => !v)}
// // //             aria-label="Toggle navigation"
// // //           >
// // //             <span className="relative w-4 h-3 flex flex-col justify-between">
// // //               <span
// // //                 className={`h-[2px] w-full bg-white transition-transform ${
// // //                   open ? "translate-y-[5px] rotate-45" : ""
// // //                 }`}
// // //               />
// // //               <span
// // //                 className={`h-[2px] w-full bg-white transition-opacity ${
// // //                   open ? "opacity-0" : "opacity-100"
// // //                 }`}
// // //               />
// // //               <span
// // //                 className={`h-[2px] w-full bg-white transition-transform ${
// // //                   open ? "-translate-y-[5px] -rotate-45" : ""
// // //                 }`}
// // //               />
// // //             </span>
// // //           </button>
// // //         </div>

// // //         {/* Mobile menu */}
// // //         {open && (
// // //           <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
// // //             <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
// // //               {navLinks.map((link) => (
// // //                 <Link
// // //                   key={link.href}
// // //                   href={link.href}
// // //                   onClick={() => setOpen(false)}
// // //                   className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm ${
// // //                     isActive(link.href)
// // //                       ? "bg-white/10 text-white"
// // //                       : "text-white/70 hover:bg-white/5 hover:text-white"
// // //                   }`}
// // //                 >
// // //                   <span>{link.label}</span>
// // //                   {isActive(link.href) && (
// // //                     <span className="text-[10px] uppercase tracking-[0.18em] text-algoarnAqua">
// // //                       Active
// // //                     </span>
// // //                   )}
// // //                 </Link>
// // //               ))}

// // //               <div className="pt-2">
// // //                 <Link href="/contact" onClick={() => setOpen(false)}>
// // //                   <Button className="w-full text-sm">Contact Us</Button>
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </header>
// // //   );
// // // }
// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { usePathname } from "next/navigation";
// // import { Button } from "@/components/ui/button";

// // const navLinks = [
// //   { label: "Home", href: "/" },
// //     { label: "About", href: "/about" },
// //   { label: "SUCA", href: "/suca" },
// //   { label: "Services", href: "/services" },
// //   { label: "Blog", href: "/blog" },
// //   { label: "Careers", href: "/careers" },
// //    { label: "Contact Us", href: "/contact" },
// // ];

// // export function Navbar() {
// //   const pathname = usePathname();
// //   const [open, setOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 10);
// //     onScroll();
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   const isActive = (href: string) => {
// //     if (href === "/") return pathname === "/";
// //     return pathname.startsWith(href);
// //   };

// //   return (
// //     <header
// //       className={`sticky top-0 z-50 transition-shadow ${
// //         scrolled ? "shadow-lg shadow-black/40" : ""
// //       }`}
// //     >
// //       <div className="border-b border-white/10 bg-black/75 backdrop-blur-2xl">
// //         {/* TALLER + BIGGER TYPOGRAPHY */}
// //         <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-24 md:h-28">
// //           {/* Logo + tagline */}
// //           <Link href="/" className="flex items-center gap-5">
// //             {/* Bigger logo */}
// //             <div className="h-14 md:h-16 flex items-center">
// //               <Image
// //                 src="/algo-logo.jpg"
// //                 alt="Algoarn Logo"
// //                 width={300}
// //                 height={80}
// //                 priority
// //                 className="h-full w-auto"
// //               />
// //             </div>
            
// //           </Link>

// //           {/* Desktop nav */}
// //           <nav className="hidden md:flex items-center gap-10">
// //             <div className="flex items-center gap-7 text-lg">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.href}
// //                   href={link.href}
// //                   className={`relative px-1 py-1 font-medium transition-colors ${
// //                     isActive(link.href)
// //                       ? "text-white"
// //                       : "text-algoarnAqua/85 hover:text-algoarnAqua"
// //                   }`}
// //                 >
// //                   {link.label}
// //                   {isActive(link.href) && (
// //                     <span className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-algoarnBlue to-algoarnAqua" />
// //                   )}
// //                 </Link>
// //               ))}
// //             </div>

// //             {/* Bigger CTA button */}
// //             <Link href="/contact">
// //               {/* <Button
// //                 size="lg"
// //                 className="px-8 py-3 text-lg leading-none font-semibold"
// //               >
// //                 Contact Us
// //               </Button> */}
// //             </Link>
// //           </nav>

// //           {/* Mobile burger */}
// //           <button
// //             type="button"
// //             className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/25 bg-black/80"
// //             onClick={() => setOpen((v) => !v)}
// //             aria-label="Toggle navigation"
// //           >
// //             {/* <span className="relative w-5.5 h-4 flex flex-col justify-between"> */}
// //             <span className="relative w-5 h-4 flex flex-col justify-between">


// //               <span
// //                 className={`h-[2px] w-full bg-white transition-transform ${
// //                   open ? "translate-y-[7px] rotate-45" : ""
// //                 }`}
// //               />
// //               <span
// //                 className={`h-[2px] w-full bg-white transition-opacity ${
// //                   open ? "opacity-0" : "opacity-100"
// //                 }`}
// //               />
// //               <span
// //                 className={`h-[2px] w-full bg-white transition-transform ${
// //                   open ? "-translate-y-[7px] -rotate-45" : ""
// //                 }`}
// //               />
// //             </span>
// //           </button>
// //         </div>

// //         {/* Mobile menu */}
// //         {open && (
// //           <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
// //             <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.href}
// //                   href={link.href}
// //                   onClick={() => setOpen(false)}
// //                   className={`flex items-center justify-between rounded-xl px-3 py-3 text-lg ${
// //                     isActive(link.href)
// //                       ? "bg-white/10 text-white"
// //                       : "text-white/85 hover:bg-white/5 hover:text-white"
// //                   }`}
// //                 >
// //                   <span>{link.label}</span>
// //                   {isActive(link.href) && (
// //                     <span className="text-[10px] uppercase tracking-[0.18em] text-algoarnAqua">
// //                       Active
// //                     </span>
// //                   )}
// //                 </Link>
// //               ))}

// //               <div className="pt-2">
// //                 <Link href="/contact" onClick={() => setOpen(false)}>
// //                   <Button className="w-full text-lg py-3.5 font-semibold">
// //                     Contact Us
// //                   </Button>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }







// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "SUCA", href: "/suca" },
//   { label: "Services", href: "/services" },
//   { label: "About Us", href: "/about" },
//   { label: "Careers", href: "/careers" },
//   { label: "Blog", href: "/blog" },
//    { label: "Contact", href: "/contact" },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const isActive = (href: string) => {
//     if (href === "/") return pathname === "/";
//     return pathname.startsWith(href);
//   };

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-shadow ${
//         scrolled ? "shadow-lg shadow-black/40" : ""
//       }`}
//     >
//       <div className="border-b border-white/10 bg-black/90 backdrop-blur-xl" style={{height:'100px', }}>
//         {/* Logo + nav */}
//         <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-5">
//             <div className="h-12 flex items-center" style={{width:'200px', height:'80px'}}>
//               <Image
//                 src="/algo-logo.jpg"
//                 alt="Algoarn Logo"
//                   width={200}
//                 height={40}
              
//                 priority
//                 className="h-full w-auto mt-2" 
//               />
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           {/* <nav className="hidden md:flex items-center gap-10" style={{marginRight:'-85px'}}>
//             <div className="flex items-center gap-8 text-base">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`relative px-1 py-1 font-medium tracking-wide transition-colors ${
//                     isActive(link.href)
//                       ? "text-white"
//                       : "text-white/80 hover:text-white"
//                   }`}
//                 >
//                   {link.label}
//                   {isActive(link.href) && (
//                     <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white" />
//                   )}
//                 </Link>
//               ))}
//             </div> */}

//             {/* Optional contact button on the right */}
//             {/* 
//             <Link href="/contact">
//               <Button className="px-6 py-2 text-sm font-semibold">
//                 Contact
//               </Button>
//             </Link>
//             */}
//           {/* </nav> */}
//           <nav className="hidden md:flex items-center gap-10" style={{marginRight:'-85px'}}>
//             <div className="flex items-center gap-8 text-base">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`
//                     relative px-1 py-1 font-medium tracking-wide transition-colors
//                     ${isActive(link.href)
//                       ? "!text-white"                 // active = white
//                       : "!text-white hover:!text-[#00eaff]"  // hover = neon blue
//                     }
//                   `}
//                   >
//                   {link.label}
//                   {isActive(link.href) && (
//                     <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white" />
//                   )}
//                 </Link>
//               ))}
//             </div>
//           </nav>

//           {/* Mobile burger */}
//           <button
//             type="button"
//             className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/25 bg-black/80"
//             onClick={() => setOpen((v) => !v)}
//             aria-label="Toggle navigation"
//           >
//             <span className="relative w-5 h-4 flex flex-col justify-between">
//               <span
//                 className={`h-[2px] w-full bg-white transition-transform ${
//                   open ? "translate-y-[7px] rotate-45" : ""
//                 }`}
//               />
//               <span
//                 className={`h-[2px] w-full bg-white transition-opacity ${
//                   open ? "opacity-0" : "opacity-100"
//                 }`}
//               />
//               <span
//                 className={`h-[2px] w-full bg-white transition-transform ${
//                   open ? "-translate-y-[7px] -rotate-45" : ""
//                 }`}
//               />
//             </span>
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {open && (
//           <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
//             <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className={`flex items-center justify-between rounded-xl px-3 py-3 text-base ${
//                     isActive(link.href)
//                       ? "bg-white/10 text-white"
//                       : "text-white/85 hover:bg-white/5 hover:text-white"
//                   }`}
//                 >
//                   <span>{link.label}</span>
//                   {isActive(link.href) && (
//                     <span className="text-[10px] uppercase tracking-[0.18em] text-white/70">
//                       Active
//                     </span>
//                   )}
//                 </Link>
//               ))}

//               {/* Optional contact button on mobile */}
              
//               <div className="pt-2">
//                 <Link href="/contact" onClick={() => setOpen(false)}>
//                   <Button className="w-full text-base py-3 font-semibold">
//                     Contact
//                   </Button>
//                 </Link>
//               </div>
             
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "SUCA", href: "/suca" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  // { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const isActive = (href: string) =>
  //   href === "/" ? pathname === "/" : pathname.startsWith(href);
const isActive = (href: string) => {
  if (!pathname) return false;

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(href + "/");
};



  return (
    <header
      className={`sticky top-0 z-50 ${
        scrolled ? "shadow-lg shadow-black/40" : ""
      }`}
    >
      <div className="border-b border-white/10 bg-black backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-2 lg:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/algo-logo.jpg"
              alt="Algoarn Logo"
              width={160}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav - Increased text size for better visibility */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              // <Link
              //   key={link.href}
              //   href={link.href}
              //   className={`relative font-medium transition-colors text-base md:text-[15px]
              //     ${
              //       isActive(link.href)
              //         ? "text-[#00eaff]"
              //         : "text-white/80 hover:text-[#00eaff]"
              //     }
              //   `}
              // >
              //   {link.label}
              //   {isActive(link.href) && (
              //     <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[white]" />
              //   )}
              // </Link>
//       <Link
//   key={link.href}
//   href={link.href}
//   className={`relative font-medium transition-colors text-base md:text-[15px]
//     ${isActive(link.href)
//       ? "!text-[#00eaff]"
//       : "text-white/80 hover:!text-[#00eaff]"}
//   `}
// >
//   {link.label}
// </Link>
<Link
  key={link.href}
  href={link.href}
  className={`font-medium transition-colors text-base md:text-[15px]
    ${isActive(link.href)
      ? "!text-blue-300"
      : "text-white/80 hover:!text-blue-300"}
  `}
>
  {link.label}
</Link>


            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden w-9 h-9 rounded-full border border-white/25 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="relative w-4 h-3.5 flex flex-col justify-between">
              <span className={`h-[2px] bg-white transition ${open && "rotate-45 translate-y-[6px]"}`} />
              <span className={`h-[2px] bg-white transition ${open && "opacity-0"}`} />
              <span className={`h-[2px] bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`} />
            </span>
          </button>
        </div>

        {/* Mobile Menu - Increased text size */}
        {open && (
          <div className="md:hidden bg-black/95 border-t border-white/10">
            <div className="px-3 py-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
//                  className={`px-3 py-2.5 rounded-lg text-base
//   ${isActive(link.href)
//     ? "bg-white/10 !text-[#00eaff]"
//     : "text-white/80 hover:bg-white/5 hover:!text-[#00eaff]"}
// `}

      className={`px-3 py-2.5 rounded-lg text-base
  ${isActive(link.href)
    ? "bg-white/10 !text-blue-300"
    : "text-white/80 hover:bg-white/5 hover:!text-blue-300"}
`}
           
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}