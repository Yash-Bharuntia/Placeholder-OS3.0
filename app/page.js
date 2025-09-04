import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans min-h-screen bg-gradient-to-br from-pink-400 via-yellow-300 to-blue-400 flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Hero Section */}
      <section className="w-full max-w-2xl bg-black rounded-3xl shadow-lg p-8 mb-8 text-center border-4 border-pink-400">
        <h1 className="text-5xl font-extrabold text-pink-400 mb-4">
          Ossome Hacks 3.0
        </h1>
        <p className="text-lg text-yellow-300">
          Event Date:{" "}
          <span className="font-bold text-blue-400">November 2025</span>
        </p>
        <p className="text-white mt-2">
          Check back on{" "}
          <span className="text-yellow-300 font-semibold">October 1st</span> for
          more info!
        </p>
      </section>

      {/* Pre-Registration Form */}
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 mb-8 border-2 border-blue-400">
        <h2 className="text-2xl font-bold text-pink-400 mb-4">
          Pre-Registration
        </h2>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 rounded-lg border-2 border-pink-400 focus:border-yellow-300 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-lg border-2 border-blue-400 focus:border-yellow-300 focus:outline-none"
          />
          <input
            type="text"
            name="social"
            placeholder="Social Link"
            className="w-full px-4 py-2 rounded-lg border-2 border-yellow-300 focus:border-pink-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-pink-400 text-white font-bold hover:bg-yellow-300 hover:text-black transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-xl bg-black rounded-2xl shadow-md p-6 mb-8 border-2 border-yellow-300">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2">Contact Us</h2>
        <p className="text-white">
          Email:{" "}
          <a
            href="mailto:hackathon@yourdomain.com"
            className="text-blue-400 underline"
          >
            hackathon@yourdomain.com
          </a>
        </p>
      </section>

      {/* Social Media Section */}
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 mb-8 border-2 border-pink-400">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Follow Us</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://facebook.com/yourpage"
            className="px-4 py-2 rounded-lg bg-blue-400 text-white font-semibold hover:bg-pink-400 transition"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/yourpage"
            className="px-4 py-2 rounded-lg bg-pink-400 text-white font-semibold hover:bg-yellow-300 transition"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@yourpage"
            className="px-4 py-2 rounded-lg bg-black text-white font-semibold hover:bg-blue-400 transition"
          >
            TikTok
          </a>
          <a
            href="https://linkedin.com/company/yourpage"
            className="px-4 py-2 rounded-lg bg-yellow-300 text-black font-semibold hover:bg-pink-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 mb-8 border-2 border-yellow-300">
        <h2 className="text-2xl font-bold text-pink-400 mb-4">FAQ</h2>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>
            What is a hackathon?{" "}
            <span className="text-blue-400">
              A hackathon is an event where people collaborate to build tech
              projects in a short time.
            </span>
          </li>
          <li>
            Who can participate?{" "}
            <span className="text-yellow-300">
              Anyone interested in technology, coding, or design!
            </span>
          </li>
          <li>
            Do I need experience?{" "}
            <span className="text-pink-400">No prior experience required.</span>
          </li>
          {/* Add more questions as needed */}
        </ul>
      </section>

      {/* Sponsors Section */}
      <section className="w-full max-w-xl bg-black rounded-2xl shadow-md p-6 mb-8 border-2 border-blue-400">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2">Sponsors</h2>
        <p className="text-white mb-2">
          Interested in sponsoring? Email us at{" "}
          <a
            href="mailto:sponsor@yourdomain.com"
            className="text-pink-400 underline"
          >
            sponsor@yourdomain.com
          </a>
        </p>
        <p className="text-white">
          Learn more on our{" "}
          <a
            href="/sponsors"
            className="text-blue-400 underline"
          >
            Sponsor Page
          </a>
          .
        </p>
      </section>
    </main>
  );
}
