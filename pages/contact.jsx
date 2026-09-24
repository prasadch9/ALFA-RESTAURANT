import { useState } from "react";
import Head from "next/head";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend-only demo: connect this to your email/API service later.
    setSent(true);
  };

  return (
    <>
      <Head>
        <title>Contact | ALFA Restaurant</title>

        <meta
          name="description"
          content="Get in touch with ALFA Restaurant — location, phone, hours, and reservation requests."
        />
      </Head>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="font-display text-4xl md:text-6xl text-bone tracking-tightish">
            Get In <span className="text-gold">Touch</span>
          </h1>

          <div className="gold-rule w-16 mx-auto mt-4 rounded-full" />

          <p className="text-bone/60 mt-5">
            Questions, feedback or a table to book — reach out and we'll get
            right back to you.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location */}
            <div className="card-3d rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gold-sheen flex items-center justify-center shrink-0 shadow-popGold">
                  <FaMapMarkerAlt className="text-ink" />
                </div>

                <div>
                  <h3 className="font-display text-lg text-bone tracking-tightish">
                    Location
                  </h3>

                  <p className="text-bone/60 text-sm mt-1">
                  Beside Jakkampudi Blood bank, opp Samhitha Scanning Centre,, Rajahmundry (533101).
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="card-3d rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gold-sheen flex items-center justify-center shrink-0 shadow-popGold">
                  <FaPhoneAlt className="text-ink" />
                </div>

                <div>
                  <h3 className="font-display text-lg text-bone tracking-tightish">
                    Phone
                  </h3>

                  <p className="text-bone/60 text-sm mt-1">
                    084880 80999
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card-3d rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gold-sheen flex items-center justify-center shrink-0 shadow-popGold">
                  <FaEnvelope className="text-ink" />
                </div>

                <div>
                  <h3 className="font-display text-lg text-bone tracking-tightish">
                    Email
                  </h3>

                  <p className="text-bone/60 text-sm mt-1">
                    hello@alfarestaurant.com
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card-3d rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gold-sheen flex items-center justify-center shrink-0 shadow-popGold">
                  <FaClock className="text-ink" />
                </div>

                <div>
                  <h3 className="font-display text-lg text-bone tracking-tightish">
                    Hours
                  </h3>

                  <p className="text-bone/60 text-sm mt-1">
                    Mon - Sun: 11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card-3d rounded-2xl p-6">
              <h3 className="font-display text-lg text-bone tracking-tightish mb-4">
                Follow Us
              </h3>

              <div className="flex items-center gap-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/staralfarestaurant?stkn=dGJta21xZjh0ZzV2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-full bg-ink border border-white/10 flex items-center justify-center text-bone hover:text-ink hover:bg-gold-sheen transition-colors shadow-pop"
                >
                  <FaInstagram size={20} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19U5C61Xwj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-full bg-ink border border-white/10 flex items-center justify-center text-bone hover:text-ink hover:bg-gold-sheen transition-colors shadow-pop"
                >
                  <FaFacebookF size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3">
            {/* You can add your contact form here */}
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-14 card-3d rounded-2xl overflow-hidden h-72 md:h-96">
          <iframe
            title="ALFA Restaurant location"
            src="https://www.google.com/maps?q=India&output=embed"
            className="w-full h-full border-0 grayscale contrast-125 opacity-90"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}