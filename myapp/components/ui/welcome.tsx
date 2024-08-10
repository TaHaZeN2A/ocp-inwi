"use client";

import { useUser} from "@clerk/nextjs"

export const Welcome = () => {
    const { user, isLoaded} =  useUser();
    return (
        <div className="hidden sm:block space-y-1">
            <h2 className="text-xl md:text-base lg:text-4xl text-white font-medium">
                Welcome Back {isLoaded ? "," : "" }{user?.firstName}
            </h2>
            <p className="text-sm lg:text-base text-[#89b6fd]">
            Effortless PCAP File Analysis in Your Browser
            </p>
        </div>
    )
}
