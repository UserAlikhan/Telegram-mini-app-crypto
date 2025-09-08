"use client"

import LogoMPT from "@/assets/Logo-MPT.png";
import ButtonFullWidth from "@/components/ui/ButtonFullWidth";
import ButtonWithTextInTheBorder from "@/components/ui/ButtonWithTextInTheBorder";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import LogoWithTextAndButton from "@/components/ui/LogoWithTextAndButton";
import ParameterButton from "@/components/ui/ParameterButton";
import ProgressBar from "@/components/ui/ProgressBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "./api/users/route";
import { HORIZONTAL_SCROLL_PARAMS, TEXT_CONTENT } from "@/constants/main";
import LinkButton from "@/components/ui/LinkButton";

export default function Home() {

  const [activeParamID, setActiveParamID] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  
  const [user, setUser] = useState<User | null>(null)
  const [allUsers, setAllUsers] = useState<User[] | null>(null)

  // API calls
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/1`)
      const data = await response.json()
      setUser(data.data)
    }

    const fetchAllUsers = async () => {
      const response = await fetch(`/api/users`)
      const data = await response.json()
      setAllUsers(data.data)
    }

    fetchUser()
    fetchAllUsers()
  }, [])

  return (
    <div className="flex flex-col px-10 py-5 bg-[#181818] w-full h-full gap-5">
       <LogoWithTextAndButton 
         LogoImage={LogoMPT} firstText={user?.Username || ""} secondText={`Your rank #${user?.Rank || ""}`} 
         Button={<ButtonWithTextInTheBorder text={String(user?.Points || "")} textInTheBorder="Points"/>} 
       />
      
      {/* Text area */}
      <div className="flex flex-col w-full h-max gap-2">
        <p className="text-gray-200 text-lg">
          {isExpanded ? TEXT_CONTENT.FULL : TEXT_CONTENT.SHORT}
        </p>
        <ButtonFullWidth text={isExpanded ? "Read Less" : "Read More"} bgColor="bg-[#494949]" textColor="white" textSize="lg" onClick={() => setIsExpanded(!isExpanded)} />
      </div>

      {/* Info card */}
      <div className="flex flex-col gap-3 w-full h-full py-3 px-4 border-2 border-gray-500 border-rounded-2xl rounded-2xl">
        <p className="text-gray-300 text-md mt-3">💎 Total funds raised ${user?.TON || ""} TON</p>
        {/* Loading bar based  on percentage */}
        <ProgressBar
          percentage={52.3}
          height="h-7"
          backgroundColor="bg-gray-600"
          fillColor="bg-blue-400"
          className="w-full"
        />
        <p className="text-gray-300 text-sm">First round goal 1,000.00 TON</p>
        {/* Drop points card */}
         <div className=" flex flex-col bg-blue-900/30 w-full h-full px-5 py-4 gap-3 rounded-2xl">
          {/* First half of the card */}
          <LogoWithTextAndButton LogoImage={LogoMPT} firstText="Drop Points price:" secondText="0.01 TON" Button={
            <Link href="/buy">
              <button className="bg-gray-500 rounded-2xl text-md text-white px-6 py-3">Buy</button>
            </Link>
            } />
          {/* Border separator */}
          <div className="w-full border-b-2 border-gray-500"></div>
          {/* Second half of the card */}
          <p className=" w-full text-sm text-gray-300">🔥 148.32K members & 223.42 purchased</p>
        </div>
        <ButtonFullWidth text="Get drop points!" bgColor="bg-blue-400" textColor="white" textSize="lg" />
      </div>

      {/* Horizotal Scroll */}
      <HorizontalScroll>
        {HORIZONTAL_SCROLL_PARAMS.map((param, id) => (
          <ParameterButton key={id} text={param} isActive={id === activeParamID} id={id} setActiveParamID={setActiveParamID}/>
        ))}
      </HorizontalScroll>

      {/* Users cards */}
      <div className=" flex flex-col rounded-2xl gap-3">
        {activeParamID == 0 && allUsers?.slice(0, 3).map((userData, id) => (
          <div key={id} className=" flex border-1 border-gray-600 px-5 py-3 rounded-2xl">
            <LogoWithTextAndButton LogoImage={LogoMPT} firstText={userData.Username} secondText={`${userData.TON} TON`} Button={<p className="text-gray-400 text-sm">#${id + 1}</p>} />
          </div>
        ))}

        {/* See more button */}
        {activeParamID == 0 && allUsers?.length && allUsers.length > 3 && (
          <LinkButton href="/holders-leadersboard" text="See more..." />
        )}
      </div>
    </div>
  );
}
