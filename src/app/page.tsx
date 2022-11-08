import HomepageHeroText from "@/app/HomepageHeroText";

export default function App() {
  return (
    <main className="md:px-18 px-4 sm:px-6 lg:px-44 xl:px-96">
      {/* <div>hello world.</div> */}
      <hgroup>
        <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
          <HomepageHeroText />
        </h1>
        <p className="max-w-prose pt-4 text-lg tracking-wide">
          <strong>Hey!</strong> I&apos;m Jason, a software engineer based in New
          York City. I love building cool stuff with code and helping others
          along with their own coding journeys.
        </p>
        <p className="max-w-prose pt-4 text-lg tracking-wide">
          <strong>Currently,</strong> I&apos;m helping build the 100% renewable
          future and fighting the climate crisis at{" "}
          <a href="https://www.arcadia.com/">
            Arcadia
          </a>
          . I&apos;m an engineer on the Growth squad.
        </p>
      </hgroup>
    </main>
  );
}
