import Head from "next/head";
import NavBar from "../components/navbar"
import Container from "react-bootstrap/Container";

export const siteTitle = "Maharsh Patel - Software Engineer"
export const siteDescription = "Software Engineer, Serial Hobbyist, Minimalist"

export default function Layout({ children, home, title, description }) {
  return (
    <div className="base-container">
      <Container fluid={true}>
        <Head>
          <title>{title || siteTitle}</title>
          <meta name="og:title" content={title || siteTitle} />
          <meta name="twitter:title" content={title || siteTitle} />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content={description || siteDescription} />
          <meta name="og:description" content={description || siteDescription} />
          <meta name="twitter:description" content={description || siteDescription} />
          <meta name="og:type" content="website" />
          <meta property="og:image" content="/images/banner.png" />
          <meta property="twitter:image" content="/images/banner.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </Container>
    </div>
  )
}