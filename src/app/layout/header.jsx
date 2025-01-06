"use client"
import styles from "@/styles/layout/header.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Navigation from "@/src/app/layout/navigation"
import { useState, useEffect } from "react";
import { FooterEmail, FooterPhone } from "@/src/app/app-constants";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section className={`${styles.headerSection} ${scrolled ? styles.active : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} sm={6} md={2} lg={2} className="my-auto">
                        <div className={styles.mainLogo}><span>Book</span>Writing <div className={styles.super}>US</div></div>
                    </Col>
                    <Col xs={6} sm={6} md={8} lg={7} className="my-auto">
                        <Navigation />
                    </Col>
                    <Col xs={6} sm={6} md={2} lg={3} className="d-none d-md-block my-auto">
                        <ul className={styles.lastBtn}>
                            <li>
                                <div className="mainButton"><span><FooterPhone />866 - 600-0036</span></div>
                            </li>
                            <li>
                                <div className="mainButton"><span><FooterEmail />Get a Quote</span></div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header

