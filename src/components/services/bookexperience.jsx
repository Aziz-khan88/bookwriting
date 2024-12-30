import styles from "@/styles/components/services/bookexperience.module.scss"
import ButtonCommon from "@/src/components/common/button"
import { Container, Row, Col } from 'react-bootstrap'


const BookExperience = ({ data }) => {
    return (
        <section className={`${styles.bookexperienceSection} p-100`}>
            <Container>
                <Row>
                    <Col md={8} className="my-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.bookexperienceContainer}>
                            {data.BookExperienceItem.map((item, index) => (
                                <div className={styles.bookexperienceItem} key={index}>
                                    <h5>{item.tit}</h5>
                                    <p>{item.txt}</p>
                                    <ButtonCommon txt="Free Consultation" />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BookExperience