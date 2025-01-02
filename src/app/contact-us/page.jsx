import Banner from "@/src/components/services/banner"
import { BannerData, LocationData } from "@/src/app/contact-us/data/data"
import Clients from "@/src/app/home/clients"
import Testimonials from "@/src/app/home/testimonials"
import { TestimonialData } from "@/src/app/home/data/data"
import Location from "@/src/components/contact/location"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <Location data={LocationData} />
            <Testimonials data={TestimonialData} />
        </>
    )
}

export default Page