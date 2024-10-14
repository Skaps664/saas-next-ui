"use client";

import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";
import TrustedSection from "@/components/trusted";
import MagicEditSection from "@/components/magicEdi";
import ProTipsSection from "@/components/lastPart";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-start justify-between gap-4 py-8 px-10 md:py-10 mt-16 w-full">
        {/* Main Title Section */}
        <div className="inline-block max-w-xl">
          <h1 className={`${title()} text-5xl font-bold text-left`}>
            Convert&nbsp;
            <br />
            <span className="text-violet-500">Long Videos&nbsp;</span>
            into Engaging <span className="text-violet-500">Shorts&nbsp;</span>
          </h1>
          <p className={`${subtitle()} text-lg text-gray-600 mt-6 text-left`}>
            within just a few clicks.
          </p>

          {/* Try Your First Video Section */}
          <section className="flex flex-col items-start justify-start mt-8">
            <h1 className="text-xl md:text-xl mb-4">
              Try Your First Video for Free
            </h1>

            {/* Input and Button Row */}
            <div className="flex items-center w-full max-w-md">
              {/* YouTube Link Input */}
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 mr-4"
              />

              {/* Create Shorts Button */}
              <Button
                color="primary"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md text-lg"
                auto
              >
                Create Shorts
              </Button>
            </div>
          </section>
        </div>

        {/* Image aligned to the right */}
        <div className="flex justify-end w-full md:w-1/2">
          <Image
            width={600}
            alt="NextUI hero Image"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            className="object-cover rounded-md"
          />
        </div>
      </section>

      <section>
        <TrustedSection></TrustedSection>
      </section>

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

      <MagicEditSection></MagicEditSection>
      <section className="w-full py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl underline decoration-violet-500 underline-offset-4">
            Powerful <b>AI Magic</b> with
          </h2>
          <h3 className="text-3xl md:text-4xl mt-4 ">
            Precision Transcript & Timeline Editing
          </h3>
        </div>
      </section>
      <MagicEditSection></MagicEditSection>
      <ProTipsSection></ProTipsSection>
    </>
  );
}
