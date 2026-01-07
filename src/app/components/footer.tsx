"use client";

import { Container } from "./Container";
import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <Container>
        <div className="bg-neutral-50 dark:bg-neutral-950/60 backdrop-blur-2xl text-neutral-600 dark:text-white absolute max-w-4xl bottom-0 p-4  w-full rounded-tr-xl rounded-tl-xl transition ease-in-out duration-300">
          <div className="flex justify-between gap-4 items-start">
            <p className="text-xs">
              <Link href="https://github.com/eatulrajput/github-page-tracker">
                {" "}
                GitHub Pages Tracker
              </Link>
            </p>
            <p className="text-xs">
              <Link href="https://github.com/eatulrajput">created by @eatulrajput</Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
