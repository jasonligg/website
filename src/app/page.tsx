import Image from "next/image";
import Link from "next/link";
import HomepageHeroText from "@/app/HomepageHeroText";
import avatar from "../../public/avatar.jpg";
import cat from "../../public/cat.jpg";

export default function App() {
  return (
    <main className="md:px-18 px-4 sm:px-6 lg:px-44 xl:px-96">
      <section className="relative flex min-w-fit flex-col items-center justify-around lg:max-h-[768px] lg:flex-row">
        <hgroup>
          <Image
            src={avatar}
            alt="Picture of Jason Liggayu."
            width={100}
            className="my-6 rounded-full"
          />
          <h1 className="whitespace-nowrap text-4xl font-bold tracking-tight lg:text-5xl 2xl:text-6xl">
            software engineer
            <br />
            coding educator
            <br />
            <HomepageHeroText />
          </h1>
          <p className="max-w-prose py-4 tracking-wide lg:text-lg">
            <strong>Hey!</strong> I&apos;m Jason, a software engineer based in
            New York City. I love building cool stuff with code and helping
            others along with their own coding journeys.
          </p>
          <p className="max-w-prose pt-4 tracking-wide lg:text-lg">
            <strong>Currently,</strong> <br />
            I&apos;m helping build the 100% renewable future and fighting the
            climate crisis at{" "}
            <a href="https://www.arcadia.com/" className="text-[#0EFF85]">
              Arcadia
            </a>{" "}
            as a full-stack engineer on the Growth squad.
            <p className="max-w-prose pt-4 tracking-wide lg:text-lg">
              I&apos;m also working at{" "}
              <a href="https://www.structy.net/" className="text-[#00C49A]">
                Structy
              </a>{" "}
              as an engineer, helping to scale the product to support 15k+
              software engineers building their own durable and robust knowledge
              of data structures and algorithms.
            </p>
          </p>
          <p className="max-w-prose py-4 tracking-wide lg:text-lg">
            <strong>Previously,</strong> <br />I created and taught a four-week
            online course on data structures and algorithms at{" "}
            <a href="https://www.codesmith.io/" className="text-[#2596BE]">
              Codesmith
            </a>{" "}
            as a curriculum developer and instructor. I also supported their
            JavaScript learning platform as an engineer and mentor.
          </p>
          <Link href="/about" className="text-stone-500">
            Read more about me.
          </Link>
        </hgroup>
        {/* <Image
          src={cat}
          alt="Picture of a grey cat wearing sunglasses."
          className="md:pl-16 min-w-fit object-contain"
        /> */}
      </section>
    </main>
  );
}
