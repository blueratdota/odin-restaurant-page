import Button from '@mui/material/Button'
export default function CarouselCard({ item }) {
    return (
        <div className="h-[600px] ">
            <img className="block w-full h-[400px] object-cover " src={item.image} alt="" />
            <div className="mt-6 px-12 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <div className="text-3xl font-bold">{item.title}</div>
                    <div className="text-xl">{item.shortText}</div>
                </div>
                <Button variant="outlined" className="w-36 text-black border-black">Learn More</Button>
            </div>

        </div>
    )
}