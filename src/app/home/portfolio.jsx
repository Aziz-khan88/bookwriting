import Image from "next/image"
import IMG02 from "media/home/book/2.webp"
import IMG03 from "media/home/book/3.webp"
import IMG04 from "media/home/book/4.webp"
import IMG05 from "media/home/book/5.webp"
import IMG06 from "media/home/book/6.webp"
import styles from "@/styles/home/portfolio.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"
import { ArrowIcon } from "@/src/app/app-constants"

const Portfolio = () => {
    return (
        <section className={`${styles.portfolioSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} className='my-auto'>
                        <div className="subtitle">Portfolio</div>
                        <h2>Our Best Sellers</h2>
                        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.portfolioBox}>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG06.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG02.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG03.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG04.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG05.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG04.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG03.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG05.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG02.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                            <div className={styles.portfolioItem}>
                                <Image src={IMG06.src} alt="IMG 01" width={200} height={350} />
                                <div className={styles.linkMore}>
                                    <Link href="#"><ArrowIcon />Visit on Amazon</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio