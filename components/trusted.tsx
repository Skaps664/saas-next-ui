"use client";

import { Image } from "@nextui-org/image";

export default function TrustedSection() {
  return (
    <section className="flex flex-col items-center justify-center py-12 ">
      <h2 className="text-3xl font-bold mb-4">
        Trusted by 10,000+ Creators & Businesses
      </h2>

      <div className="flex flex-row items-center gap-16">
        {/* G2 Section */}
        <div className="flex items-center">
          <Image
            src="/path-to-g2-logo.png" // Replace with your G2 logo path
            alt="G2 Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              {/* Star Ratings */}
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-orange-500 text-xl">
                  ★
                </span>
              ))}
              <span className="text-orange-500 text-xl">½</span>
            </div>
            <p className="text-purple-400">125 reviews</p>
          </div>
        </div>

        {/* AppSumo Section */}
        <div className="flex items-center">
          <Image
            src="/path-to-appsumo-logo.png" // Replace with your AppSumo logo path
            alt="AppSumo Logo"
            width={100}
            height={40}
            className="mr-2"
          />
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              {/* Taco Ratings */}
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  🌮
                </span>
              ))}
            </div>
            <p className="text-blue-400">270 reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
