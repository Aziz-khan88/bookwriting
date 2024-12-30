import ButtonCommon from "@/src/components/common/button"
import styles from "@/styles/home/whychoose.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { WhyChooseIcon01, WhyChooseIcon02, WhyChooseIcon03, WhyChooseIcon04 } from "@/src/app/app-constants"

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Book<br />Marketing</>),
        description: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>100% <br /> Transparency</>),
        description: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>High Retention<br /> Rate</>),
        description: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>4.5/5 Average<br /> Rating</>),
        description: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here",
    }
];

const WhyChoose = () => {
    return (
        <section className={`${styles.whychooseSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xl={5} lg={6} md={12} className="">
                        <div className="subtitle">Why Choose</div>
                        <h2>Why Choose Book Writing?</h2>
                        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                        <ButtonCommon txt="Free Consultation" />
                    </Col>
                    <Col xl={3} lg={3} md={6} className="my-auto offset-xl-1 mt-md-0 mt-4 ">
                        <div className={styles.whyBox}>
                            {WhyChooseList1.map((item, index) => (
                                <div className={styles.whyItem} key={index}>
                                    <div className={styles.whyTitle}>
                                        <div className={styles.whyIcon}>{item?.Icon}</div>
                                        <div className={styles.whyHeading}>
                                            {item?.title}
                                        </div>
                                    </div>
                                    <p>
                                        {item?.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg={3} md={6} className={styles.whyBoxMargin}>
                        <div className={styles.whyBox}>
                            {WhyChooseList2.map((item, index) => (
                                <div className={styles.whyItem} key={index}>
                                    <div className={styles.whyTitle}>
                                        <div className={styles.whyIcon}>{item?.Icon}</div>
                                        <div className={styles.whyHeading}>
                                            {item?.title}
                                        </div>
                                    </div>
                                    <p>
                                        {item?.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChoose