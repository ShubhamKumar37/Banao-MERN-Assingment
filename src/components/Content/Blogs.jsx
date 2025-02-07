import React, { useMemo, useState } from 'react'
import JoinButtons from './JoinButtons';
import { cardData } from '../../data/BlogData';
import BlogCard from './BlogCard';
import SetLocation from './SetLocation';


const tags = ["All Posts", "Article", "Event", "Education", "Job"];

const Blogs = () => {

    const [selectedTag, setSelectedTag] = useState("All Posts");

    const changeTagHandler = (item) => {
        setSelectedTag(item);
    }

    const getLength = useMemo(() => {
        const lengths = tags.reduce((acc, tag) => {
            acc[tag] = cardData.filter(item => item.tag === tag).length;
            return acc;
        }, {});
        return (item) => lengths[item] || 0;
    }, []);

    return (
        <div className='w-full sm:w-10/12 mx-auto flex flex-col gap-7'>
            <div className='flex flex-col sm:flex-row justify-between items-center p-[1rem] border-b-2 border-gray-700'>
                <ul className='flex flex-wrap sm:flex-row gap-7'>
                    {
                        tags.map((item, index) => {
                            return (
                                <li
                                    onClick={() => changeTagHandler(item)}
                                    key={index}
                                    className={`${item === selectedTag ? "font-[500]" : ""} text-xl cursor-pointer`}>
                                    {item + " (" + (index === 0 ? cardData.length : getLength(item)) + ") "}
                                </li>)
                        })
                    }
                </ul>

                <div>
                    <JoinButtons />
                </div>
            </div>

            <div className='flex flex-col sm:flex-row w-full gap-5'>
                <div className='w-full sm:w-7/10'>
                    {
                        cardData.filter((item) => {
                            if (selectedTag === "All Posts") return true;
                            if (item.tag === selectedTag) return true;
                            return false;
                        }).map((item, index) => {
                            return (<BlogCard key={index} item={item} />)
                        })
                    }
                </div>

                <div className="w-full sm:w-[30%]">
                    <SetLocation />
                </div>
            </div>
        </div>
    )
}

export default Blogs