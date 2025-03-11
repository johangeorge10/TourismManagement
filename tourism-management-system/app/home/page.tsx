"use client"; // Required for state and router in app folder

import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router
import Navbar from "../../components/Navbar";
 // Import Navbar component

export default function HomePage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to Our Website</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We provide top-notch services to help your business grow. Let’s create something amazing together.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
        >
          Get Started
        </button>
      </header>
    </div>
  );
}
