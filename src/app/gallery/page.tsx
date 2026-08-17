import type { Metadata } from "next";

import { Band, Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { gallery } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of the forecourt, fuel islands, CNG bay, EV charging points and Tea Junction counter at Ma Manasa Auto Fuel Service, NH-12 Muragachha.",
};

/** Column and height rules per tile shape, tuned for a 6-column grid. */
const spanClass: Record<string, string> = {
  wide: "col-span-2 h-52 sm:col-span-4 sm:h-72 lg:h-[22rem]",
  tall: "col-span-2 h-52 sm:col-span-2 sm:h-72 lg:h-[22rem]",
  normal: "col-span-1 h-36 sm:col-span-2 sm:h-52 lg:h-56",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        plate="Around the pump"
        title={
          <>
            Have a look
            <br />
            before you pull in.
          </>
        }
        lede="Every bay, counter and service, photographed as it actually is. These are stand-in photographs for now — the pump's own pictures go here."
        image="/images/highway-sign.jpg"
        imageAlt=""
      />

      <Band className="bg-concrete">
        <Container>
          <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-6">
            {gallery.map((tile, i) => (
              <Photo
                key={tile.src}
                src={tile.src}
                alt={tile.alt}
                caption={tile.caption}
                priority={i < 2}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className={cn(spanClass[tile.span] ?? spanClass.normal)}
              />
            ))}
          </Reveal>

          <p className="mt-8 text-center text-[0.85rem] text-ink-mute">
            Placeholder photography. Drop the pump&rsquo;s own photos into{" "}
            <code className="rounded bg-concrete-2 px-1.5 py-0.5 font-mono text-[0.78rem]">
              public/images/
            </code>{" "}
            under the same filenames to swap them in.
          </p>
        </Container>
      </Band>

      <CtaBand
        title="The real thing is better."
        body="Pull in off NH-12 at Muragachha and see the forecourt for yourself — any hour, any day."
      />
    </>
  );
}
