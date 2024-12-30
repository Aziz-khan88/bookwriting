"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import ContactFrom from "@/src/components/contactfrom"
import Link from "next/link"
import { useEffect, useState } from "react";
import LOGO from "media/logoFooter.webp"
import { Facebook, Linkedin, Twitter, Youtube, FooterPhone, FooterEmail, FooterPin } from "@/src/app/app-constants"
import Image from "next/image"

// Social media links
export const SocailLinks = [
    { icon: <Facebook />, url: "#" },
    { icon: <Twitter />, uurl: "#" },
    { icon: <Linkedin />, url: "#" },
    { icon: <Youtube />, url: "#" },
];

// Dynamic submenu items
export const subMenuItems = [
    { label: "Book Writing", path: "#" },
    { label: "Book Editing", path: "#" },
    { label: "Book Publishing", path: "#" },
    { label: "Ebook Writing", path: "#" },
    { label: "Book Marketing", path: "#" },
    { label: "Article Publication", path: "#" },
    { label: "Children’s Book Publication", path: "#" },
    { label: "Children's Book Illustrations", path: "#" },
];




const QuickLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Portfolio",
        url: "#"
    },
    {
        name: "Pricing",
        url: "#"
    },
    {
        name: "Contact Us",
        url: "#"
    },
]



const Footer = () => {
    const [activeClass, setActiveClass] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveClass((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className={styles.topFooterSection}>
                <Container className={styles.footerBox}>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.footerBG}>
                                <div className={styles.footerContent}>
                                    <h3>Unlock Your Story’s Potential</h3>
                                    <p>Request A Free Quote</p>
                                    <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here</p>
                                    <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here</p>
                                </div>
                                <div className={styles.footerFrom}>
                                    <ContactFrom />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.FooterSection}>
                <Container >
                    <Row>
                        <Col md={12}>
                            <div className={styles.footerMenuSec}>
                                <div className={`${styles.menuItem} ${styles.FooterLogo}`}>
                                    <Image src={LOGO.src} alt="Logo Main" width={150} height={90} />
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Quick Links</h6>
                                        <ul>
                                            {QuickLinks.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.url}>{item.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Services Links</h6>
                                        <ul className={styles.serviceslinks}>
                                            {subMenuItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.path}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={`${styles.footerContent} ${styles.mainlinks}`}>
                                        <h6>Contact Info</h6>
                                        <div className={styles.contactInfo} target="_blank">
                                            <a href="tel:800-253-1448">
                                                <FooterPhone />
                                                866-600-0036</a>
                                        </div>
                                        <div className={styles.contactInfo}>
                                            <a href="mailto:info@bookwriting.us" target="_blank">
                                                <FooterEmail />
                                                info@bookwriting.us</a>
                                        </div>
                                        <div className={styles.contactAddress}>
                                            <div>
                                                <FooterPin />
                                            </div>
                                            <div>
                                                <a href="#" target="_blank">
                                                    4145 S.W. Watson, Suite 350, Beaverton, Oregon 97005 , United States
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.contactAddress}>
                                            <div>
                                                <FooterPin />
                                            </div>
                                            <div>
                                                <a href="#" target="_blank">
                                                    8 The Green STE 300, Dover DE 19901
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.copyRightSection}>
                <Container className="h-100">
                    <Row className={`${styles.borderStyle} h-100`} >
                        <Col sm={6} md={6} className="my-auto">
                            <div className={styles.CopyRightBox}>
                                <div className={styles.txtCopyRight}>© 2024 - All Rights Reserved Bhaoo INC </div>
                            </div>

                        </Col>
                        <Col sm={6} md={6} className="my-auto text-end">
                            <div className={styles.socailItem}>
                                <ul>
                                    {SocailLinks.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.url} target="_blank">{item.icon}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer