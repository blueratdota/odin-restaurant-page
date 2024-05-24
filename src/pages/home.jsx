import { homeCarouselData } from "../assets/carousel-data"
import Carousel from 'react-material-ui-carousel'

import CarouselCard from "../components/CarouselCard"

const Home = () => {
    return (
        <Carousel className="max-w-[720px] w-[720px] shadow-lg pb-4 " animation="slide">
            {homeCarouselData.map((item) => {
                return (
                    <CarouselCard key={item.id} item={item}></CarouselCard>
                )
            })}
        </Carousel>
    )
}
export default Home
