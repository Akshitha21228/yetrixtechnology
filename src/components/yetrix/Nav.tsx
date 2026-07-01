// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Link } from "@tanstack/react-router";
// import { BrandLogo } from "./BrandLogo";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/services", label: "Services" },
//   { to: "/work", label: "Work" },
//   { to: "/contact", label: "Contact" },
// ];

// export function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
//         scrolled ? "py-3" : "py-5"
//       }`}
//     >
//       <div className="mx-auto max-w-7xl px-5">
//         <div
//           className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
//             scrolled ? "glass-strong" : ""
//           }`}
//         >
//           <BrandLogo className="shrink-0" imageClassName="h-11 sm:h-12" />
//           <nav className="hidden md:flex items-center gap-1">
//             {links.map((l) => (
//               <Link
//                 key={l.to}
//                 to={l.to}
//                 className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
//               >
//                 {l.label}
//               </Link>
//             ))}
//           </nav>
//           <Link
//             to="/contact"
//             className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-black overflow-hidden"
//             style={{ background: "var(--gradient-brand)" }}
//           >
//             <span className="relative z-10">Request a Quote</span>
//             <span className="relative z-10">→</span>
//           </Link>
//         </div>
//       </div>
//     </motion.header>
//   );
// }
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/product", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <BrandLogo className="shrink-0" imageClassName="h-11 sm:h-12" />
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-black overflow-hidden"
            style={{ background: "var(--gradient-brand)" }}
          >
            <span className="relative z-10">Request a Quote</span>
            <span className="relative z-10">→</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}