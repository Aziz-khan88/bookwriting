import Banner from "@/src/components/services/banner"
import { BannerData, MainContentData, InnerContentData, ContentData, ProcessData } from "@/src/app/book-marketing/data/data"
import Clients from "@/src/app/home/clients"
import Portfolio from "@/src/app/home/portfolio"
import BookContent from "@/src/components/services/bookcontent"
import ContentSection from "@/src/components/services/content"
import Process from "@/src/components/services/process"
import MainContent from "@/src/components/services/maincontent"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <BookContent data={InnerContentData} />
            <Portfolio />
            <MainContent data={MainContentData} />
            <Process data={ProcessData} />
            <ContentSection data={ContentData} />

        </>
    )
}

export default Page