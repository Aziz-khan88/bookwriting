import styles from "@/styles/home/ctaservices.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ImgBg from "media/home/cta/BgImage.webp"
import ButtonCommon from '@/src/components/common/button'

const CtaServices = () => {
    return (
        <section className={`pt-100 ${styles.ctaServicesSection}`}>
            <Container className={`h-100 ${styles.ImageGB}`} style={{ backgroundImage: `url(${ImgBg.src})` }}>
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <div className={styles.ctaServicesTitle}>
                            <h2>You’ve got a story to tell.</h2>
                            <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here</p>
                            <p>Content here.Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here</p>
                            <ButtonCommon txt="Get Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaServices