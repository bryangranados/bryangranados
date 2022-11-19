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
          <div className="mt-3 mb-4 text-sm">Last updated: November 11, 2022</div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Location:</span> <span>La Molina,</span> <br />
            <span>Lima</span>
            <br />
            <span className="font-semibold">Weather:</span> <span>70°F, cloudy</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-2/5">
            <span className="font-semibold">Reading:</span>{' '}
            <span>The Best American Short Stories 2020 - Ed. Curtis Sittenfeld</span>
            <br />
            <span className="font-semibold">Playing:</span> <span>Modern Warfare II</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Eating:</span> <span>Caldo de gallina</span>
            <br />
            <span className="font-semibold">Drinking:</span> <span>Coffee (always)</span>
          </div>
        </div>
        {/* Work */}
        <div className="pb-4">
          <span>
            I work as a web developer at{' '}
            <Link
              href={'https://www.minings.pe/'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Mining Service Ingenieros{' '}
            </Link>
            <br />
          </span>
          <p>
            We provide mining consultancy services to companies all over the world. This includes
            web development for other companies (which is where I come in).
          </p>
          <br />
          <p>
            The company specializes in setting up shafts and infrastructure for clients while
            providing advice on the best mining practices. We also do turnkey contracts and have
            worked in North America, South America, and Africa.
          </p>
          <br />
          <p>
            I mostly use React, MongoDB, Tailwind, and Node, though I'm starting to get a concrete
            understanding of TypeScript for implementation on future projects.
          </p>
          <br />
          <p>
            I'm currently working on revamping my company's website from scratch. It's been a
            somewhat tedious experience because I have to go back and forth with the general
            manager, but it feels great to be 100% in charge of the project.
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
            I'm living in Lima right now and I discovered there's no professor review site for Peru,
            so I decided to work on one.
          </p>
          <br />
          {''}
          <p>
            You can see the live page{' '}
            <Link
              href={'https://calificatuprofe.herokuapp.com/'}
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
