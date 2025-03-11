import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">BrandName</h1>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 pr-4">Landing&nbsp; </Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900 pr-4">Login&nbsp; </Link>
          <Link href="/signup" className="text-gray-600 hover:text-gray-900 pr-4">Signup &nbsp;</Link>
          <Link href="/home" className="text-gray-600 hover:text-gray-900 pr-4">Home &nbsp;</Link>
        </div>
        
      </div>
      
    </nav>
  );
}
