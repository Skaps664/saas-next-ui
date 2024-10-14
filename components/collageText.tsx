"use client";

import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";

export default function CollageText() {
  return (
    <div>
      {/* Pro-edited moments Section */}
      <section className="flex flex-col md:flex-row gap-20 p-8 mt-15">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="w-full md:w-1/2 grid grid-rows-2 gap-4">
            {/* Two square images stacked on top of each other */}
            <Image
              src="https://nextui.org/images/hero-card-complete.jpeg"
              alt="Example 1"
              width={300}
              height={200}
              className="object-cover rounded-md"
            />
            <Image
              src="https://nextui.org/images/hero-card-complete.jpeg"
              alt="Example 2"
              width={300}
              height={200}
              className="object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-1/2">
            {/* One taller image next to the square ones */}
            <Image
              src="https://nextui.org/images/hero-card-complete.jpeg"
              alt="Example 4"
              width={300}
              height={420}
              className="object-cover rounded-md h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full flex items-center bg-gray-900 rounded-md p-24 h-420">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Pro-edited moments in just 3 clicks
            </h2>
            <p className="text-gray-400 text-lg">
              Create content for YouTube, Instagram, TikTok, LinkedIn, and more
              - all in one place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
