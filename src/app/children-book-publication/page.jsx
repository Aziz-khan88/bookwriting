import Banner from "@/src/components/services/banner"
import { BannerData, ContentData, ProcessData, InnerServicesData, ContentData1 } from "@/src/app/children-book-publication/data/data"
import Clients from "@/src/app/home/clients"
import Portfolio from "@/src/app/home/portfolio"
import ContentSection from "@/src/components/services/content"
import Process from "@/src/components/services/process"
import InnerServices from "@/src/components/services/innerservices"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <ContentSection data={ContentData1} />
            <Portfolio />
            <InnerServices data={InnerServicesData} />
            <Process data={ProcessData} />
            <ContentSection data={ContentData} />

        </>
    )
}

export default Page