import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function MyBooks() {
  return (
    <>
      <PageSEO title={`Books - ${siteMetadata.author}`} description="books I've written" />
      <div className="mx-24">
        <h3 className="text-lg font-medium mb-4">Choose Your Own Misadventure</h3>
        <p>I loved CYOA books by R.L Stine when I was a kid.</p>
        <p>
          I've written a collection of short stories and wasn't satisfied with it so I began to
          think of what else to do.
        </p>
        <p>This is currently a work in progress (I'm also making a web app for the book).</p>
        <br />
        <p>
          The stories are written as literary fiction and rather dark in their themes and content.
        </p>
        <Image alt="second brain" src="/static/images/enCover.png" width={500} height={400} />
        <p>This book is available in both English and Spanish. You can get them for free.</p>
        <br />
        <br />
        <p>
          Here you can find the{' '}
          <Link
            href={'https://einargudni.gumroad.com/l/ufidy'}
            className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
          >
            English version,
          </Link>{' '}
          and here is the{' '}
          <Link
            href={'https://einargudni.gumroad.com/l/sfmlw'}
            className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
          >
            Spanish version.{' '}
          </Link>
        </p>
      </div>
    </>
  )
}
