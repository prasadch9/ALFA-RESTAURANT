import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-char border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12">
              <Image src="/logo.jpg" alt="ALFA Restaurant logo" fill className="object-contain" />
            </div>
            <span className="font-display text-xl text-bone">
              ALFA <span className="text-gold">RESTAURANT</span>
            </span>
          </div>
          <p className="text-bone/60 text-sm max-w-xs leading-relaxed">
            Fire-grilled classics and slow-cooked favorites, served with bold
            flavor and warm hospitality.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4 tracking-tightish">Quick Links</h4>
          <ul className="space-y-2 text-bone/70 text-sm">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4 tracking-tightish">Visit Us</h4>
          <ul className="space-y-3 text-bone/70 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-gold mt-1 shrink-0" />
              <span>123 MG Road, Your City, India</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gold shrink-0" />
              <span>+91 98765 43210</span>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-ink border border-white/10 flex items-center justify-center text-bone hover:text-ink hover:bg-gold transition-colors shadow-pop"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-ink border border-white/10 flex items-center justify-center text-bone hover:text-ink hover:bg-gold transition-colors shadow-pop"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-bone/40 text-xs">
        © {new Date().getFullYear()} ALFA Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
