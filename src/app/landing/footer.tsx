"use client";
// @ts-ignore
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // demo behaviour: show a quick success micro-state
    if (email && email.includes("@")) {
      setSubscribed(true);
      setTimeout(() => setEmail(""), 600);
    }
  };

  return (
    <footer className=" relative bg-gradient-to-t from-neutral-900 via-black to-neutral-900 text-neutral-100  invert">
      {/* soft decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-screen "
        style={{
          background:
            "radial-gradient(1200px 400px at 10% 20%, rgba(255,180,70,0.06), transparent 12%), radial-gradient(1000px 300px at 90% 80%, rgba(255,140,0,0.04), transparent 12%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-16 lg:px-20 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand + short */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src={"Asset7.png"} className="w-10" />
              <div>
                <p className="text-sm text-neutral-300 font-medium">
                  TicketWhiz
                </p>
                <p className="text-xs text-neutral-500">
                  Every Ticket. One Search.
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400">
              We aggregate listings from trusted marketplaces so you can compare
              prices, sellers, and pick the best seats — fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <ContactItem icon={<Phone size={18} />} label="+1234567890" />
              <ContactItem
                icon={<Mail size={18} />}
                label="hello@ticketwhiz.com"
              />
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-4  flex justify-center  ">
            {/* <div>
              <h4 className="text-sm font-semibold text-amber-300 mb-3">
                Product
              </h4>
              <nav className="flex flex-col gap-2 text-sm text-neutral-400">
                <a href="#" className="footer-link">
                  Search
                </a>
                <a href="#" className="footer-link">
                  How it works
                </a>
                <a href="#" className="footer-link">
                  Pricing
                </a>
                <a href="#" className="footer-link">
                  Developers
                </a>
              </nav>
            </div> */}

            <div>
              <h4 className="text-md font-semibold text-amber-300 mb-4">
                Other Pages
              </h4>
              <nav className="flex flex-col gap-2 text-md text-neutral-400">
                <a href="#" className="footer-link">
                  About Us
                </a>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>

          {/* Newsletter + social */}
          <div className="md:col-span-3 flex flex-col items-start  gap-4">
            <h4 className="text-sm font-semibold text-amber-300">
              Join our newsletter
            </h4>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-sm"
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center bg-neutral-800/40 rounded-full p-1.5 ring-1 ring-neutral-700">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent placeholder-neutral-500 text-sm text-white outline-none px-4 py-2 w-full"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center min-w-10 h-10 rounded-full bg-amber-400 text-black  shadow"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              <div className="mt-2 text-xs text-neutral-500">
                {subscribed ? (
                  <span className="text-amber-300">
                    Thanks — we'll keep you posted.
                  </span>
                ) : (
                  "No spam. Unsubscribe anytime."
                )}
              </div>
            </form>

            <div className="w-full max-w-sm">
              <p className="text-sm text-neutral-400 mb-3">Follow us</p>
              <div className="flex items-center gap-3">
                <SocialIcon icon={<Facebook size={16} />} label="Facebook" />
                <SocialIcon icon={<Twitter size={16} />} label="Twitter" />
                <SocialIcon icon={<Instagram size={16} />} label="Instagram" />
                <SocialIcon icon={<Youtube size={16} />} label="YouTube" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-700/30 text-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} TicketWhiz — All rights reserved.
          </p>

          <p className="mt-4 text-xs text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            TicketWhiz is a metasearch engine. We do not sell or issue tickets.
            Purchases are completed on third-party marketplaces. Prices and
            availability may change.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          color: rgba(226, 232, 240, 0.8);
          display: inline-block;
          transition: color 160ms ease, transform 160ms ease;
        }
        .footer-link:hover,
        .footer-link:focus {
          color: #ffd28a; /* amber-300 */
          transform: translateY(-2px);
          outline: none;
        }
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
      `}</style>
    </footer>
  );
}

function ContactItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-neutral-800/40 ring-1 ring-neutral-700/40">
        {icon}
      </div>
      <div className="text-sm text-neutral-200 font-medium">{label}</div>
    </div>
  );
}

function SocialIcon({ icon, label }) {
  return (
    <button
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-md bg-neutral-800/30 hover:bg-amber-600/10 ring-1 ring-neutral-700/40 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
    >
      <span className="text-neutral-200">{icon}</span>
    </button>
  );
}
