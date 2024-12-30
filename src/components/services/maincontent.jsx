import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/components/services/maincontent.module.scss"
import Image from "next/image"

const MainContent = ({ data }) => {
    return (
        <section className={`${styles.maincontentSection} p-100`}>
            <Container>
                <Row>
                    <Col md={7} className="my-auto ">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.mainContainer}>
                            {data.MainContentItem.map((item, index) => (
                                <div className={styles.mainItem} key={index}>
                                    <div className={styles.mainImgContent}>
                                        <h2>{item.title}</h2>
                                        <p>{item.txt}</p>
                                    </div>
                                    <div className={styles.mainImgBox}>
                                        <Image src={item.Image} alt="Image Section" width={550} height={491} />
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

export default MainContent