import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
        <main>
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
                  <Link href={"/projects/castroom"}>
                    <img className="project-image" src="/images/projects/castroom/main-cover.png"></img>
                  </Link>
                  <h3>Castroom</h3>
                </Col>
              </Row>
              <Row className="project">
                <Col>
                  <Link href={"/projects/inhale"}>
                    <img className="project-image" src="/images/projects/inhale/main-cover2.png"></img>
                  </Link>
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
        </main>
      
    </Layout>
  )
}
