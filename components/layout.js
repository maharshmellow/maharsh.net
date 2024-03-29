import Head from "next/head";
import NavBar from "../components/navbar";
import Container from "react-bootstrap/Container";

export const siteTitle = "Maharsh Patel - Software Engineer";
export const siteDescription = "Software Engineer";

export default function Layout({ children, home, title, description, date }) {
  return (
    <div className="base-container">
      <Container fluid={true}>
        <Head>
          <title>{title || siteTitle}</title>
          <meta name="og:title" content={title || siteTitle} />
          <meta name="twitter:title" content={title || siteTitle} />
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content={description || siteDescription} />
          <meta
            name="og:description"
            content={description || siteDescription}
          />
          <meta
            name="twitter:description"
            content={description || siteDescription}
          />
          <meta name="og:type" content="website" />
          <meta property="og:image" content="/images/banner.png" />
          <meta property="twitter:image" content="/images/banner.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Maharsh Patel" />
          {date && <meta property="article:published_time" content={date} />}
        </Head>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </Container>
    </div>
  );
}
