"use client"

import { useEffect, useState } from "react";
import { User } from "../api/users/route";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null)

  // API call
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/users/1")
      const data = await response.json()
      setUser(data.data)
    }

    fetchUser()
  }, [])

  return (
    <div className="flex flex-col px-10 py-5 bg-[#181818] w-full h-full gap-5">
      <h1 className="text-white text-2xl font-bold text-center">Profile</h1>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-700/50 rounded-xl p-6 text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <h2 className="text-white text-xl font-bold">{user?.Username}</h2>
          <p className="text-gray-400">Rank #{user?.Rank}</p>
        </div>
        
        <div className="bg-gray-700/50 rounded-xl p-4">
          <h3 className="text-white font-bold mb-3">Statistics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Total TON</span>
              <span className="text-white">{user?.TON}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Transactions</span>
              <span className="text-white">{user?.Transactions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Yield</span>
              <span className="text-green-400">{user?.Yield}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
