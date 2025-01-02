import Banner from "@/src/components/services/banner"
import { BannerData, MainContentData, InnerServicesData } from "@/src/app/about-us/data/data"
import Clients from "@/src/app/home/clients"
import Portfolio from "@/src/app/home/portfolio"
import MainContent from "@/src/components/services/maincontent"
import InnerServices from "@/src/components/services/innerservices"
import Testimonials from "@/src/app/home/testimonials"
import { TestimonialData } from "@/src/app/home/data/data"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <MainContent data={MainContentData} />
            <Portfolio />
            <Testimonials data={TestimonialData} />
        </>
    )
}

export default Page