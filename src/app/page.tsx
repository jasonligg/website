import Link from "next/link";
import Image from "next/image";
import HomepageHeroText from "@/app/HomepageHeroText";
import TwitterIcon from "../../public/twitter.png";
import GithubIcon from "../../public/github.png";
import LinkedInIcon from "../../public/linkedin.png";
// import cat from "../../public/cat.jpg";

export default function RootPage() {
  return (
    <section className="space-y-6">
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
      <aside className="max-w-prose py-8 tracking-wide">
        <ul className="flex flex-row gap-x-6">
          <li>
            <a href="https://linkedin.com/in/jasonliggayu">
              <Image
                src={LinkedInIcon}
                alt="Link to Jason's LinkedIn profile."
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/jasonligg">
              <Image
                src={GithubIcon}
                alt="Link to Jason's GitHub profile."
                width={32}
                height={32}
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jasonliggayu">
              <Image
                src={TwitterIcon}
                alt="Link to Jason's LinkedIn profile."
                width={32}
                height={32}
              />
            </a>
          </li>
        </ul>
      </aside>
      {/* <Image
          src={cat}
          alt="Picture of a grey cat wearing sunglasses."
          className="md:pl-16 min-w-fit object-contain"
        /> */}
    </section>
  );
}
