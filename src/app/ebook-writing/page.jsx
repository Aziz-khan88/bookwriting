import Banner from "@/src/components/services/banner"
import { BannerData, InnerContentData, ContentData, ProcessData, InnerServicesData, ContentData1 } from "@/src/app/ebook-writing/data/data"
import Clients from "@/src/app/home/clients"
import Portfolio from "@/src/app/home/portfolio"
import BookContent from "@/src/components/services/bookcontent"
import ContentSection from "@/src/components/services/content"
import Process from "@/src/components/services/process"
import InnerServices from "@/src/components/services/innerservices"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <BookContent data={InnerContentData} />
            <Portfolio />
            <InnerServices data={InnerServicesData} />
            <ContentSection data={ContentData1} />
            <Process data={ProcessData} />
            <ContentSection data={ContentData} />
        </>
    )
}

export default Page