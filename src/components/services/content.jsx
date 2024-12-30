import styles from "@/styles/home/innercontent.module.scss"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'
import ButtonCommon from "@/src/components/common/button"
import Table from 'react-bootstrap/Table';
import { CancelIcon, CheckedIcon } from "@/src/app/app-constants";
const ContentSection = ({ data }) => {
    return (
        <section className={`p-100 ${styles.innerServicesContent} `}>
            <Container>
                <Row>

                    <Col md={6} className="my-auto">
                        <div className={styles.contentBox}>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                    <Col md={6} className="my-auto text-center">
                        <Image src={data.BannerImage} alt="Book Image" width={600} height={300} />
                    </Col>

                </Row>
                {data?.table === "yes" ?
                    <Row>
                        <Col md={12}>
                            <div className={styles.tableSection}>
                                <Table responsive bordered hover>
                                    <thead className={styles.darkHeader}>
                                        <tr>
                                            <th></th>
                                            <th scope="col">
                                                LINE-EDITING
                                            </th>
                                            <th scope="col">
                                                COPY-EDITING
                                            </th>
                                            <th scope="col">
                                                PROOF-READING
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className={styles.bodytable}>
                                        <tr>
                                            <td>Price</td>
                                            <td>From $30/1000 words</td>
                                            <td>From $25/1000 words</td>
                                            <td>From $20/1000 words</td>
                                        </tr>
                                        <tr>
                                            <td>Typos</td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                        </tr>
                                        <tr>
                                            <td>US or UK</td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                        </tr>
                                        <tr>
                                            <td>Punctuation</td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                        </tr>
                                        <tr>
                                            <td>Grammar</td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                            <td>Some</td>
                                        </tr>
                                        <tr>
                                            <td>Fact-checking</td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                            <td><CancelIcon /></td>
                                        </tr>
                                        <tr>
                                            <td>Consistency</td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                            <td><CancelIcon /></td>
                                        </tr>
                                        <tr>
                                            <td>Repetitions</td>
                                            <td><CheckedIcon /></td>
                                            <td><CheckedIcon /></td>
                                            <td><CancelIcon /></td>
                                        </tr>

                                        <tr>
                                            <td>Clarity</td>
                                            <td><CheckedIcon /></td>
                                            <td>Some</td>
                                            <td><CancelIcon /></td>
                                        </tr>

                                        <tr>
                                            <td>Style &amp; flow</td>
                                            <td><CheckedIcon /></td>
                                            <td><CancelIcon /></td>
                                            <td><CancelIcon /></td>
                                        </tr>
                                        <tr>
                                            <td>Cutting</td>
                                            <td><CheckedIcon /></td>
                                            <td><CancelIcon /></td>
                                            <td><CancelIcon /></td>
                                        </tr>
                                        <tr>
                                            <td>Rewriting</td>
                                            <td>Some</td>
                                            <td><CancelIcon /></td>
                                            <td><CancelIcon /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                    :
                    ""
                }
            </Container>
        </section>
    )
}

export default ContentSection