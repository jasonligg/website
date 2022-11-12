import Link from "next/link";
import Image from "next/image";
import HomepageHeroText from "@/app/HomepageHeroText";
import TwitterIcon from "../../public/twitter.png";
import GithubIcon from "../../public/github.png";
import LinkedInIcon from "../../public/linkedin.png";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline h-5 w-5"
            aria-hidden={true}
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
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
                className="h-auto"
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
    </section>
  );
}
