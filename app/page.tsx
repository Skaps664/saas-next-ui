"use client";

import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";
import TrustedSection from "@/components/trusted";
import MagicEditSection from "@/components/magicEdi";
import MagicEditSectionLast from "@/components/magicEdit2";
import ProTipsSection from "@/components/lastPart";
import CollageText from "@/components/collageText";
import FeaturesSection from "@/components/tiles";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-start justify-between gap-4 py-8 px-10 md:py-10 mt-13 w-full">
        {/* Main Title Section */}
        <div className="inline-block max-w-xl">
          <h1 className={`${title()} text-4xl font-bold text-left`}>
            Convert&nbsp;
            <br />
            <span className="text-violet-500">Long Videos&nbsp;</span>
            into Engaging <span className="text-violet-500">Shorts&nbsp;</span>
          </h1>
          <p className={`${subtitle()} text-lg text-gray-600 mt-6 text-left`}>
            within just a few clicks.
          </p>
          <div className="text-lg leading-relaxed pt-6">
            <p>
              AI-powered video editing & social media intelligence for
              <span className="underline decoration-blue-500 decoration-4 mx-1">
                podcasts
              </span>
              ,
              <span className="underline decoration-green-500 decoration-4 mx-1">
                live streams
              </span>
              ,
              <span className="underline decoration-red-500 decoration-4 mx-1">
                TV & radio
              </span>
              ,
              <span className="underline decoration-yellow-500 decoration-4 mx-1">
                sermons
              </span>
              ,
              <span className="underline decoration-pink-500 decoration-4 mx-1">
                entrepreneurs
              </span>
              , &
              <span className="underline decoration-orange-500 decoration-4 mx-1">
                agencies
              </span>
              .
            </p>
          </div>
          {/* Try Your First Video Section */}
          <section className="flex flex-col items-start justify-start mt-16">
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
              >
                Create Shorts
              </Button>
            </div>
          </section>
        </div>

        {/* Image aligned to the right */}
        <div className="flex justify-end w-full md:w-1/2">
          <video autoPlay loop muted className="rounded-lg shadow-lg w-600">
            <source src="minvo_hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section>
        <TrustedSection></TrustedSection>
      </section>

      <CollageText></CollageText>
      <FeaturesSection></FeaturesSection>
      <MagicEditSection></MagicEditSection>
      <section className="w-full py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold underline decoration-violet-500 underline-offset-4">
            Powerful <b>AI Magic</b> with
          </h2>
          <h3 className="text-3xl font-bold mt-4 ">
            Precision Transcript & Timeline Editing
          </h3>
        </div>
      </section>
      <CollageText></CollageText>

      <ProTipsSection></ProTipsSection>
    </>
  );
}
