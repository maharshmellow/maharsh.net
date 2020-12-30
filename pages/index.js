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
                  <h4>Castroom</h4>
                </Col>
              </Row>
              <Row className="project">
                <Col>
                  <Link href={"/projects/inhale"}>
                    <img className="project-image" src="/images/projects/inhale/main-cover.png"></img>
                  </Link>
                  <h4>Inhale</h4>
                </Col>
              </Row>
              {/* <Row className="project">
                <Col>
                  <img className="project-image" src="/images/projects/inhale/inhale-cover-3.png"></img>
                  <h4>Federated Learning Research for Mozilla</h4>
                </Col>
              </Row> */}
            </Col>
          </Row>

          <Row className="work-wrapper">
            <Col>
              <h2>Work</h2>  

              <Link href={"/work/intuit"}>
                <Row className="work-experience">
                  <Col>
                    <h4>Intuit</h4>
                    <span className="job-title">Software Engineer II</span>
                  </Col>
                </Row>
              </Link>

              <Link href={"/work/google"}>
                <Row className="work-experience">
                  <Col>
                    <h4>Google</h4>
                    <span className="job-title">Software Engineering Intern</span>
                  </Col>
                </Row>
              </Link>

              <Link href={"/work/uofa"}>
                <Row className="work-experience">
                  <Col>
                    <h4>University of Alberta</h4>
                    <span className="job-title">Summer Research Intern</span>
                  </Col>
                </Row>
              </Link>

            </Col>
          </Row>
        </main>
      
    </Layout>
  )
}
