import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WorkExpCard(props) {
  return(
    <div className="work-experience-card">
      <Row className="experience-heading">
        <Col sm={7} xs={12}>
          <h3 className="title">{props.title}</h3>
        </Col>
        <Col sm={5} xs={12}>
          <h5 className="date">{props.date}</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="location">{props.location}</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="bullets">
            {
              props.bullets.map((item) => <li>{item}</li> )
            }
          </ul>
        </Col>
      </Row>

      {/* <Row>
        <Col xs={12}>
          <div className="workDescription">
            <ReactMarkdown source={props.description}/>
          </div>
        </Col>
      </Row> */}
    </div>
  )
}