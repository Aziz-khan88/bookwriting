import styles from "@/styles/components/services/innerservices.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const InnerServices = ({ data }) => {
    return (
        <section className={`p-100 ${styles.innerServicesSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.innerServicesBox}>
                            {data.innerServItem.map((item, index) => (
                                <div
                                    className={`${styles.innerServicesItem} ${data.column === "yes" ? styles.columnSixth : ''}`}
                                    key={index}
                                >
                                    <h4>{item.title}</h4>
                                    <p>{item.txt}</p>
                                    <div className={styles.pointNumber}>0{index + 1}</div>
                                </div>
                            ))}


                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default InnerServices