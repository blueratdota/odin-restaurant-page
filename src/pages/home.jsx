import { homeCarouselData } from "../assets/carousel-data"
import Carousel from 'react-material-ui-carousel'

const Home = () => {
    return (
        <Carousel className="max-w-[720px] w-[720px] pb-6 " animation="slide">
            {homeCarouselData.map((item) => {
                return (
                    <CarouselCard key={item.id} item={item}></CarouselCard>
                )
            })}
        </Carousel>
    )
}


function CarouselCard({ item }) {
    return (
        <div className="h-[550px] ">
            <img className="block w-full h-[400px] object-cover " src={item.image} alt="" />
            <div className="mt-6 px-12 flex flex-col gap-4">
                <div className="text-3xl font-bold">{item.title}</div>
                <div className="text-xl">{item.shortText}</div>
            </div>
        </div>
    )

}

export default Home
