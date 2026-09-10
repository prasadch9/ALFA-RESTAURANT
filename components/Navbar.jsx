import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur shadow-pop border-b border-white/5"
          : "bg-ink/70 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-14 h-14 md:w-16 md:h-16">
            <Image
              src="/logo.jpg"
              alt="ALFA Restaurant logo"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-2xl md:text-3xl tracking-tightish text-bone leading-none hidden sm:block">
            ALFA <span className="text-gold">RESTAURANT</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => {
            const active = router.pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative px-4 py-2 font-display text-base tracking-tightish transition-colors ${
                    active ? "text-gold" : "text-bone/85 hover:text-gold"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-[3px] rounded-full bg-gold transition-transform origin-left ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/contact" className="btn-gold ml-2 px-5 py-2.5 rounded-md font-display text-sm tracking-wide">
              Reserve a Table
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-bone text-2xl p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-char border-t border-white/5 px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const active = router.pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block py-3 font-display text-lg tracking-tightish border-b border-white/5 ${
                      active ? "text-gold" : "text-bone/85"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="btn-gold block text-center mt-4 px-5 py-3 rounded-md font-display text-sm tracking-wide"
          >
            Reserve a Table
          </Link>
        </div>
      )}
    </header>
  );
}
