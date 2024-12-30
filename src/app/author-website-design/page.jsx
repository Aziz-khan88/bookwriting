import Banner from "@/src/components/services/banner"
import { BannerData, InnerContentData, ContentData, ProcessData, InnerServicesData, WebProjectData } from "@/src/app/author-website-design/data/data"
import Clients from "@/src/app/home/clients"
import BookContent from "@/src/components/services/bookcontent"
import ContentSection from "@/src/components/services/content"
import Process from "@/src/components/services/process"
import InnerServices from "@/src/components/services/innerservices"
import WebProjects from "@/src/components/services/webprojects"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <BookContent data={InnerContentData} />
            <WebProjects data={WebProjectData} />
            <InnerServices data={InnerServicesData} />
            <Process data={ProcessData} />
            <ContentSection data={ContentData} />
        </>
    )
}

export default Page