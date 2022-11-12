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
        <p className="max-w-prose py-4 tracking-wide text-stone-300 lg:text-lg">
          <strong>Hey!</strong> I&apos;m Jason, a software engineer based in New
          York City. I love building cool stuff with code and helping others
          along with their own coding journeys.
        </p>
        <Link
          href="/about"
          className="text-sm text-stone-600 hover:text-stone-500 lg:text-base"
        >
          Read more about me.
        </Link>
      </hgroup>
      {/* <Image
          src={cat}
          alt="Picture of a grey cat wearing sunglasses."
          className="md:pl-16 min-w-fit object-contain"
        /> */}
    </section>
  );
}
