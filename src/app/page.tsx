import Image from "next/image";
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
          <h1 className="whitespace-nowrap text-4xl lg:text-5xl font-bold tracking-tight 2xl:text-6xl">
            software engineer
            <br />
            coding educator
            <br />
            <HomepageHeroText />
          </h1>
          <p className="max-w-prose pt-4 lg:text-lg tracking-wide">
            <strong>Hey!</strong> I&apos;m Jason, a software engineer based in
            New York City. I love building cool stuff with code and helping
            others along with their own coding journeys.
          </p>
          <p className="max-w-prose pt-4 lg:text-lg tracking-wide">
            <strong>Currently,</strong> I&apos;m helping build the 100%
            renewable future and fighting the climate crisis at{" "}
            <a href="https://www.arcadia.com/" className="text-[#0EFF85]">
              Arcadia
            </a>
            . I&apos;m an engineer on the Growth squad.
          </p>
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
