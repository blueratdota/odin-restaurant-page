import { useState } from "react";
import { allExhausts } from "../assets/exhausts-data"
import ExhaustCard from "../components/ExhaustCard";
import { MenuItem, Select, Pagination, Button } from "@mui/material";
import SwapVertIcon from '@mui/icons-material/SwapVert';



const Exhaust = () => {

    const [currPage, setCurrPage] = useState(1)
    const [cardPerPage, setCardPerPage] = useState(4)
    const [sortAsc, setSortAsc] = useState(true)

    const handlePageChange = (e, page) => {
        setCurrPage(page)
    }

    const handlesetCardPerPage = (e) => {
        setCardPerPage(e.target.value);
    }

    const handleSort = () => {
        setSortAsc(!sortAsc)
    }

    //get current posts and sorting
    const indexOfLastPost = currPage * cardPerPage
    const indexOfFirstPost = indexOfLastPost - cardPerPage
    const sortedPost = allExhausts.sort(function (a, b) {
        if (sortAsc) {
            return a.name > b.name ? 1 : -1
        }
        return a.name > b.name ? -1 : 1
    })
    const currentPosts = sortedPost.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className="p-4 shadow-lg">

            <div className=" flex justify-between mb-4">
                <label htmlFor="items-per-page">
                    Items Per Page
                    <Select
                        id="items-per-page"
                        value={cardPerPage}
                        onChange={handlesetCardPerPage}
                        className="h-10 ml-4">
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                    </Select>
                </label>
                <label htmlFor="">
                    Sort Alphabetically
                    <Button className="w-1" aria-label="sort" variant="text" onClick={handleSort}>
                        <SwapVertIcon className="text-black" />
                    </Button>

                </label>

            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    currentPosts.map((item) => {
                        return (
                            <ExhaustCard key={item.id} item={item}></ExhaustCard>
                        )
                    })
                }
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
