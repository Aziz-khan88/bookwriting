import styles from '@/styles/components/services/bookcontent.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
const BookContent = ({ data }) => {
    return (
        <section className={`${styles.booktxtSection} p-100`}>
            <Container>
                <Row>
                    <Col md={8} className="my-auto ">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row >
                    <Col md={12} >
                        <div className={styles.bookContainer}>
                            {data.innerServItem.map((item, index) => (
                                <div className={styles.contentBox} key={index}>
                                    <h4>{item.title}</h4>
                                    <p>{item.txt}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BookContent