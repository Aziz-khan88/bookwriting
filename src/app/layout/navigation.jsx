"use client"
import Link from "next/link"
import styles from "@/styles/layout/navigation.module.scss"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check screen size on mount
        const checkScreenSize = () => {
            if (typeof window !== 'undefined') {
                const isMobile = window.innerWidth <= 800;
                setIsMobileView(isMobile);
                if (!isMobile && isActive) {
                    // Close menu if it's active and screen width is greater than 800px
                    handleClosed();
                }
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isActive]);

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };

    const handleClosed = () => {
        setIsActive(false);
        document.body.classList.remove('active');
    };
    const isSubmenuActive = () => {
        const submenuPaths = [
            "/book-writing",
            "/book-publishing",
            "/book-proofreading",
            "/book-promotion",
            "/book-marketing",
            "/book-editing",
            "/article-writing",
            "/blog-writing",
            "/book-cover-design",
            "/book-trailer",
            "/children-book-publication",
            "/author-marketing-promotion",
            "/digital-marketing",
            "/ebook-writing",
        ];
        return submenuPaths.includes(pathname);
    };
    return (
        <ul className={styles.mainNavigations}>
            <li className={pathname === "/" ? styles.active : ""}><Link href="/">Home</Link></li>
            <li className={pathname === "/about-us" ? styles.active : ""}><Link href="/about-us">About Us</Link></li>
            <li className={isSubmenuActive() ? styles.active : ""}>
                <Link href="#" aria-label="Services Page">Services</Link>
                <div className={styles.subMenu} >
                    <div className={styles.MenuListing}>
                        <div className={`${styles.MenuList} ${pathname === "/book-publishing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}>
                            <Link href="/book-publishing" aria-label="Book Publishing">Book Publishing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/book-promotion" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/book-promotion" aria-label="Book Promotion">Book Promotion</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/book-writing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/book-writing" aria-label="Book Writing">Book Writing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/book-editing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/book-editing" aria-label="Book Editing">Book Editing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/book-marketing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/book-marketing" aria-label="Book Editing">Book Marketing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/book-proofreading" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/book-proofreading" aria-label="Proofreading Services">Proofreading Services</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/article-writing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/article-writing" aria-label="Article Writing">Article Writing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/blog-writing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/blog-writing" aria-label="Blog Writing">Blog Writing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/book-cover-design" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/book-cover-design" aria-label="Book Cover Design">Book Cover Design</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/business-plan-writing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/business-plan-writing" aria-label="Business Plan Writing">Business Plan Writing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/children-book-publication" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/children-book-publication" aria-label="Children Book Publication">Children Book Publication</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/author-marketing-promotion" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/author-marketing-promotion" aria-label="Author Marketing Promotion">Author Marketing Promotion</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/digital-marketing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/digital-marketing" aria-label="Digital Marketing">Digital Marketing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/ebook-writing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/ebook-writing" aria-label="Ebook Writing">Ebook Writing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/book-formatting" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/book-formatting" aria-label="Book Formatting">Book Formatting</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/audiobook-recording" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/audiobook-recording" aria-label="Audio Book Recording">Audio Book Recording</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/web-content-writing" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/web-content-writing" aria-label="Web Content Writing">Web Content Writing</Link>
                        </div>
                        <div
                            className={`${styles.MenuList} ${pathname === "/author-website-design" ? styles.active : ""}`}
                            onClick={isMobileView ? handleClosed : undefined}
                        >
                            <Link href="/author-website-design" aria-label="Author Website Design">Author Website Design</Link>
                        </div>
                    </div>
                </div>
            </li>
            <li className={pathname === "/pricing" ? styles.active : ""}><Link href="/pricing">Pricing</Link></li>
            <li className={pathname === "/portfolio" ? styles.active : ""}><Link href="/portfolio">Portfolio</Link></li>
            <li className={pathname === "/blogs" ? styles.active : ""}><Link href="/blogs">Blog</Link></li>
            <li className={pathname === "/contact-us" ? styles.active : ""}><Link href="/contact-us">Contact Us</Link></li>
        </ul>
    )
}

export default Navigation