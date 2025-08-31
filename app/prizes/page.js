export default function Prizes() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">🏆 Prizes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="px-6 py-36 rounded-2xl shadow-md border bg-white hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">🥇 1st Place</h2>
          <p className="mt-3 text-gray-700">$1000 Cash Prize</p>
        </div>

        <div className="px-6 py-36 rounded-2xl shadow-md border bg-white hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">🥈 2nd Place</h2>
          <p className="mt-3 text-gray-700">$500 Cash Prize</p>
        </div>

        <div className="px-6 py-36 rounded-2xl shadow-md border bg-white hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">🥉 3rd Place</h2>
          <p className="mt-3 text-gray-700">$250 Cash Prize</p>
        </div>
      </div>
    </main>
  );
}
