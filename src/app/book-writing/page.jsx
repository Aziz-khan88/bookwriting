import Banner from "@/src/components/services/banner"
import { BannerData, InnerServicesData, InnerContentData, ContentData, BookExperienceData, ProcessData, ContentData1 } from "@/src/app/book-writing/data/data"
import Clients from "@/src/app/home/clients"
import Portfolio from "@/src/app/home/portfolio"
import BookContent from "@/src/components/services/bookcontent"
import InnerServices from "@/src/components/services/innerservices"
import ContentSection from "@/src/components/services/content"
import BookExperience from "@/src/components/services/bookexperience"
import Process from "@/src/components/services/process"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <Portfolio />
            <BookContent data={InnerContentData} />
            <ContentSection data={ContentData} />
            <InnerServices data={InnerServicesData} />
            <BookExperience data={BookExperienceData} />
            <ContentSection data={ContentData1} />
            <Process data={ProcessData} />

        </>
    )
}

export default Page