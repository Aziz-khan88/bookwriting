import styles from "@/styles/components/pricingbox.module.scss"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'
import ButtonCommon from "@/src/components/common/button"


const PricingBox = ({ data }) => {
    return (
        <section className={`p-100 ${styles.pricingSection} `}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.pricingContainer}>
                            {data.map((item, index) => (
                                <div className={styles.pricingBox} key={index}>
                                    <div className={styles.priceImg}>
                                        <Image src={item.Image} alt={item.title} width={300} height={300} />
                                    </div>
                                    <div className={styles.priceContent}>
                                        <h5>{item.title}</h5>
                                        <p>{item.txt}</p>
                                        <ButtonCommon txt="Get A Quote" />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PricingBox