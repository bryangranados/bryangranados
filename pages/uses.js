import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { USES } from '../data/usesData'
import UsesTech from '@/components/Uses'

export default function Uses() {
  return (
    <>
      <PageSEO
        title={`Uses - ${siteMetadata.author}`}
        description={`Uses - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/uses`}
      />
      <div className="mb-4">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          What I use
        </h1>
        <div className="text-gray-500 dark:text-gray-400 mt-5">
          You can see what I use while programming, both software and hardware, below.
          <br />
          If you're interested in something I use and want more info, please reach out and I'll be
          happy to answer any questions.
        </div>
        <div className="text-gray-500 dark:text-gray-400 mt-5 mb-3 text-xs">
          Full disclosure: This page contains affiliate links. If you click through and purchase, I
          may receive compensation for that purchase.
        </div>
        <span className="text-lg font-semibold mt-3">Software&nbsp;&&nbsp;Hardware</span>
        <div className="mt-3">
          {USES.map((d) => (
            <UsesTech key={d.name} name={d.name} description={d.description} link={d.link} />
          ))}
        </div>
        <div className="mt-3">
          <span className="text-sm">These stats began to be collected on October 2022.</span>
          <figure>
            <embed
              className="w-3/5 h-3/5"
              src="https://wakatime.com/share/@39c2f321-bc3f-4a52-b82e-a338d765cd90/3e9f9519-d182-41cb-9d44-91db3c68e884.svg"
            ></embed>
          </figure>
          <div className="pt-10">
            <span className="text-sm">
              This site started out as a template, so maybe bookmark it to see what else I can do
              with it in the future.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
