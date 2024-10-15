"use client";

import { FaCheck } from "react-icons/fa"; // Importing checkmark icon
import { Card } from "@nextui-org/react"; // Using NextUI Card for a clean look
import { Image } from "@nextui-org/react"; // Importing NextUI Image component
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa"; // Importing respective social media icons

export default function MagicEditSection() {
  return (
    <section className="flex flex-col md:flex-row gap-8 p-8 mt-10">
      {/* Left Side Floating Elements */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8">
        <Image
          src="image2.png" // Uploaded image file
          alt="MagicEdit"
          className="rounded-lg shadow-lg"
          objectFit="cover"
        />
      </div>

      {/* Right Side Text Box */}
      <Card className="w-full md:w-1/2 bg-gray-900 border border-purple-500 p-8 rounded-lg shadow-lg  mt-12 p-24 h-380">
        <h2 className="text-4xl font-bold mb-3">Pro-edited moments</h2>
        <p className="text-lg mb-6">in just 3 clicks, Create content for</p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center">
            <FaYoutube className="text-red-500 mr-3" /> YouTube
          </li>
          <li className="flex items-center">
            <FaInstagram className="text-pink-500 mr-3" /> Instagram
          </li>
          <li className="flex items-center">
            <FaTiktok className="text-black mr-3" /> TikTok and more
          </li>
        </ul>
      </Card>
    </section>
  );
}
