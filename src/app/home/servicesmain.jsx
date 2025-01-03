"use client";
import styles from "@/styles/home/servicesmain.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Link from "next/link"

//Services

export const ServicesData = {
    subtitle: "Our Services",
    title: "Our Comprehensive Book Services Include",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ServicesItem: [
        {
            title: (<>Book<br />Writing</>),
            txt: "When you think about writing a book, know that it doesn't have to be complicated.",
            url: "#",
        },
        {
            title: (<>Book <br />Editing</>),
            txt: "We know that every word counts, so we're committed to crafting captivating stories for any length and style.",
            url: "#",
        },
        {
            title: (<>Book <br />Publishing</>),
            txt: "Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves",
            url: "#",
        },
        {
            title: (<>Article  <br />Publishing</>),
            txt: "We are an Award-winning Children’s Book Publisher, with some top-sellers and best- sellers in our portfolio.",
            url: "#",
        },
        {
            title: (<>Children’s Book <br />Publication</>),
            txt: "Children’s Book Publishing is no easier task. Of course, the length of the book is relatively short,",
            url: "#",
        },
        {
            title: (<>CE-Book<br />Writing</>),
            txt: "We want to help you shine your eBook and make it compelling for readers, so we'll work with the most important ideas.",
            url: "#",
        },
        {
            title: (<>Children’s Book <br />Illustrations</>),
            txt: "Children are the most unfiltered and harshest critics! That doesn't mean they are not biased. They pick up the book and flip through pages.",
            url: "#",
        },
        {
            title: (<>Book <br />Marketing</>),
            txt: "We promote & market your book in the most effective way, and bring your book(s) from the shadows of the back-of-the-shelf to Best seller.",
            url: "#",
        },


    ]
}

const ServicesMain = () => {
    return (
        <section className={`pt-100 ${styles.servicesMainSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{ServicesData.subtitle}</div>
                        <h2>{ServicesData.title}</h2>
                        <p>{ServicesData.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.servicesMainContainer}>
                            {ServicesData.ServicesItem.map((item, index) => (
                                <div className={styles.servicesMainItem} key={index}>
                                    <div className={styles.servicesMainImage}>
                                        <div className={styles.title}>{item.title}</div>
                                        <div className={styles.readMore}>
                                            <Link href={item.url}>Read More</Link>
                                        </div>
                                        <p>{item.txt}</p>
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

export default ServicesMain