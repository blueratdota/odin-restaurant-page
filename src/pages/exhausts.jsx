import { allExhausts } from "../assets/exhausts-data"
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const Exhaust = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 pt-8 px-4">
                {allExhausts.map((item) => {
                    return (
                        <ExhaustCard key={item.id} item={item}></ExhaustCard>
                    )
                })}
            </div>
            <Pagination count={6}></Pagination>
        </div>
    )
}



function ExhaustCard({ item }) {
    return (
        <div className="w-[300px] border">
            <div>
                <img src={item.image} alt={`exhaust-${item.key}`} />
            </div>
            <p className="text-xl text-center">{item.name}</p>
        </div>
    )

}

export default Exhaust
