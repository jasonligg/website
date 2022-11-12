import Image from "next/image";
import ArcadiaAvatar from "../../../public/arcadia-logo.png";
import StructyLogo from "../../../public/structy-logo.png";
import CodesmithLogo from "../../../public/codesmith-logo.png";

export default function Work() {
  return (
    <section>
      <h1 className="whitespace-nowrap pb-4 text-4xl font-bold tracking-tight lg:text-5xl 2xl:text-6xl">
        work
      </h1>
      <div className="space-y-4">
        <article>
          <h2 className="max-w-prose pt-4 tracking-wide lg:text-lg">
            <strong>Currently,</strong>
          </h2>
          <p className="max-w-prose tracking-wide text-stone-300 lg:text-lg">
            I&apos;m helping build the 100% renewable future and fighting the
            climate crisis at{" "}
            <a href="https://www.arcadia.com/" className="text-[#0EFF85]">
              Arcadia
            </a>{" "}
            as a software engineer on the Growth squad.
          </p>
          <p className="max-w-prose pt-4 tracking-wide text-stone-300 lg:text-lg">
            I&apos;m also working at{" "}
            <a href="https://www.structy.net/" className="text-[#00C49A]">
              Structy
            </a>{" "}
            as an engineer helping to scale the product to support 15k+ software
            engineers building their own durable and robust knowledge of data
            structures and algorithms.
          </p>
          <h2 className="max-w-prose pt-4 tracking-wide lg:text-lg">
            <strong>Previously,</strong>
          </h2>
          <p className="max-w-prose pb-4 tracking-wide text-stone-300 lg:text-lg">
            I created and taught a four-week live online course on data
            structures and algorithms at{" "}
            <a href="https://www.codesmith.io/" className="text-[#2596BE]">
              Codesmith
            </a>{" "}
            as a curriculum developer and instructor. I also supported their
            JavaScript learning platform as an engineer and mentor.
          </p>
        </article>
        <article className="rounded-3xl border border-solid border-stone-700 p-6">
          <ol className="space-y-6">
            <li className="flex w-max gap-4">
              <Image
                src={ArcadiaAvatar}
                alt="The logo of the company Arcadia."
                width={48}
                height={48}
                className="self-start object-contain"
              />
              <dl>
                <dt className="sr-only">Company</dt>
                <dd className="text-xl font-medium text-stone-300">Arcadia</dd>
                <dt className="sr-only">Title</dt>
                <dd>Software Engineer, Growth</dd>
                <dt className="sr-only">Date</dt>
                <dd aria-label="2021 until Present" className="text-stone-600">
                  <time>2021</time>
                  <span aria-disabled={true}> - </span>
                  <time>Present</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <Image
                src={StructyLogo}
                alt="The logo of the company Structy."
                width={48}
                height={48}
                className="self-start object-contain"
              />
              <dl>
                <dt className="sr-only">Company</dt>
                <dd className="text-xl font-medium text-stone-300">Structy</dd>
                <div>
                  <dt className="sr-only">Title</dt>
                  <dd>Software Engineer, Product</dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    aria-label="2022 until Present"
                    className="text-stone-600"
                  >
                    <time>2022</time>
                    <span aria-disabled={true}> - </span>
                    <time>Present</time>
                  </dd>
                </div>
              </dl>
            </li>
            <li className="flex gap-4">
              <Image
                src={CodesmithLogo}
                alt="The logo of the company Codesmith."
                width={48}
                height={64}
                className="self-start object-contain"
              />
              <dl className="space-y-2">
                <dt className="sr-only">Company</dt>
                <div>
                  <dd className="text-xl font-medium text-stone-300">
                    Codesmith
                  </dd>
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd>Curriculum Developer and Instructor</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="text-stone-600">
                      <time>2021</time>
                    </dd>
                  </div>
                </div>
                <div>
                  <dt className="sr-only">Title</dt>
                  <dd>Engineering Fellow and Software Engineer</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="text-stone-600">
                    <time>2020</time>
                  </dd>
                </div>
              </dl>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}
