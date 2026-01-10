// // // import type { Metadata } from "next";
// // // import "./globals.css";
// // // import {Navbar} from "@/components/layout/Navbar";
// // // import Footer from "@/components/layout/Footer";

// // // export const metadata: Metadata = {
// // //   title: "Algoarn – Smart AI for Smarter Institutions & Businesses",
// // //   description:
// // //     "Algoarn provides AI solutions, SUCA academic intelligence, and AI services for institutions and businesses.",
// // // };

// // // export default function RootLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode;
// // // }) {
// // //   return (
// // //     <html lang="en">
// // //       <body className="bg-carbonBlack text-white">
// // //         <div className="min-h-screen bg-hero-grid flex flex-col">

// // //           <Navbar />

// // //           <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
// // //             {children}
// // //           </main>

// // //           <Footer />

// // //         </div>
// // //       </body>
// // //     </html>
// // //   );
// // // }


// // import type { Metadata } from "next";
// // import "./globals.css";
// // import { Navbar } from "@/components/layout/Navbar";
// // import Footer from "@/components/layout/Footer";
// // import { Providers } from "@/providers/Providers";

// // export const metadata: Metadata = {
// //   title: "Algoarn – Smart AI for Smarter Institutions & Businesses",
// //   description:
// //     "Algoarn provides AI solutions, SUCA academic intelligence, and AI services for institutions and businesses.",
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en">
// //       <body className="bg-carbonBlack text-white">
// //         <Providers>
// //           <div className="min-h-screen bg-hero-grid flex flex-col">
// //             <Navbar />

// //             <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
// //               {children}
// //             </main>

// //             <Footer />
// //           </div>
// //         </Providers>
// //       </body>
// //     </html>
// //   );
// // }


// import type { Metadata } from "next";
// import "./globals.css";
// import { Navbar } from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import { Providers } from "@/providers/Providers";
// import ContactModalProvider from "@/components/contact/contact-modal-provider";

// export const metadata: Metadata = {
//   title: "Algoarn – Smart AI for Smarter Institutions & Businesses",
//   description:
//     "Algoarn provides AI solutions, SUCA academic intelligence, and AI services for institutions and businesses.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-carbonBlack text-white">
//         <Providers>
//           <ContactModalProvider>
//             <div className="min-h-screen bg-hero-grid flex flex-col">
//               <Navbar />

//               <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
//                 {children}
//               </main>

//               <Footer />
//             </div>
//           </ContactModalProvider>
//         </Providers>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/providers/Providers";
import ContactModalProvider from "@/components/contact/contact-modal-provider";

export const metadata: Metadata = {
  title: "Algoarn – Smart AI for Smarter Institutions & Businesses",
  description:
    "Algoarn provides AI solutions, SUCA academic intelligence, and AI services for institutions and businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-carbonBlack text-white">
        <Providers>
          <ContactModalProvider>
            <div className="min-h-screen bg-hero-grid flex flex-col">
              <Navbar />

              <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
                {children}
              </main>

              <Footer />
            </div>
          </ContactModalProvider>
        </Providers>
      </body>
    </html>
  );
}
