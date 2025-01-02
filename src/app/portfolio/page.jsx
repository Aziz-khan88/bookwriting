import Banner from "@/src/components/services/banner"
import { BannerData, PorjectsData, ContentData } from "@/src/app/portfolio/data/data"
import Clients from "@/src/app/home/clients"
import Portfolio from "@/src/app/home/portfolio"
import Testimonials from "@/src/app/home/testimonials"
import { TestimonialData } from "@/src/app/home/data/data"
import ContentSection from "@/src/components/services/content"
import ProjectsBox from "@/src/components/projects"

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Clients />
            <ProjectsBox data={PorjectsData} />
            <ContentSection data={ContentData} />
            <Testimonials data={TestimonialData} />
        </>
    )
}

export default Page