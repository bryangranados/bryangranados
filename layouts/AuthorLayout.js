import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
          </div>
          {/* <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div> */}
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>{text1}</p>
            <span>See what I'm doing right </span>
            <Link
              href={'/now'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              now.{' '}
            </Link>
            <br />
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
              >
                {text2}
              </RoughNotation>
            </p>
            <br />
            <p>
              {text3} <br />
              <br></br>
              <span>Check out my </span>
              <Link
                href={
                  'https://docs.google.com/document/d/1WBX5wBYUy0g74HIeNN9IZ9-nuYXrURyT/edit?usp=sharing&ouid=100244887075527874549&rtpof=true&sd=true'
                }
                className="special-underline no-underline hover:dark:text-gray-800 dark:text-gray-100"
              >
                resume{' '}
              </Link>
              <span>and </span>
              <Link
                href={'https://www.behance.net/gallery/145445631/Project-Portfolio-2021-2022'}
                className="special-underline no-underline hover:dark:text-gray-800 dark:text-gray-100"
              >
                portfolio.{' '}
              </Link>
              <br />
              <br></br>
              <span>I stream software development on </span>
              <Link
                href={'https://www.twitch.tv/diathekez'}
                className="special-underline no-underline hover:dark:text-gray-800 dark:text-gray-100"
              >
                Twitch.{' '}
              </Link>
            </p>
            <br />
            <p>
              Feel free to holla at me by sending an email to{' '}
              <RoughNotation type="highlight" show={true} color="#FBCFE8" animationDelay={1200}>
                <span className="dark:text-gray-700">bryan@granados.cc </span>
              </RoughNotation>
              <span>or by scheduling a chat with me on </span>
              <Link
                href={'https://calendly.com/bryangranados/chat'}
                className="special-underline no-underline hover:dark:text-gray-800 dark:text-gray-100"
              >
                Calendly.{' '}
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="pt-8 pb-8 max-w-none xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
