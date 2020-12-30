import Link from "next/link";
import Image from "next/image";
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

              <Link href={"/projects/castroom"}>
                <Row className="project">
                  <Col>
                    <Image className="project-image" src="/images/projects/castroom/main-cover.png" width={2000} height={1000} />
                    <h4>Castroom</h4>
                  </Col>
                </Row>
              </Link>
              
              <Link href={"/projects/inhale"}>
                <Row className="project">
                  <Col>
                    <Image className="project-image" src="/images/projects/inhale/main-cover.png" width={2000} height={1000} />
                    <h4>Inhale</h4>
                  </Col>
                </Row>
              </Link>
              
            </Col>
          </Row>

          <Row className="work-wrapper">
            <Col>
              <h2>Work</h2>  

              <Link href={"/work/intuit"}>
                <Row className="work-experience">
                  <Col>
                    <h4>Intuit</h4>
                    <span className="job-title">Software Developer II</span>
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
