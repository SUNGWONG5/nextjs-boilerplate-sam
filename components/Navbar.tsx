import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-left py-10 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-10 h-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold tracking-widest text-[#970862]">PORTFOLIO</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href="#" className="text-black font-medium">
          Home
        </Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
