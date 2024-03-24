import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-8 bg-[#090E34] text-white relative">
      <div className="border border-white/50 rounded-full h-[250px] md:h-[300px] w-[250px] md:w-[300px] absolute animate-pulse" />
      <div className="rounded-full border border-white h-[250px] md:h-[300px] w-[250px] md:w-[300px] absolute animate-ping" />
      <h1 className="text-7xl font-bold">EliteBluPrint</h1>
      <p className="text-4xl">Your pathway to excellence</p>
      <p className="text-2xl">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
    </main>
  );
}
