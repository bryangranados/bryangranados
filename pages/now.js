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
          <div className="mt-3 mb-4 text-sm">Last updated: January 25, 2023</div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Location:</span> <span>La Molina,</span> <br />
            <span>Lima</span>
            <br />
            <span className="font-semibold">Weather:</span> <span>76°F, cloudy</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-2/5">
            <span className="font-semibold">Reading:</span>{' '}
            <span>The Best American Short Stories &#8212; Ed. by Curtis Sittenfeld</span>
            <br />
            <span className="font-semibold">Playing:</span> <span>The Evil Within 2</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Eating:</span> <span>Lasagna de ají de gallina</span>
            <br />
            <span className="font-semibold">Drinking:</span> <span>Coffee (always)</span>
          </div>
        </div>
        {/* Work */}
        <div className="pb-4">
          <span>
            I work as a React engineer at{' '}
            <Link
              href={'https://www.valere.io/'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Valere Labs{' '}
            </Link>
            <br />
          </span>
          <p>
            We provide software development services to clients all over the world. Each project
            normally lasts about six months from conception to completion.
          </p>
          <br />
          <p>
            The company is based in the US but has offices in other countries. We have a
            multicultural and international workforce, and it's also pretty laid back. By that I
            mean that no one is micromanaging you.
          </p>
          <br />
          <p>
            I mostly use React, Node, MongoDB, and Postman (to check the endpoints), though I'm
            independently learning TypeScript better and like it a lot.
          </p>
          <br />
          <p>
            My current main duties are exclusively to work on the back-end, integrating third-party
            services to the principal product. It's challenging because I'm used to mostly working
            on the front-end, but I like it because I feel like this experience will make me a much
            more well-rounded developer.
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
            <span>I'm working on a short story collection written in second-person. </span>
            <Link
              href={'/my-books'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              It will be available here.
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
