// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-black/40 mt-20">
//       <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">

//         <p>
//           © {new Date().getFullYear()} Algoarn AI Solutions Pvt. Ltd.
//         </p>

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

const CURRENT_YEAR = 2025; // or new Date().getFullYear() run ONCE at build time

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {CURRENT_YEAR} Algoarn AI Solutions Pvt. Ltd.</p>

        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <a href="mailto:contact@algoarn.com" className="hover:text-white">
            contact@algoarn.com
          </a>
        </div>
      </div>
    </footer>
  );
}
