import Head from "next/head"
import NavBar from "../components/navbar"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div className="base-container" fluid={true}>
      <Head>
        <title>Maharsh - Software Engineer</title>
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
        <Container fluid={true}>
          <Row className="welcome-message-wrapper">
            <Col>
              <h1>
                Hi there <span role="img" aria-label="wave" id="wave">👋</span>
              </h1> <br/>
              <h1>
                I’m Maharsh. <br/> 
                A Software Engineer based in <br/> 
                Edmonton, Canada <br/>
              </h1>
            </Col>
          </Row>

          <Row className="projects-wrapper">
            <Col>
              <h2>Projects</h2>

              <Row className="project">
                <Col>
                  {/* TODO: switch to the next.js Image component */}
                  <img className="project-image" src="/images/projects/castroom/main-cover.png"></img>
                  <h3>Castroom</h3>
                </Col>
              </Row>
              <Row className="project">
                <Col>
                  <img className="project-image" src="/images/projects/inhale/main-cover2.png"></img>
                  <h3>Inhale</h3>
                </Col>
              </Row>
              {/* <Row className="project">
                <Col>
                  <img className="project-image" src="/images/projects/inhale/inhale-cover-3.png"></img>
                  <h3>Federated Learning Research for Mozilla</h3>
                </Col>
              </Row> */}
            </Col>
          </Row>
        </Container>

      </main>
    </div>
  )
}
