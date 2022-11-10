import Link from "next/link";
import HomepageHeroText from "@/app/HomepageHeroText";
// import cat from "../../public/cat.jpg";

export default function RootPage() {
  return (
    <section>
      <hgroup>
        <h1 className="whitespace-nowrap text-4xl font-bold tracking-tight lg:text-5xl 2xl:text-6xl">
          software engineer
          <br />
          coding educator
          <br />
          <HomepageHeroText />
        </h1>
        <p className="max-w-prose py-4 tracking-wide lg:text-lg">
          <strong>Hey!</strong> I&apos;m Jason, a software engineer based in New
          York City. I love building cool stuff with code and helping others
          along with their own coding journeys.
        </p>
      </hgroup>
      <article>
        <h2 className="max-w-prose pt-4 tracking-wide lg:text-lg">
          <strong>Currently,</strong>
        </h2>
        <p className="max-w-prose tracking-wide lg:text-lg">
          I&apos;m helping build the 100% renewable future and fighting the
          climate crisis at{" "}
          <a href="https://www.arcadia.com/" className="text-[#0EFF85]">
            Arcadia
          </a>{" "}
          as a full-stack engineer on the Growth squad.
        </p>
        <p className="max-w-prose pt-4 tracking-wide lg:text-lg">
          I&apos;m also working at{" "}
          <a href="https://www.structy.net/" className="text-[#00C49A]">
            Structy
          </a>{" "}
          as an engineer, helping to scale the product to support 15k+ software
          engineers building their own durable and robust knowledge of data
          structures and algorithms.
        </p>
        <h2 className="max-w-prose pt-4 tracking-wide lg:text-lg">
          <strong>Previously,</strong>
        </h2>
        <p className="max-w-prose pb-4 tracking-wide lg:text-lg">
          I created and taught a four-week online course on data structures and
          algorithms at{" "}
          <a href="https://www.codesmith.io/" className="text-[#2596BE]">
            Codesmith
          </a>{" "}
          as a curriculum developer and instructor. I also supported their
          JavaScript learning platform as an engineer and mentor.
        </p>
        <Link href="/about" className="text-sm text-stone-500 lg:text-base">
          Read more about me.
        </Link>
      </article>
      {/* <Image
          src={cat}
          alt="Picture of a grey cat wearing sunglasses."
          className="md:pl-16 min-w-fit object-contain"
        /> */}
    </section>
  );
}
