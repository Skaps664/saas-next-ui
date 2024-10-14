"use client";

import { FaCheck } from "react-icons/fa"; // Importing checkmark icon
import { Card } from "@nextui-org/react"; // Using NextUI Card for a clean look
import { Image } from "@nextui-org/react"; // Importing NextUI Image component

export default function MagicEditSection() {
  return (
    <section className="flex flex-col md:flex-row gap-8 p-8 mt-12 ">
      {/* Left Side Text Box */}
      <Card className="w-full md:w-1/2 bg-purple-900 p-8 rounded-lg shadow-lg  mt-12 p-24 h-380">
        <h2 className="text-4xl font-bold mb-6">MagicEdit powered by GPT-4o</h2>
        <p className="text-lg mb-6">
          Create content for all platforms in one place
        </p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-3" /> Auto-cut um’s and ah’s
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-3" /> AI-insert Emojis
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-3" /> AI-insert B-roll
          </li>
        </ul>
      </Card>

      {/* Right Side Floating Elements */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Image
          src="https://nextui.org/images/hero-card-complete.jpeg" // Example NextUI image
          alt="MagicEdit"
          height={420} // Matching the height with the left text box for uniformity
          className="rounded-lg shadow-lg"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
