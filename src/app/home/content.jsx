import styles from "@/styles/home/innercontent.module.scss"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'
import BannerImage from "media/home/banner/bannerImage.webp"
import ButtonCommon from "@/src/components/common/button"


const ContentSection = () => {
    return (
        <section className={`p-100 ${styles.innerServicesContent} `}>
            <Container>
                <Row>

                    <Col md={6} className="my-auto">
                        <div className={styles.contentBox}>
                            <h2>Why Partner with Our Book Writing Experts?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                    <Col md={6} className="my-auto">
                        <Image src={BannerImage.src} alt="Book Image" width={600} height={300} />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ContentSection