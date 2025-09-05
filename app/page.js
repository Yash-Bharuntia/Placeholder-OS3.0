"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // Theme: 'light' | 'aurora' | 'oh20'
  const [theme, setTheme] = useState("light");
  const isLight = theme === "light";
  const isAurora = theme === "aurora";
  const isOH20 = theme === "oh20";
  const [heroSrc, setHeroSrc] = useState("/ossome-hacks-3.0.png");
  const [ghBadgeOk, setGhBadgeOk] = useState(true);

  // Backgrounds
  const background = isLight
    ? "bg-gradient-to-br from-pink-400 via-yellow-300 to-blue-400"
    : isAurora
    ? "bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1a2980]"
    : "bg-gradient-to-br from-[#0b0014] via-[#1a0933] to-[#2a0b5a]"; // OH 2.0 (purple) theme

  const cycleTheme = () => setTheme(isLight ? "aurora" : isAurora ? "oh20" : "light");
  const themeLabel = isLight ? "Light" : isAurora ? "Aurora" : "OH 2.0";
  const pick = (lightCls, auroraCls, oh20Cls) => (isLight ? lightCls : isAurora ? auroraCls : oh20Cls);

  // FAQ accordion: only one open at a time
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (key) => setOpenFaq((prev) => (prev === key ? null : key));

  const faqs = [
    {
      category: "General",
      items: [
        {
          key: "gen-what-hackathon",
          q: "What is a hackathon?",
          a: "A hackathon is a creative sprint where people form teams to build projects and prototypes in a short time, then demo them to judges and peers.",
        },
        {
          key: "gen-when-oh3",
          q: "When is Ossome Hacks 3.0?",
          a: "Planned for November 2025 at SRM IST, Chennai. The detailed schedule will be announced on October 1st.",
        },
        {
          key: "gen-cost",
          q: "What's the cost?",
          a: "Attendance is free for accepted participants.",
        },
        {
          key: "gen-prizes",
          q: "What can I win?",
          a: "We’ll offer general prizes, a beginner prize, and track prizes. You’ll also get event swag by submitting a project.",
        },
        {
          key: "gen-beginner",
          q: "But I’ve never hacked before!",
          a: "You’re welcome! We’ll have beginner-friendly resources, mentors, and workshops to help you get started.",
        },
        {
          key: "gen-early-start",
          q: "Can I start building before the event?",
          a: "Brainstorm ideas early, but building should happen during the event to stay eligible for prizes.",
        },
        {
          key: "gen-puzzle",
          q: "Is there an admissions puzzle?",
          a: "No puzzle this year. Just apply and show up ready to build!",
        },
        {
          key: "gen-still-questions",
          q: "Still have questions?",
          a: "Email us anytime at community@githubsrmist.edu.tech.",
        },
      ],
    },
    {
      category: "Registration",
      items: [
        { key: "reg-apply", q: "Can I apply?", a: "Yes. Pre‑registration is open—submit the form above to get notified when full applications open." },
        { key: "reg-eligibility", q: "What if I’m not eligible? Can I mentor or judge?", a: "If you’re not a student or can’t compete, you can volunteer, mentor, or judge. Email community@githubsrmist.edu.tech." },
        { key: "reg-how", q: "How do I apply?", a: "Fill out the pre‑registration form. We’ll email you when the full application opens with all requirements." },
        { key: "reg-teams", q: "How do teams work?", a: "Teams of up to 4 are allowed. You can come solo and form a team at the event too." },
        { key: "reg-srm", q: "What if I study at SRM?", a: "SRM students are welcome, and selection will follow the same process as other schools." },
        { key: "reg-mentor-judge", q: "Where can I apply to be a mentor or judge?", a: "Send a short intro to community@githubsrmist.edu.tech and we’ll get back with details." },
      ],
    },
    {
      category: "Tracks",
      items: [
        { key: "trk-what", q: "What are hackathon tracks?", a: "Tracks are themed challenge areas to guide your project (e.g., AI, DevTools, Sustainability). Final tracks will be announced with the full site." },
        { key: "trk-submit", q: "Do I have to submit a project if I attend?", a: "To be eligible for prizes and swag, yes—you should submit a project." },
      ],
    },
    {
      category: "In‑Person Logistics",
      items: [
        { key: "log-virtual", q: "Can I attend virtually?", a: "The event is primarily in‑person. We’ll share any remote participation options if available." },
        { key: "log-food", q: "Will food be provided?", a: "Yes—meals and snacks will be provided during hacking hours." },
        { key: "log-overnight", q: "Will there be overnight accommodations?", a: "Overnight hacking space will be available on‑site, following campus guidelines." },
        { key: "log-where", q: "Where is Ossome Hacks 3.0?", a: "SRM Institute of Science & Technology (SRM IST), Chennai." },
        { key: "log-travel", q: "Will my travel be reimbursed?", a: "Travel reimbursement is not guaranteed. Details, if any, will be announced." },
        { key: "log-hardware", q: "Will there be hardware I can use?", a: "Bring your own hardware. Any limited loaner equipment will be announced closer to the event." },
      ],
    },
  ];

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
        className={`relative w-full max-w-2xl rounded-3xl shadow-lg p-8 mb-8 text-center border-4 ${pick(
          "bg-black border-pink-400",
          "bg-[#0f172a]/80 border-[#43cea2]",
          "bg-[#140022]/80 border-[#8b5cf6]"
        )}`}
      >
        {/* GitHub corner badge */}
        <div className="absolute top-3 right-3">
          {ghBadgeOk ? (
            <Image
              src="/github-mark.png"
              alt="GitHub"
              width={36}
              height={36}
              className={"rounded-full shadow-md border " + pick("border-pink-400/40", "border-[#43cea2]/40", "border-[#8b5cf6]/40")}
              onError={() => setGhBadgeOk(false)}
            />
          ) : (
            <div className={
              "w-9 h-9 rounded-full grid place-items-center text-xs font-bold " +
              pick("bg-white text-black border border-pink-400/40", "bg-[#0b1624] text-teal-100 border border-[#43cea2]/40", "bg-[#1a0f33] text-purple-100 border border-[#8b5cf6]/40")
            }>
              GH
            </div>
          )}
        </div>
        <div className="mx-auto mb-6 flex justify-center">
          <Image
            src={heroSrc}
            alt="Ossome Hacks 3.0 poster"
            width={256}
            height={256}
            className={"rounded-2xl shadow-xl border " + pick("border-pink-400/40", "border-[#43cea2]/40", "border-[#8b5cf6]/40")}
            onError={() => setHeroSrc("/globe.svg")}
            priority
          />
        </div>
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
            name="github"
            placeholder="GitHub URL (e.g. https://github.com/username)"
            className={pick(
              "w-full px-4 py-2 rounded-lg border-2 border-yellow-300 focus:border-pink-400 focus:outline-none",
              "w-full px-4 py-2 rounded-lg border-2 bg-[#0f172a] text-white border-[#f9d423] focus:border-[#ff6e7f] focus:outline-none",
              "w-full px-4 py-2 rounded-lg border-2 bg-[#140022] text-white border-[#c084fc] focus:border-[#d946ef] focus:outline-none"
            )}
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL (e.g. https://www.linkedin.com/in/username)"
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
          "bg-[#0b172a]/80 border-[#f9d423]",
          "bg-[#140022]/80 border-[#d946ef]"
        )}`}
      >
        <h2 className={pick("text-2xl font-bold text-yellow-300 mb-2", "text-2xl font-bold text-[#f9d423] mb-2", "text-2xl font-bold text-[#e9d5ff] mb-2")}>
          Contact Us
        </h2>
        <p className="text-white">
          Email: {" "}
          <a
            href="mailto:community@githubsrmist.edu.tech"
            className={pick("text-blue-400 underline", "text-[#7bffb7] underline", "text-[#c084fc] underline")}
          >
            community@githubsrmist.edu.tech
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
          <a href="https://www.instagram.com/githubsrm/?hl=en" className={pick(
            "px-4 py-2 rounded-lg bg-pink-400 text-white font-semibold hover:bg-yellow-300 transition-colors",
            "px-4 py-2 rounded-lg bg-[#ff6e7f] text-black font-semibold hover:bg-[#f9d423] transition-colors",
            "px-4 py-2 rounded-lg bg-[#d946ef] text-white font-semibold hover:bg-[#8b5cf6] transition-colors"
          )}>Instagram</a>
          <a href="https://github.com/srm-ist-ktr" className={pick(
             "bg-black text-white hover:bg-gray-800",
             "bg-[#0b1624] text-teal-100 hover:bg-[#0e1b2a]",
             "bg-[#1a0f33] text-purple-100 hover:bg-[#201244]"
           ) + " px-4 py-2 rounded-lg border " + pick("border-black/20", "border-teal-700/50", "border-purple-700/50")} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/company/githubsrm/" className={pick(
            "px-4 py-2 rounded-lg bg-yellow-300 text-black font-semibold hover:bg-pink-400 transition-colors",
            "px-4 py-2 rounded-lg bg-[#f9d423] text-black font-semibold hover:bg-[#ff6e7f] transition-colors",
            "px-4 py-2 rounded-lg bg-[#c084fc] text-black font-semibold hover:bg-[#8b5cf6] transition-colors"
          )}>LinkedIn</a>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.githubsrmist.in/"
            className={pick(
              "mt-6 px-6 py-3 rounded-full font-semibold shadow-md bg-pink-400 text-white hover:bg-yellow-300 transition-colors",
              "mt-6 px-6 py-3 rounded-full font-semibold shadow-md bg-[#43cea2] text-black hover:bg-[#f9d423] transition-colors",
              "mt-6 px-6 py-3 rounded-full font-semibold shadow-md bg-[#8b5cf6] text-white hover:bg-[#d946ef] transition-colors"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
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
        <div className="space-y-6">
          {faqs.map((section) => (
            <div key={section.category}>
              <h3 className={pick("text-black/80", "text-teal-200/90", "text-purple-200/90") + " text-xl font-semibold mb-2"}>{section.category}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const isOpen = openFaq === item.key;
                  return (
                    <li key={item.key} className={pick("bg-white/70", "bg-[#0b1624]/70", "bg-[#1a0f33]/60") + " rounded-xl border " + pick("border-pink-100", "border-teal-800/50", "border-purple-800/50")}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(item.key)}
                        className={"w-full text-left px-4 py-3 flex items-center justify-between gap-4 " + pick("text-black", "text-teal-100", "text-purple-100")}
                      >
                        <span className="font-medium">{item.q}</span>
                        <span className={"shrink-0 transition-transform " + (isOpen ? "rotate-180" : "")}>⌄</span>
                      </button>
                      <div
                        className={"px-4 pb-4 text-sm " + (isOpen ? "block" : "hidden") + " " + pick("text-gray-700", "text-teal-100/90", "text-purple-100/90")}
                      >
                        {item.a}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
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
        {/* Sponsors grid */}
        <div className="mt-3 grid grid-cols-2 gap-4">
          {/* MLH */}
          <a
            href="https://mlh.io"
            target="_blank"
            rel="noopener noreferrer"
            className={
              "flex items-center justify-center h-24 rounded-xl overflow-hidden p-2 " +
              pick("bg-white border border-blue-400", "bg-[#0b132b] border border-[#7bffb7]/50", "bg-[#1a0933] border border-[#8b5cf6]/50")
            }
          >
            <div className="relative w-40 h-12 sm:w-48 sm:h-14">
              <Image src="/mlh-logo.png" alt="MLH" fill className="object-contain" />
            </div>
          </a>
          {/* SRM */}
          <a
            href="https://www.srmist.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              "flex items-center justify-center h-24 rounded-xl overflow-hidden p-2 " +
              pick("bg-white border border-blue-400", "bg-[#0b132b] border border-[#7bffb7]/50", "bg-[#1a0933] border border-[#8b5cf6]/50")
            }
          >
            <div className="relative w-40 h-12 sm:w-48 sm:h-14">
              <Image src="/srm-logo.png" alt="SRM" fill className="object-contain" />
            </div>
          </a>
        </div>
        <p className="text-white mb-2">
          Interested in sponsoring? Email us at {" "}
          <a href="mailto:community@githubsrmist.edu.tech" className={pick("text-pink-400 underline", "text-[#ff6e7f] underline", "text-[#d946ef] underline")}>
            community@githubsrmist.edu.tech
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
