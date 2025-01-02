import styles from "@/styles/components/projects.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowIcon } from "@/src/app/app-constants"


const ProjectsBox = ({ data }) => {
    return (
        <section className={`p-100 ${styles.projectsSection} `}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="subtitle">Portfolio</div>
                        <h2>Our Recent Publishing Books</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.projectsContainer}>
                            {data.map((item, index) => (
                                <div className={styles.projectsBox} key={index}>
                                    <div className={styles.projectImg}>
                                        <Image src={item.Image} alt={item.title} width={300} height={300} />
                                    </div>
                                    <div className={styles.projectContent}>
                                        <span>({item.name})</span>
                                        <h5>{item.title}</h5>
                                        <p>{item.txt}</p>
                                        <Link href={item.url} target="_blank"><ArrowIcon />Visit On Amazon </Link>
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

export default ProjectsBox