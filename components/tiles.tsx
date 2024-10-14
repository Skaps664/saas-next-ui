"use client";
import { Card, CardBody } from "@nextui-org/react";
import {
  SparklesIcon,
  UserCircleIcon,
  FilmIcon,
} from "@heroicons/react/24/solid"; // Importing icons from Heroicons

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center  mb-8">
        Everything you need to 10x reach <br />
        with shorts in 1/10th the Time
      </h2>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-9 mt-7">
        {/* First Card */}
        <Card className="w-80 h-40 bg-gray-900 border border-blue-500">
          <CardBody className="flex items-center justify-center text-center text-white">
            <div className="flex flex-col items-center justify-center">
              <SparklesIcon className="w-10 h-10 mb-4" />
              <p className="text-lg">Auto-clip the best moments</p>
            </div>
          </CardBody>
        </Card>

        {/* Second Card */}
        <Card className="w-80 h-40 bg-gray-900 border border-purple-500">
          <CardBody className="flex items-center justify-center text-center ">
            <div className="flex flex-col items-center justify-center">
              <UserCircleIcon className="w-10 h-10 mb-4" />
              <p className="text-lg">Auto-frame speakers</p>
            </div>
          </CardBody>
        </Card>

        {/* Third Card */}
        <Card className="w-80 h-40 bg-gray-900 border border-yellow-500">
          <CardBody className="flex items-center justify-center text-center ">
            <div className="flex flex-col items-center justify-center">
              <FilmIcon className="w-10 h-10 mb-4" />
              <p className="text-lg">Auto-edit engaging elements</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
