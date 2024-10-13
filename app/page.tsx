import { NextUIProvider } from "@nextui-org/react";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-start gap-4 py-8 px-10 md:py-10 mt-16">
      {" "}
      {/* Added margin-top (mt-16) to move the section down */}
      {/* Main Title Section */}
      <div className="flex flex-row items-start justify-between w-full">
        <div className="inline-block max-w-xl">
          <h1 className={`${title()} text-5xl font-bold ext-left`}>
            Convert&nbsp;
            <br />
            <span className="text-violet-500">Long Videos&nbsp;</span>
            into Engaging <span className="text-violet-500">Shorts&nbsp;</span>
          </h1>
          <p className={`${subtitle()} text-lg text-gray-600 mt-6 text-left`}>
            within just a few clicks.
          </p>
          {/* Buttons Section directly below the text */}
          <div className="flex gap-4 mt-6">
            {" "}
            {/* Adjusted margin-top to 6 */}
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                class:
                  "bg-violet-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-violet-600",
              })}
              href={siteConfig.links.docs}
            >
              Documentation
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                class:
                  "border-2 border-gray-400 text-gray-400 px-6 py-2 rounded-full hover:text-black hover:border-black",
              })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
        </div>

        {/* Image aligned to the right */}
        <div className="flex justify-end w-full">
          <Image
            width={600} // Doubled the width to make the image 2x bigger
            alt="NextUI hero Image"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            className="object-contain"
          />
        </div>
      </div>
      {/* Code Snippet Section */}
      <div className="mt-12">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span className="text-gray-600">
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
