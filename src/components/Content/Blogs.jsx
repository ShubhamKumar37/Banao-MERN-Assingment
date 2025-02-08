import React, { useMemo, useState } from 'react'
import JoinButtons from './JoinButtons';
import { cardData } from '../../data/BlogData';
import BlogCard from './BlogCard';
import SetLocation from './SetLocation';
import RecommendedGroups from './RecommendedGroups';


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
        <div className='w-full sm:w-11/12 mx-auto flex flex-col gap-7'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-2 p-[1rem] border-b-2 border-gray-700'>
                <ul className='flex flex-wrap sm:flex-row gap-7'>
                    {
                        tags.map((item, index) => {
                            return (
                                <li
                                    onClick={() => changeTagHandler(item)}
                                    key={index}
                                    className={`${item === selectedTag ? "font-[500]" : ""} md:text-xl text-sm cursor-pointer`}>
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
                <div className='w-full flex flex-col gap-5'>
                    {
                        cardData.filter((item) => {
                            if (selectedTag === "All Posts") return true;
                            if (item.tag === selectedTag) return true;
                            return false;
                        }).map((item, index) => {
                            return (
                                <BlogCard key={index} item={item} />
                            )
                        })
                    }
                </div>

                <div className="flex flex-col gap-[1rem] w-full sm:w-[34%]">
                    <SetLocation />
                    <RecommendedGroups />
                </div>
            </div>
        </div>
    )
}

export default Blogs