import { cn } from "@/lib/utils";
import { ACHIEVEMENTS } from "@/constants";
import { Marquee } from "./ui/marquee";

// Split achievements into two scrolling rows
const firstRow = ACHIEVEMENTS.slice(0, Math.ceil(ACHIEVEMENTS.length / 2));
const secondRow = ACHIEVEMENTS.slice(Math.ceil(ACHIEVEMENTS.length / 2));

// Card Component
const AchievementCard = ({
  image,
  title,
  date,
}: {
  image: string;
  title: string;
  date: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-2xl border p-5",
        "border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 backdrop-blur-xl",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transition-all shadow-lg"
      )}
    >
      {/* Centered Large Image */}
      <div className="w-full flex justify-center">
        <img
          className="rounded-xl object-cover shadow-md"
          width="180"
          height="180"
          alt={title}
          src={image}
        />
      </div>

      {/* Title Below Image */}
      <figcaption className="mt-4 text-center text-base font-semibold dark:text-white text-neutral-200">
        {title}
      </figcaption>

      {/* Small Date */}
      <p className="text-center text-xs text-neutral-400 mt-1">{date}</p>
    </figure>
  );
};

// Main Component
export function Achievements() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <h2 className="my-20 text-center text-4xl font-extrabold">
        Achievements
      </h2>

      {/* First Row */}
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </Marquee>

      {/* Second Row */}
      <Marquee reverse pauseOnHover className="[--duration:6s]">
        {secondRow.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </Marquee>

      {/* Gradient Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-900"></div>
    </section>
  );
}

export default Achievements;
