import Head from "next/head"
import NavBar from "../components/navbar"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Maharsh Patel - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      <header>
        <NavBar />
      </header>

      <main>
        <Container className="welcome-message-wrapper" fluid={true}>
          <Row>
            <Col sm={12}>
              <h1>
                Hey there <span role="img" aria-label="wave" id="wave">👋</span>
              </h1> <br/>
              <h1>
                I’m Maharsh. <br/> 
                A Software Engineer based in <br/> 
                Edmonton, Canada <br/>
              </h1>
            </Col>
          </Row>
        </Container>

      </main>
    </div>
  )
}
