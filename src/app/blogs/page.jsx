import Banner from "@/src/components/services/banner"
import { BannerData, BlogsData } from "@/src/app/blogs/data/data"
import Clients from "@/src/app/home/clients"
import Testimonials from "@/src/app/home/testimonials"
import { TestimonialData } from "@/src/app/home/data/data"
import BlogsItemBox from "@/src/components/blog/blogitem"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <BlogsItemBox data={BlogsData} />
            <Testimonials data={TestimonialData} />
        </>
    )
}

export default Page