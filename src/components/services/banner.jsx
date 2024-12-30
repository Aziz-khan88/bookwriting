import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/banner.module.scss"
import Image from "next/image"

const Banner = ({ data }) => {
    return (
        <section className={`${styles.bannerSection}`}  >
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={6} className="my-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                        <ul className={styles.lastBtn}>
                            <li>
                                <div className="mainButton"><span>866 - 600-0036</span></div>
                            </li>
                            <li>
                                <div className="mainButton"><span>Get a Quote</span></div>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} className={`${styles.bannerImg} my-auto`}>
                        <Image src={data.BannerPoster} alt="Book Writing Services" width={960} height={600} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner