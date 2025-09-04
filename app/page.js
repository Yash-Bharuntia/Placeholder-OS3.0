"use client";

import { useState } from "react";

export default function Home() {
  // Theme: 'light' | 'aurora' | 'oh20'
  const [theme, setTheme] = useState("light");
  const isLight = theme === "light";
  const isAurora = theme === "aurora";
  const isOH20 = theme === "oh20";

  // Backgrounds
  const background = isLight
    ? "bg-gradient-to-br from-pink-400 via-yellow-300 to-blue-400"
    : isAurora
    ? "bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1a2980]"
    : "bg-gradient-to-br from-[#0b0014] via-[#1a0933] to-[#2a0b5a]"; // OH 2.0 (purple) theme

  const cycleTheme = () => setTheme(isLight ? "aurora" : isAurora ? "oh20" : "light");
  const themeLabel = isLight ? "Light" : isAurora ? "Aurora" : "OH 2.0";
  const pick = (lightCls, auroraCls, oh20Cls) => (isLight ? lightCls : isAurora ? auroraCls : oh20Cls);

  return (
    <main
      className={`font-sans min-h-screen ${background} flex flex-col items-center justify-center p-4 sm:p-8 transition-colors duration-500`}
    >
      {/* Theme Toggle */}
      <button
        onClick={cycleTheme}
        className={pick(
          "fixed top-6 right-6 px-4 py-2 rounded-full font-bold shadow-lg bg-black text-white hover:bg-pink-400 transition-colors z-50",
          "fixed top-6 right-6 px-4 py-2 rounded-full font-bold shadow-lg bg-[#43cea2] text-black hover:bg-[#f9d423] transition-colors z-50",
          "fixed top-6 right-6 px-4 py-2 rounded-full font-bold shadow-lg bg-[#8b5cf6] text-white hover:bg-[#d946ef] transition-colors z-50"
        )}
        aria-label="Cycle theme"
        title="Cycle theme"
      >
        {themeLabel}
      </button>

      {/* Hero Section */}
      <section
        className={`w-full max-w-2xl rounded-3xl shadow-lg p-8 mb-8 text-center border-4 ${pick(
          "bg-black border-pink-400",
          "bg-[#0f172a]/80 border-[#43cea2]",
          "bg-[#140022]/80 border-[#8b5cf6]"
        )}`}
      >
        <h1
          className={pick(
            "text-5xl font-extrabold text-pink-400 mb-4",
            "text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#43cea2] via-[#7bffb7] to-[#a1c4fd] mb-4",
            "text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] to-[#8b5cf6] mb-4"
          )}
        >
          Ossome Hacks 3.0
        </h1>
        <p className={pick("text-lg text-yellow-300", "text-lg text-[#f9d423]", "text-lg text-[#e9d5ff]")}>Event Date: {" "}
          <span className={pick("font-bold text-blue-400", "font-bold text-[#7bffb7]", "font-bold text-[#c084fc]")}>November 2025</span>
        </p>
        <p className={pick("text-white mt-2", "text-white/90 mt-2", "text-white/90 mt-2")}>
          Check back on {" "}
          <span className={pick("text-yellow-300 font-semibold", "text-[#f9d423] font-semibold", "text-[#d946ef] font-semibold")}>October 1st</span> for more info!
        </p>
      </section>

      {/* Pre-Registration Form */}
      <section
        className={`w-full max-w-xl rounded-2xl shadow-md p-6 mb-8 border-2 ${pick(
          "bg-white border-blue-400",
          "bg-[#0b132b]/70 border-[#7bffb7]",
          "bg-[#1a0933]/70 border-[#8b5cf6]"
        )}`}
      >
        <h2 className={pick("text-2xl font-bold text-pink-400 mb-4", "text-2xl font-bold text-[#ff6e7f] mb-4", "text-2xl font-bold text-[#d946ef] mb-4")}>
          Pre-Registration
        </h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={pick(
              "w-full px-4 py-2 rounded-lg border-2 border-pink-400 focus:border-yellow-300 focus:outline-none",
              "w-full px-4 py-2 rounded-lg border-2 bg-[#0f172a] text-white border-[#ff6e7f] focus:border-[#f9d423] focus:outline-none",
              "w-full px-4 py-2 rounded-lg border-2 bg-[#140022] text-white border-[#d946ef] focus:border-[#8b5cf6] focus:outline-none"
            )}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={pick(
              "w-full px-4 py-2 rounded-lg border-2 border-blue-400 focus:border-yellow-300 focus:outline-none",
              "w-full px-4 py-2 rounded-lg border-2 bg-[#0f172a] text-white border-[#7bffb7] focus:border-[#f9d423] focus:outline-none",
              "w-full px-4 py-2 rounded-lg border-2 bg-[#140022] text-white border-[#8b5cf6] focus:border-[#d946ef] focus:outline-none"
            )}
          />
          <input
            type="text"
            name="social"
            placeholder="Social Link"
            className={pick(
              "w-full px-4 py-2 rounded-lg border-2 border-yellow-300 focus:border-pink-400 focus:outline-none",
              "w-full px-4 py-2 rounded-lg border-2 bg-[#0f172a] text-white border-[#f9d423] focus:border-[#ff6e7f] focus:outline-none",
              "w-full px-4 py-2 rounded-lg border-2 bg-[#140022] text-white border-[#c084fc] focus:border-[#d946ef] focus:outline-none"
            )}
          />
          <button
            type="submit"
            className={pick(
              "w-full py-2 rounded-lg bg-pink-400 text-white font-bold hover:bg-yellow-300 hover:text-black transition-colors",
              "w-full py-2 rounded-lg bg-[#43cea2] text-black font-bold hover:bg-[#f9d423] transition-colors",
              "w-full py-2 rounded-lg bg-[#8b5cf6] text-white font-bold hover:bg-[#d946ef] transition-colors"
            )}
          >
            Submit
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section
        className={`w-full max-w-xl rounded-2xl shadow-md p-6 mb-8 border-2 ${pick(
          "bg-black border-yellow-300",
          "bg-[#0f172a]/80 border-[#f9d423]",
          "bg-[#140022]/80 border-[#d946ef]"
        )}`}
      >
        <h2 className={pick("text-2xl font-bold text-yellow-300 mb-2", "text-2xl font-bold text-[#f9d423] mb-2", "text-2xl font-bold text-[#e9d5ff] mb-2")}>
          Contact Us
        </h2>
        <p className="text-white">
          Email: {" "}
          <a
            href="mailto:hackathon@yourdomain.com"
            className={pick("text-blue-400 underline", "text-[#7bffb7] underline", "text-[#c084fc] underline")}
          >
            hackathon@yourdomain.com
          </a>
        </p>
      </section>

      {/* Social Media Section */}
      <section
        className={`w-full max-w-xl rounded-2xl shadow-md p-6 mb-8 border-2 ${pick(
          "bg-white border-pink-400",
          "bg-[#0b132b]/70 border-[#ff6e7f]",
          "bg-[#1a0933]/70 border-[#8b5cf6]"
        )}`}
      >
        <h2 className={pick("text-2xl font-bold text-blue-400 mb-4", "text-2xl font-bold text-[#7bffb7] mb-4", "text-2xl font-bold text-[#c084fc] mb-4")}>
          Follow Us
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://facebook.com/yourpage" className={pick(
            "px-4 py-2 rounded-lg bg-blue-400 text-white font-semibold hover:bg-pink-400 transition-colors",
            "px-4 py-2 rounded-lg bg-[#7bffb7] text-black font-semibold hover:bg-[#ff6e7f] transition-colors",
            "px-4 py-2 rounded-lg bg-[#8b5cf6] text-white font-semibold hover:bg-[#d946ef] transition-colors"
          )}>Facebook</a>
          <a href="https://instagram.com/yourpage" className={pick(
            "px-4 py-2 rounded-lg bg-pink-400 text-white font-semibold hover:bg-yellow-300 transition-colors",
            "px-4 py-2 rounded-lg bg-[#ff6e7f] text-black font-semibold hover:bg-[#f9d423] transition-colors",
            "px-4 py-2 rounded-lg bg-[#d946ef] text-white font-semibold hover:bg-[#8b5cf6] transition-colors"
          )}>Instagram</a>
          <a href="https://github.com/yourorg/yourrepo" className={pick(
            "px-4 py-2 rounded-lg bg-black text-white font-semibold hover:bg-blue-400 transition-colors",
            "px-4 py-2 rounded-lg bg-[#0f172a] text-white font-semibold hover:bg-[#7bffb7] transition-colors",
            "px-4 py-2 rounded-lg bg-[#140022] text-white font-semibold hover:bg-[#d946ef] transition-colors"
          )}>GitHub</a>
          <a href="https://linkedin.com/company/yourpage" className={pick(
            "px-4 py-2 rounded-lg bg-yellow-300 text-black font-semibold hover:bg-pink-400 transition-colors",
            "px-4 py-2 rounded-lg bg-[#f9d423] text-black font-semibold hover:bg-[#ff6e7f] transition-colors",
            "px-4 py-2 rounded-lg bg-[#c084fc] text-black font-semibold hover:bg-[#8b5cf6] transition-colors"
          )}>LinkedIn</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`w-full max-w-xl rounded-2xl shadow-md p-6 mb-8 border-2 ${pick(
          "bg-white border-yellow-300",
          "bg-[#0b132b]/70 border-[#f9d423]",
          "bg-[#1a0933]/70 border-[#8b5cf6]"
        )}`}
      >
        <h2 className={pick("text-2xl font-bold text-pink-400 mb-4", "text-2xl font-bold text-[#ff6e7f] mb-4", "text-2xl font-bold text-[#d946ef] mb-4")}>
          FAQ
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li className={pick("text-black", "text-[#7bffb7]", "text-[#e9d5ff]")}>
            What is a hackathon? {" "}
            <span className={pick("text-blue-400", "text-[#ff6e7f]", "text-[#c084fc]")}>
              A hackathon is an event where people collaborate to build tech projects in a short time.
            </span>
          </li>
          <li className={pick("text-black", "text-[#f9d423]", "text-[#e9d5ff]")}>
            Who can participate? {" "}
            <span className={pick("text-yellow-300", "text-[#7bffb7]", "text-[#c084fc]")}>Anyone interested in technology, coding, or design!</span>
          </li>
          <li className={pick("text-black", "text-[#ff6e7f]", "text-[#e9d5ff]")}>
            Do I need experience? {" "}
            <span className={pick("text-pink-400", "text-[#f9d423]", "text-[#d946ef]")}>No prior experience required.</span>
          </li>
        </ul>
      </section>

      {/* Sponsors Section */}
      <section
        className={`w-full max-w-xl rounded-2xl shadow-md p-6 mb-8 border-2 ${pick(
          "bg-black border-blue-400",
          "bg-[#0f172a]/80 border-[#7bffb7]",
          "bg-[#140022]/80 border-[#8b5cf6]"
        )}`}
      >
        <h2 className={pick("text-2xl font-bold text-yellow-300 mb-2", "text-2xl font-bold text-[#f9d423] mb-2", "text-2xl font-bold text-[#e9d5ff] mb-2")}>
          Sponsors
        </h2>
        <p className="text-white mb-2">
          Interested in sponsoring? Email us at {" "}
          <a href="mailto:sponsor@yourdomain.com" className={pick("text-pink-400 underline", "text-[#ff6e7f] underline", "text-[#d946ef] underline")}>
            sponsor@yourdomain.com
          </a>
        </p>
        <p className="text-white">
          Learn more on our {" "}
          <a href="/sponsors" className={pick("text-blue-400 underline", "text-[#7bffb7] underline", "text-[#8b5cf6] underline")}>
            Sponsor Page
          </a>
          .
        </p>
      </section>
    </main>
  );
}
