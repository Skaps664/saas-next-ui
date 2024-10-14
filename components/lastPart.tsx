"use client";
import { Link } from "@nextui-org/react";

import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Card, CardBody } from "@nextui-org/card";

export default function ProTipsSection() {
  return (
    <>
      {/* Get Started Section */}
      <section className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-4xl font-bold mb-2 text-center">
          Get Started with Editur
        </h2>
        <p className="text-lg text-center mb-8">Here is what Editur can do</p>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-10">
          <Card className="rounded-lg overflow-hidden">
            <CardBody className="p-0">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </CardBody>
            <div className="p-4">
              <p>How to Upload Video Create Shorts</p>
            </div>
          </Card>

          <Card className="rounded-lg overflow-hidden">
            <CardBody className="p-0">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </CardBody>
            <div className="p-4">
              <p>Enhance Your Video Captions</p>
            </div>
          </Card>

          <Card className="rounded-lg overflow-hidden">
            <CardBody className="p-0">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </CardBody>
            <div className="p-4">
              <p>How to Connect Minvo to TikTok</p>
            </div>
          </Card>
        </div>

        {/* Try Your First Video Free Section */}
        <section className="flex flex-col items-center justify-center mt-16 w-full py-20">
          <h3 className="text-2xl mb-4">Try Out Editur.ai Now</h3>
          {/* Input and Button Row */}
          <div className="flex items-center w-full max-w-md">
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
      </section>
    </>
  );
}
