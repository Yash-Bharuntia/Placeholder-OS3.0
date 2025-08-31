import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Ossome Hacks 3.0</h1>
        <p className="text-lg">We are glad to have you here. Explore our content and enjoy your stay!</p>
      </div>
    </div>
  );
}
