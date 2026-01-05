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
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const CURRENT_YEAR = 2025;

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* subtle animated highlight (like your reference) */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="transition-transform duration-300 hover:scale-[1.03]">
              <Image
                src="/algo-logo.jpg"
                alt="Algoarn Logo"
                width={220}
                height={60}
                className="object-contain opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Address */}
          {/* Address */}
<div className="lg:col-span-1">
  <h3 className="font-semibold mb-4 text-blue-300">Address</h3>
  <div className="space-y-2 text-gray-300 text-sm leading-relaxed">
    <p>Pole Workspaces</p>
    <p>33/1 Racha, Galaxy 21st</p>
    <p>Marenahalli, Vijayanagar</p>
    <p>Bangalore North</p>
    <p>Karnataka, India – 560040</p>
  </div>
</div>


          {/* Navigation */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-blue-300">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", text: "About Us" },
                { href: "/services", text: "Services" },
                { href: "/contact", text: "Contact" },
                { href: "/blog", text: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-blue-300">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:contact@algoarn.com"
                  className="hover:underline text-sm"
                >
                  contact@algoarn.com
                </a>
              </div>

              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href="tel:+910000000000" className="hover:underline text-sm">
                  +91 8904252232
                </a>
              </div>

            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-blue-300">Follow Us</h3>
            <div className="flex items-center gap-4 text-xl">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="w-28 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-3" />
        </div>
      </div>
    </footer>
  );
}
