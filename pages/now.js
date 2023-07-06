import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm working on now"
        url={siteMetadata.url}
      />
      <div>
        <div className="my-2">
          <h3>Where am I and what am I doing?</h3>
          <div className="mt-3 mb-4 text-sm">Last updated: July 05, 2023</div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Location:</span> <span>Miraflores,</span> <br />
            <span>Lima</span>
            <br />
            <span className="font-semibold">Weather:</span> <span>76°F, scattered clouds</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-2/5">
            <span className="font-semibold">Reading:</span>{' '}
            <span>The Best American Short Stories &#8212; Ed. by Curtis Sittenfeld</span>
            <br />
            <span className="font-semibold">Playing:</span> <span>Fallout 4</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Eating:</span> <span>Sopa criolla</span>
            <br />
            <span className="font-semibold">Drinking:</span> <span>Coffee (always)</span>
          </div>
        </div>
        {/* Work */}
        <div className="pb-4">
          <span>
            I work as a product owner and software architect at{' '}
            <Link
              href={'https://www.valere.io/'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Valere.{' '}
            </Link>
            <br />
          </span>
          <p>
            We provide software development and consultancy services. Each project normally lasts
            about six months from conception to completion.
          </p>
          <br />
          <p>
            The company is based in the US but has offices in other countries. We have a
            multicultural and international workforce, and it's also pretty laid back. I love it
            here.
          </p>
          <br />
          <p>
            I don't code too much as part of this role, but when I do, I mostly work the MERN stack.
          </p>
          <br />
          <p>
            My main duties are designing the web architecture incoming projects will use, directing
            meetings with providers and keeping all the stakeholders informed, and taking ownership
            of projects when clients want to retain me. I also coded the company website myself. I
            used React and Tailwind and, before I handed it over for maintenance to the dev team, I
            was working on using Astro.js for the CMS.
          </p>
          <br />
          <p>
            I started my programming journey back in high school with Java, though I didn't touch
            code again for over a decade. Huge shoutout to{' '}
            <Link
              href={'https://www.youtube.com/c/TraversyMedia'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Brad Traversy.
            </Link>
          </p>
        </div>
        <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            I love to write but have never maintained any sort of blog. I know from experience that
            teaching and explaining helps us learn faster.{' '}
            <Link
              href={'https://www.swyx.io/learn-in-public'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              This
            </Link>{' '}
            article breaks down why blogs are useful for learning.
          </p>
          <br />
          <p>
            <span>
              I'm working on a short story collection written in second-person. I plan on turning it
              into a choose-your-own-adventure web app.{' '}
            </span>
            <Link
              href={'/my-books'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              The book will be available here.
            </Link>
          </p>
          <br />
          <p>
            I'm living in Lima right now and I like to go to Kennedy Park in Miraflores every
            Sunday. There's so many cats everywhere that I got the idea to make a cat tracker web
            app.
          </p>
          <br />
          {''}
          <p>
            It will be available{' '}
            <Link
              href={'#'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              here.
            </Link>{' '}
          </p>
          <p>
            <br></br>
          </p>
        </div>
        <div className="mt-3 text-sm">
          If you'd like to see more people with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
          >
            nownownow.com
          </Link>
        </div>
      </div>
    </>
  )
}
