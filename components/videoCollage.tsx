"use client";

import { Image } from "@nextui-org/image";

const ImageGrid = () => {
  return (
    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
      {/* Replace with example images */}
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
      <Image
        src="https://nextui.org/images/hero-card-complete.jpeg"
        alt="Example 3"
        width={300}
        height={200}
        className="object-cover rounded-md"
      />
      <Image
        src="https://nextui.org/images/hero-card-complete.jpeg"
        alt="Example 4"
        width={300}
        height={200}
        className="object-cover rounded-md"
      />
    </div>
  );
};

export default ImageGrid;
