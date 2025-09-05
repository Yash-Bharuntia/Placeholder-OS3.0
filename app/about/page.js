export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-center mb-6">Ossome Hacks 3.0</h1>

      <p className="text-lg text-gray-700 leading-relaxed text-center mb-10">
        Ossome Hacks 3.0 is our flagship 24-hour hackathon that brings together 
        innovators, coders, and creators to build amazing projects, solve real-world 
        problems, and collaborate with peers.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To inspire creativity and problem-solving through technology while 
            empowering students to learn, collaborate, and innovate.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Why Join?</h2>
          <p className="text-gray-600">
            You&apos;ll get hands-on experience, mentorship, and an opportunity to 
            showcase your skills to industry leaders.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">The Community</h2>
          <p className="text-gray-600">
            Be part of a vibrant community of hackers, designers, and problem-solvers 
            who want to make a difference.
          </p>
        </div>
      </section>
    </main>
  );
}
