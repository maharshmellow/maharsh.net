import Head from "next/head";
import NavBar from "../components/navbar"

export const siteTitle = "Maharsh Patel - Software Engineer"

export default function Layout({ children, home }) {
  return (
    <div className="base-container">
      <Head>
      <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="TODO: Add a description here"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  )
}