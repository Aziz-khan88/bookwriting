import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/contact/location.module.scss"
import Link from "next/link"


const Location = ({ data }) => {
    return (
        <section className={`p-100 ${styles.locationSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={9} md={9} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.locationContainer}>
                            {data.LocationAdd.map((item, index) => (
                                <div className={styles.locationItem} key={index}>
                                    <div className={styles.name}>{item.title}</div>
                                    <div className={styles.office}>{item.office}</div>
                                    <div className={styles.location}>{item.add}</div>
                                    <div className={styles.pin}><a href={item.pin} target="_blank">Google Map</a></div>
                                    <div className={styles.phone}><a href={`tel:${item.phone}`} target="_blank">{item.phone}</a></div>
                                    <div className={styles.email}><a href={`mailto:${item.email}`} target="_blank">{item.email}</a></div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Location