import Banner from "@/src/components/services/banner"
import { BannerData, ContentData1, ContentData, InnerServicesData } from "@/src/app/digital-marketing/data/data"
import Clients from "@/src/app/home/clients"
import Portfolio from "@/src/app/home/portfolio"
import ContentSection from "@/src/components/services/content"
import InnerServices from "@/src/components/services/innerservices"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <ContentSection data={ContentData1} />
            <Portfolio />
            <InnerServices data={InnerServicesData} />
            <ContentSection data={ContentData} />
        </>
    )
}

export default Page