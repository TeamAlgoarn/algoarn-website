// // // import Link from "next/link";

// // // export default function Footer() {
// // //   return (
// // //     <footer className="border-t border-white/10 bg-black/40 mt-20">
// // //       <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">

// // //         <p>
// // //           © {new Date().getFullYear()} Algoarn AI Solutions Pvt. Ltd.
// // //         </p>

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

// // const CURRENT_YEAR = 2025; // or new Date().getFullYear() run ONCE at build time

// // export default function Footer() {
// //   return (
// //     <footer className="border-t border-white/10 bg-black/40 mt-20">
// //       <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
// //         <p>© {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd.</p>

// //         <div className="flex items-center gap-4">
// //           <Link href="/about" className="hover:text-white">
// //             About
// //           </Link>
// //           <Link href="/privacy" className="hover:text-white">
// //             Privacy
// //           </Link>
// //           <a href="mailto:contact@algoarn.com" className="hover:text-white">
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
//     <footer className="border-t border-black/10 bg-black/40 mt-20" style={{backgroundColor:'black'}}>
//       <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-black/60">

//         {/* LEFT SIDE: LOGO + COPYRIGHT */}
//         <div className="flex items-center gap-4">
//           <Image
//             src="/algo-logo.jpg"     // ← make sure file exists in /public
//             alt="Algoarn Logo"
//             width={120}
//             height={40}
//             className="opacity-90"
//           />
//           <p>© {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd.</p>
//         </div>

//         {/* RIGHT SIDE: LINKS */}
//         <div className="flex items-center gap-4">
//           <Link href="/about" className="hover:text-white">About</Link>
//           <Link href="/privacy" className="hover:text-white">Privacy</Link>
//           <a href="mailto:contact@algoarn.com" className="hover:text-white">
//             contact@algoarn.com
//           </a>
//         </div>

//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Image from "next/image";

const CURRENT_YEAR = 2025;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

        {/* LEFT SIDE: LOGO + COPYRIGHT */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-white/80">
          <Image
            src="/algo-logo.jpg"
            alt="Algoarn Logo"
            width={120}
            height={40}
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
          <p className="text-center sm:text-left">
            © {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd.
          </p>
        </div>

        {/* RIGHT SIDE: LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link 
            href="/about" 
            className="text-white !text-white  hover:!text-[#00eaff] transition-colors duration-200 no-underline"
          >
            About
          </Link>
          <Link 
            href="/privacy" 
            className="text-white !text-white hover:!text-[#00eaff] transition-colors duration-200 no-underline"
          >
            Privacy
          </Link>
          <a 
            href="mailto:contact@algoarn.com" 
            className="text-white !text-white hover:!text-[#00eaff] transition-colors duration-200 no-underline"
          >
            contact@algoarn.com
          </a>
        </div>

      </div>
    </footer>
  );
}