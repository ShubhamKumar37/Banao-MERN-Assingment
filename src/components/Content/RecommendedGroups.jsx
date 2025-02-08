import { useState } from "react";
import { AiFillLike } from "react-icons/ai";

const groups = ["Leisure", "Activism", "MBA", "Philosophy"];

const RecommendedGroups = () => {
    const [followed, setFollowed] = useState({
        Leisure: true,
        Activism: false,
        MBA: false,
        Philosophy: false,
    });

    const toggleFollow = (group) => {
        setFollowed((prev) => ({
            ...prev,
            [group]: !prev[group],
        }));
    };

    return (
        <div className="max-w-sm w-full mx-auto bg-white p-1 ">
            <h2 className="text-lg font-semibold flex items-center gap-2">
                <span><AiFillLike /></span> RECOMMENDED GROUPS
            </h2>
            <div className="mt-3 flex flex-col gap-3">
                {groups.map((group) => (
                    <div
                        key={group}
                        className="flex sm:flex-col lg:flex-row items-center justify-between gap-2 border border-gray-300 p-2 rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src="https://picsum.photos/800/400?random=1"
                                alt={group}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <span className="text-sm font-medium">{group}</span>
                        </div>
                        <button
                            onClick={() => toggleFollow(group)}
                            className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${followed[group]
                                ? "bg-black text-white"
                                : "bg-gray-200 text-black hover:bg-gray-300"
                                } md:flex md:flex-col`}
                        >
                            {followed[group] ? "Followed" : "Follow"}
                        </button>
                    </div>
                ))}
            </div>
            <p className="text-blue-500 text-sm mt-3 cursor-pointer">See More...</p>
        </div>
    );
};

export default RecommendedGroups;
