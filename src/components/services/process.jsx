import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/components/services/process.module.scss"
import Image from "next/image"


const Process = ({ data }) => {
    return (
        <section className={`${styles.processSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={9} xl={8} className='m-auto text-center'>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className='m-auto text-center'>
                        <div className={styles.processImg}>
                            <Image src={data.ProcessImage} alt="Process Image" height={728} width={1299} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Process