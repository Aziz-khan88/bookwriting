import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/components/services/webprojects.module.scss"



const WebProjects = ({ data }) => {
    return (
        <section className={`${styles.webProjectSection}`}  >
            <Container>
                <Row>
                    <Col lg={8} md={8} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.webProjectContainer}>
                            {data.ProjectImages.map((imgSrc, imgIndex) => (
                                <div
                                    className={styles.ImageBox}
                                    key={imgIndex}
                                    style={{ backgroundImage: `url(${imgSrc})` }}
                                >
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WebProjects