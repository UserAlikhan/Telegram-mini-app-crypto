"use client"

import LogoFirst from "@/assets/Logo1.png";
import LogoSecond from "@/assets/Logo2.png";
import LogoThird from "@/assets/Logo3.png";
import ButtonFullWidth from "@/components/ui/ButtonFullWidth";
import ButtonWithTextInTheBorder from "@/components/ui/ButtonWithTextInTheBorder";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import LogoWithTextAndButton from "@/components/ui/LogoWithTextAndButton";
import ParameterButton from "@/components/ui/ParameterButton";
import ProgressBar from "@/components/ui/ProgressBar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { User } from "./api/users/route";
import { HORIZONTAL_SCROLL_PARAMS, TEXT_CONTENT } from "@/constants/main";
import floatFormat from "@/utils/FloatFormat";

export default function Home() {

  const [activeParamID, setActiveParamID] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  
  const [user, setUser] = useState<User | null>(null)
  const [loadingUser, setLoadingUser] = useState(false)
  
  const [allUsers, setAllUsers] = useState<User[] | null>(null)
  const [loadingAllUsers, setLoadingAllUsers] = useState(false)

  const usersContainerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(88)

  const gap3InPx = 12

  // API calls
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoadingUser(true)
        const response = await fetch(`/api/users/1`)
        const data: { data: User } = await response.json()
        setUser(data.data)
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoadingUser(false)
      }
    }

    const fetchAllUsers = async () => {
      try {
        setLoadingAllUsers(true)
      const response = await fetch(`/api/users`)
        const data: { data: User[] } = await response.json()
        setAllUsers(data.data)
      } catch (error) {
        console.error('Error fetching all users:', error)
      } finally {
        setLoadingAllUsers(false)
      }
    }

    fetchUser()
    fetchAllUsers()
  }, [])

  return (
    <div className="flex flex-col px-10 px-xs-5 pt-5 pb-1 bg-[#2F2F33] w-full h-full gap-5">
      {/* Skeleton Screen */}
      {loadingUser ? (
        <div className="flex items-center gap-4 animate-pulse">
          <div className="h-12 w-12 rounded-full bg-gray-600"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 bg-gray-600 rounded"></div>
            <div className="h-3 w-20 bg-gray-600 rounded"></div>
          </div>
          <div className="ml-auto h-8 w-20 bg-gray-600 rounded"></div>
        </div>
      ) : (
        !loadingUser && (
          <LogoWithTextAndButton 
            LogoImage={LogoFirst} width={45} height={45} 
            TextSection={
              <div className="flex flex-col justify-center items-start">
                <p className="text-white text-[16px] text-xs-14 font-normal">{user?.Username || ""}</p>
                <p className="text-[#636363] text-[12px] text-xs-10 font-normal">Your rank #{user?.Rank || ""}</p>
              </div>
            }
            Button={<ButtonWithTextInTheBorder text={String(floatFormat(user?.Points || 0)) } textInTheBorder="Points"/>} 
          />
        )
      )}
      
      {/* Text area */}
      <div className="flex flex-col w-full h-max gap-2">
        <p className="text-[#AAB8C2] text-[16px] text-xs-14">
          {isExpanded ? TEXT_CONTENT.FULL : TEXT_CONTENT.SHORT}
        </p>
        <ButtonFullWidth text={isExpanded ? "Read Less" : "Read More"} bgColor="bg-[#494949]" textColor="text-white" textSize="text-[14px] text-xs-12" onClick={() => setIsExpanded(!isExpanded)} />
      </div>

      {/* Info card, Skeleton Screen */}
      {loadingUser ? (
        <div className="flex flex-col gap-3 p-4 rounded-2xl bg-gray-700/40 animate-pulse">
          <div className="h-3 w-40 bg-gray-600 rounded"></div>
          <div className="h-5 w-full bg-gray-600 rounded"></div>
          <div className="h-3 w-32 bg-gray-600 rounded"></div>
          <div className="h-20 w-full bg-gray-600 rounded"></div>
          <div className="h-8 w-40 bg-gray-600 rounded"></div>
        </div>
      ) : (
        // Read data
        !loadingUser && (
          <div className="flex flex-col gap-3 w-full h-full pt-5 pb-3 px-4 border-1 border-gray-600 border-rounded-2xl rounded-2xl">
            <p className="text-gray-400 text-[12px] font-normal ">💎 Total funds raised ${user?.TON || ""} TON</p>
            {/* Loading bar based  on percentage */}
            <ProgressBar
              percentage={52.3}
              height="h-[20px]"
              backgroundColor="bg-gray-700"
              fillColor="bg-[#1D9BF0]"
              className="w-full"
            />
            <p className="text-gray-400 text-[10px] font-normal">First round goal 1,000.00 TON</p>
            {/* Drop points card */}
            <div className=" flex flex-col bg-[#253341] w-full h-full p-3 gap-3 rounded-xl">
              {/* First half of the card */}
              <LogoWithTextAndButton 
                LogoImage={LogoSecond} width={38} height={38} 
                TextSection={
                  <div className="flex flex-col justify-between items-start gap-1">
                    <p className="text-[#636363] text-[12px] text-xs-10 font-normal">Drop Points price:</p>
                    <p className="text-white text-[16px] text-xs-14 font-normal">0.01 TON</p>
                  </div>
                } 
                Button={
                  <Link href="/buy">
                    <button className="bg-gray-600 rounded-xl text-[14px] font-bold text-white h-fit px-5 py-2">
                      <p className=" text-[14px] text-xs-12 font-bold">Buy</p>
                    </button>
                  </Link>
                } 
              />

              {/* Border separator */}
              <div className="w-full border-b-1 border-gray-600"></div>
              {/* Second half of the card */}
              <p className=" w-full text-[10px] text-[#F5F8FA]">🔥 148.32K members & 223.42 purchased</p>
            </div>
            <ButtonFullWidth text="Get drop points!" bgColor="bg-[#1D9BF0]" textColor="color-[#FFFFFF]" textSize="text-[14px] text-xs-12" />
          </div>
        )
      )}
      
      <div className=" flex flex-col gap-3">
        {/* Horizotal Scroll */}
        <HorizontalScroll>
          {HORIZONTAL_SCROLL_PARAMS.map((param, id) => (
            <ParameterButton key={id} text={param} isActive={id === activeParamID} id={id} setActiveParamID={setActiveParamID}/>
          ))}
        </HorizontalScroll>

        {/* Users cards */}
        {loadingAllUsers ? (
          <div className="flex flex-col gap-3">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex border border-gray-600 px-5 py-3 rounded-2xl mb-3 last:mb-0 animate-pulse"
              >
                {/* Logo skeleton */}
                <div className="w-[60px] h-[60px] bg-gray-700 rounded-xl mr-4" />
        
                {/* Text skeleton */}
                <div className="flex flex-col justify-center flex-1 gap-2">
                  <div className="h-4 bg-gray-700 rounded w-32" />
                  <div className="h-4 bg-gray-700 rounded w-20" />
                </div>
        
                {/* Button skeleton */}
                <div className="w-10 h-4 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        ) : (
          !loadingAllUsers && (
            <div style={{height: containerHeight * 2}} className="flex flex-col rounded-2xl gap-3">
              {activeParamID == 0 && (
                <div style={{height: containerHeight * 2}} className="overflow-y-auto scrollbar-hide">
                  {allUsers?.map((userData, index) => (
                    <div 
                      key={index} ref={usersContainerRef}
                      onLoad={() => setContainerHeight(usersContainerRef.current?.offsetHeight! + gap3InPx)} 
                      className="flex border-1 border-gray-600 px-5 py-3 rounded-2xl mb-3 last:mb-0"
                    >
                      <LogoWithTextAndButton
                        LogoImage={LogoThird} width={60} height={60} 
                        TextSection={
                          <div className="flex flex-col justify-center">
                            <p className="text-[#F5F8FA] text-[16px] text-xs-14 font-normal">{userData.Username}</p>
                            <p className="text-[#636363] text-[16px] text-xs-14 font-normal">{`${userData.TON} TON`}</p>
                          </div>
                        }
                        Button={<p className="text-[#636363] text-[16px] text-xs-14 font-normal">#{index + 1}</p>} 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
