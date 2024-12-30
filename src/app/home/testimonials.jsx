"use client"
import styles from "@/styles/home/testimonials.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowIcon, FiveStarIcon, SilderArrows } from "@/src/app/app-constants";
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'
const options = { loop: true }
//Testimonials

export const TestimonialData = {
    subtitle: "Happy Clients",
    title: "What Our Clients Says About Us",
    desc: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here",
    Testslider: [
        {
            txt: "If you are looking for professional writers, I highly recommend the Book Writing Cube services.Affordable prices.Mark Rivera and his team are superb! They explained the entire.process before starting my manuscript and are guiding me in every step.I am very pleased with their work.",
            icon: < FiveStarIcon />,
            namee: "Sharon Mondier.",
            job: "United State Of America",
        },
        {
            txt: "This was my first book to be published, I was extremely nervous, I wasn’t sure I could trust the company I was sending my money to. Book Writing Cube has EXCEEDED my expectations. Mark and his team are/were very attentive to my requests, they have presented several illustrations based on my vision, they have edited and presented ideas to make my story stronger, I could not be more pleased with their honesty and their commitment. Getting a book published is no easy task and I have procrastinated for years due to uncertainty. I’m now relieved that I trusted this team to do as they said and they have.",
            icon: <FiveStarIcon />,
            namee: "Elizabeth Waldorf",
            job: "United State Of America",
        },
        {
            txt: "This is the first time I’ve worked with Book Writing Cube and I’m happy that I chose to work with them. I am self-publishing my book for the first time and I didn’t know what to expect. To be honest I happen to come by Book Writing Cube by accident. I was researching websites that helped with self-publishing and I clicked on it and accidentally clicked on the chat icon. Someone responded and at first I didn’t write anything back. But then I decided to take a chance and the person I talked to put me in contact with Mark Rivera. Mark and his team have been very helpful during this whole process. They take my suggestions and show me where I can make improvements.",
            icon: <FiveStarIcon />,
            namee: "Ana",
            job: "United State Of America",
        },
        {
            txt: "This is a fantastic business! Their editing team did a great job on the design of the book cover, and formatting of the text for uploading onto KDP for print and ebook made it feasible for me to swiftly self-publish my book. Their staff was quick to reply to my queries, sometimes the same day, and provided me with excellent advice throughout. Furthermore, in comparison to many other publishing firms, their services were inexpensive. I'd recommend them to everybody who's just started out with their writing career!",
            icon: <FiveStarIcon />,
            namee: "Mark M. Cole",
            job: "United State Of America",
        },
        {
            txt: "BWC made my first book experience really easy. Mark was there with me whenever I had questions or revisions to be made and just overall helpful. His team is supremely skillful and so their illustrations are one of the best I've seen so far! BWC bought my characters to life in a way I couldn't have imagined. I'd recommend Book Writing Cube to everyone now!",
            icon: <FiveStarIcon />,
            namee: "Jason Bill",
            job: "United State Of America",
        }
    ]
}


const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 }), ClassNames()])
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`p-100 ${styles.testimonialsSection} sliderTestimonial`}>
            <Container>
                <Row>
                    <Col md={8} className="m-auto text-center">
                        <div className="subtitle">{TestimonialData.subtitle}</div>
                        <h2>{TestimonialData.title}</h2>
                        <p>{TestimonialData.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="m-auto text-center">
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {TestimonialData.Testslider.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={`${styles.testBox} testBoxBG`}>
                                                <div className={styles.testContent}>“{item.txt}”</div>
                                                <div className={styles.infoTest}>
                                                    <div className={styles.usesInfo}>
                                                        <div className={styles.namee}>{item.namee}</div>
                                                        <div className={styles.job}>{item.job}</div>
                                                    </div>
                                                    <div className={styles.usesIcon}>
                                                        {item.icon}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <div className={styles.embla_container}>
                            <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                <SilderArrows direction="prev" />
                            </div>
                            <div className={styles.embla_next} onClick={nextButtonHandler}>
                                <SilderArrows direction="next" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Testimonials