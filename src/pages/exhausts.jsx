import { useState } from "react";
import { allExhausts } from "../assets/exhausts-data"
import ExhaustCard from "../components/ExhaustCard";
import { MenuItem, Select, Pagination } from "@mui/material";




const Exhaust = () => {

    const [currPage, setCurrPage] = useState(1)
    const [cardPerPage, setCardPerPage] = useState(6)

    const handlePageChange = (e, page) => {
        setCurrPage(page)
    }

    const handlesetCardPerPage = (e) => {
        setCardPerPage(e.target.value);
    }

    //get current posts
    const indexOfLastPost = currPage * cardPerPage
    const indexOfFirstPost = indexOfLastPost - cardPerPage
    const currentPosts = allExhausts.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className="p-4">

            <div className="mb-4">
                <Select
                    value={cardPerPage}
                    onChange={handlesetCardPerPage}
                    className="h-10">
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {currentPosts.map((item) => {
                    return (
                        <ExhaustCard key={item.id} item={item}></ExhaustCard>
                    )
                })}
            </div>
            <Pagination
                count={Math.ceil(allExhausts.length / cardPerPage)}
                className="flex justify-center pt-6 "
                onChange={handlePageChange}
            >
            </Pagination>

        </div>
    )
}


export default Exhaust
