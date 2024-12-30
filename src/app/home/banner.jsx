import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/banner.module.scss"
import Image from "next/image"
import BannerLogos from "media/home/banner/bannerLogo.webp"
import BannerImage from "media/home/banner/bannerImage.webp"
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
                        {/* <div className={styles.videoBox}>
                        <video
                            autoPlay
                            muted
                            loop
                            preload="auto"
                            aria-label="Background video"
                            className={styles.bannerVideo}
                            loading="eager"
                            poster={BannerPoster.src}
                        >
                            <source src="https://player.vimeo.com/progressive_redirect/playback/1041229312/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0ec53fec971f7eebb1e0102946d1191fa168e6786c49deb2c780ea2ae68521bc" type="video/mp4" />
                        </video></div> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner