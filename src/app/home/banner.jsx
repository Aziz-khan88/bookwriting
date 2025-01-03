import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/banner.module.scss"
import Image from "next/image"
import BannerLogos from "media/home/banner/bannerLogo.webp"
import BannerPoster from "media/home/banner/bannerImg.webp"

const Banner = () => {
    return (
        <section className={`${styles.bannerSection}`}  >
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={6} className="my-auto">
                        <div className="subtitle">No.1 Book Marketing Company in US</div>
                        <h1>Book Writing Company That Commits To Writing Excellence!</h1>
                        <p>Your wish to bring your dream/ideas to life, let our book writers make it
                            come true. Fulfilling your self-publishing needs.</p>
                        <ul className={styles.lastBtn}>
                            <li>
                                <div className="mainButton"><span>866 - 600-0036</span></div>
                            </li>
                            <li>
                                <div className="mainButton"><span>Get a Quote</span></div>
                            </li>
                        </ul>
                        <div className={styles.bannerLogos}>
                            <Image src={BannerLogos.src} alt="Book Writing Services" className={styles.logoBanner} width={528} height={50} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} className={`${styles.bannerImg} my-auto`}>
                        <Image src={BannerPoster.src} alt="Book Writing Services" width={960} height={600} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner