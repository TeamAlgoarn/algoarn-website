// // // // // import Link from "next/link";

// // // // // export default function Footer() {
// // // // //   return (
// // // // //     <footer className="border-t border-white/10 bg-black/40 mt-20">
// // // // //       <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">

// // // // //         <p>
// // // // //           © {new Date().getFullYear()} Algoarn AI Solutions Pvt. Ltd.
// // // // //         </p>

// // // // //         <div className="flex items-center gap-4">
// // // // //           <Link href="/about" className="hover:text-white">About</Link>
// // // // //           <Link href="/privacy" className="hover:text-white">Privacy</Link>
// // // // //           <a href="mailto:contact@algoarn.com" className="hover:text-white">
// // // // //             contact@algoarn.com
// // // // //           </a>
// // // // //         </div>

// // // // //       </div>
// // // // //     </footer>
// // // // //   );
// // // // // }




// // // // import Link from "next/link";

// // // // const CURRENT_YEAR = 2025; // or new Date().getFullYear() run ONCE at build time

// // // // export default function Footer() {
// // // //   return (
// // // //     <footer className="border-t border-white/10 bg-black/40 mt-20">
// // // //       <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
// // // //         <p>© {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd.</p>

// // // //         <div className="flex items-center gap-4">
// // // //           <Link href="/about" className="hover:text-white">
// // // //             About
// // // //           </Link>
// // // //           <Link href="/privacy" className="hover:text-white">
// // // //             Privacy
// // // //           </Link>
// // // //           <a href="mailto:contact@algoarn.com" className="hover:text-white">
// // // //             contact@algoarn.com
// // // //           </a>
// // // //         </div>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // }




// // // import Link from "next/link";
// // // import Image from "next/image";

// // // const CURRENT_YEAR = 2025;

// // // export default function Footer() {
// // //   return (
// // //     <footer className="border-t border-black/10 bg-black/40 mt-20" style={{backgroundColor:'black'}}>
// // //       <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-black/60">

// // //         {/* LEFT SIDE: LOGO + COPYRIGHT */}
// // //         <div className="flex items-center gap-4">
// // //           <Image
// // //             src="/algo-logo.jpg"     // ← make sure file exists in /public
// // //             alt="Algoarn Logo"
// // //             width={120}
// // //             height={40}
// // //             className="opacity-90"
// // //           />
// // //           <p>© {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd.</p>
// // //         </div>

// // //         {/* RIGHT SIDE: LINKS */}
// // //         <div className="flex items-center gap-4">
// // //           <Link href="/about" className="hover:text-white">About</Link>
// // //           <Link href="/privacy" className="hover:text-white">Privacy</Link>
// // //           <a href="mailto:contact@algoarn.com" className="hover:text-white">
// // //             contact@algoarn.com
// // //           </a>
// // //         </div>

// // //       </div>
// // //     </footer>
// // //   );
// // // }

// // import Link from "next/link";
// // import Image from "next/image";

// // const CURRENT_YEAR = 2025;

// // export default function Footer() {
// //   return (
// //     <footer className="border-t border-white/10 bg-black mt-20">
// //       <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

// //         {/* LEFT SIDE: LOGO + COPYRIGHT */}
// //         <div className="flex flex-col sm:flex-row items-center gap-4 text-white/80">
// //           <Image
// //             src="/algo-logo.jpg"
// //             alt="Algoarn Logo"
// //             width={120}
// //             height={40}
// //             className="opacity-90 hover:opacity-100 transition-opacity"
// //           />
// //           <p className="text-center sm:text-left">
// //             © {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd.
// //           </p>
// //         </div>

// //         {/* RIGHT SIDE: LINKS */}
// //         <div className="flex flex-wrap items-center justify-center gap-6">
// //           <Link 
// //             href="/about" 
// //             className="text-white !text-white  hover:!text-[#00eaff] transition-colors duration-200 no-underline"
// //           >
// //             About
// //           </Link>
// //           <Link 
// //             href="/privacy" 
// //             className="text-white !text-white hover:!text-[#00eaff] transition-colors duration-200 no-underline"
// //           >
// //             Privacy
// //           </Link>
// //           <a 
// //             href="mailto:contact@algoarn.com" 
// //             className="text-white !text-white hover:!text-[#00eaff] transition-colors duration-200 no-underline"
// //           >
// //             contact@algoarn.com
// //           </a>
// //         </div>

// //       </div>
// //     </footer>
// //   );
// // }

// import Link from "next/link";
// import Image from "next/image";

// const CURRENT_YEAR = 2025;

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-black/95 backdrop-blur-sm">
//       {/* Standard professional padding: py-4 md:py-5 */}
//       <div className="max-w-6xl mx-auto px-6 py-4 md:py-5">
        
//         {/* Main content - stacked on mobile, side-by-side on desktop */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
//           {/* Left section - Logo and copyright */}
//           <div className="flex flex-col sm:flex-row items-center gap-3">
//             <div className="flex items-center gap-3">
//               <Image
//                 src="/algo-logo.jpg"
//                 alt="Algoarn Logo"
//                 width={100}
//                 height={32}
//                 className="opacity-95 hover:opacity-100 transition-opacity"
//               />
//               <div className="hidden sm:block h-5 w-px bg-white/20" />
//             </div>
//             <p className="text-sm text-white/70 text-center sm:text-left">
//               © {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd.
//               <span className="block sm:inline text-xs text-white/50 mt-0.5 sm:mt-0 sm:ml-2">
//                 All rights reserved.
//               </span>
//             </p>
//           </div>

//           {/* Right section - Links */}
//           <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
//             <div className="flex items-center gap-4">
//               <Link 
//                 href="/about" 
//                 className="text-white/80 hover:text-[#00eaff] transition-colors duration-200 hover:underline underline-offset-2"
//               >
//                 About
//               </Link>
//               <Link 
//                 href="/privacy" 
//                 className="text-white/80 hover:text-[#00eaff] transition-colors duration-200 hover:underline underline-offset-2"
//               >
//                 Privacy Policy
//               </Link>
//             </div>
            
//             <div className="hidden sm:block h-4 w-px bg-white/20" />
            
//             <a 
//               href="mailto:contact@algoarn.com" 
//               className="text-white/90 hover:text-[#00eaff] transition-colors duration-200 font-medium flex items-center gap-1.5 group"
//             >
//               <svg 
//                 className="w-3.5 h-3.5 text-white/60 group-hover:text-[#00eaff] transition-colors" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               contact@algoarn.com
//             </a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Instagram, Linkedin, Sparkles } from "lucide-react";

const CURRENT_YEAR = 2025;

// Deterministic particles (same pattern as services / about pages)
const footerParticles = Array.from({ length: 10 }, (_, i) => ({
  left: `${(i * 17) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 3 + (i % 3),
  delay: (i % 4) * 0.4,
}));

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-white/10">

      {/* ── Ambient blobs (match page sections) ── */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* ── Dot pattern (same as cards) ── */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {footerParticles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -30, 0], opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Top gradient accent line ── */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-start">

          {/* ── Logo + tagline ── */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start gap-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/algo-logo.jpg"
                alt="Algoarn Logo"
                width={200}
                height={56}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity rounded-xl"
              />
            </motion.div>
            {/* Gradient badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span className="text-[11px] font-medium text-gray-300 tracking-widest uppercase">
                AI Solutions
              </span>
            </div>
          </div>

          {/* ── Address ── */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-5 text-sm tracking-widest uppercase bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Address
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pole Workspaces<br />
              33/1 Racha, Galaxy 21st<br />
              Marenahalli, Vijayanagar (Bangalore)<br />
              Bangalore North, Bangalore – 560040<br />
              Karnataka, India
            </p>
          </div>

          {/* ── Navigation ── */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-5 text-sm tracking-widest uppercase bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", text: "About Us" },
                { href: "/services", text: "Services" },
                { href: "/contact", text: "Contact" },
                { href: "/blog", text: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-4 transition-all duration-300 rounded-full" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-5 text-sm tracking-widest uppercase bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@algoarn.com"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-sm">contact@algoarn.com</span>
              </a>

              <a
                href="tel:+918904252232"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <span className="text-sm">+91 8904252232</span>
              </a>
            </div>
          </div>

          {/* ── Social ── */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-5 text-sm tracking-widest uppercase bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {[
                { href: "#", icon: Facebook, label: "Facebook", hover: "hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400" },
                { href: "#", icon: Instagram, label: "Instagram", hover: "hover:bg-pink-500/20 hover:border-pink-500/40 hover:text-pink-400" },
                { href: "#", icon: Linkedin, label: "LinkedIn", hover: "hover:bg-indigo-500/20 hover:border-indigo-500/40 hover:text-indigo-400" },
              ].map(({ href, icon: Icon, label, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${hover}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full" />
          <p className="text-gray-600 text-xs">
            Built with precision · Powered by AI
          </p>
        </div>

      </div>
    </footer>
  );
}