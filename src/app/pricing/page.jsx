import Banner from "@/src/components/services/banner"
import { BannerData, MainContentData, ContentData, BookPriceData } from "@/src/app/pricing/data/data"
import Clients from "@/src/app/home/clients"
import Portfolio from "@/src/app/home/portfolio"
import Testimonials from "@/src/app/home/testimonials"
import { TestimonialData } from "@/src/app/home/data/data"
import ContentSection from "@/src/components/services/content"
import PricingBox from "@/src/components/pricingbox"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <PricingBox data={BookPriceData} />
            <ContentSection data={ContentData} />
            <Portfolio />
            <Testimonials data={TestimonialData} />
        </>
    )
}

export default Page