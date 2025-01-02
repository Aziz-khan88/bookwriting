import { ArrowIcon } from "@/src/app/app-constants"
import styles from "@/styles/components/blog/blog.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Col, Container, Row } from 'react-bootstrap'


const BlogsItemBox = ({ data }) => {
    return (
        <section className={`p-100 ${styles.blogsSection} `}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="subtitle">Portfolio</div>
                        <h2>Our Recent Publishing Books</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.blogsContainer}>
                            {data.map((item, index) => (
                                <div className={styles.blogsBox} key={index}>
                                    <div className={styles.blogImg}>
                                        <Image src={item.Image} alt={item.title} fill />
                                    </div>
                                    <div className={styles.blogContent}>
                                        <h5>{item.title}</h5>
                                        <Link href={item.url} target="_blank"><ArrowIcon />Read More</Link>
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

export default BlogsItemBox