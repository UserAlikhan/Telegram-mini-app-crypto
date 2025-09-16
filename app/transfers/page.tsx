"use client"

import { useEffect, useState } from "react";
import { Transfer } from "../api/transfers/route";

export default function Transfers() {

  const [transfers, setTransfers] = useState<Transfer[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // API call
  useEffect(() => {
    const fetchTransfers = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/transfers")
        const data: { data: Transfer[] } = await response.json()
        setTransfers(data.data)
      } catch (error) {
        console.error('Error fetching transfers:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTransfers()
  }, [])
  
  return (
    <div className="flex flex-col px-10 py-5 bg-[#2F2F33] w-full h-full gap-5">
      <h1 className="text-white text-2xl font-bold text-center">Latest Transfers</h1>
      <div className="flex flex-col gap-3">
        {/* Skeleton Screen */}
        {isLoading ? [...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between min-h-[80px] items-center p-4 bg-gray-700/50 rounded-xl animate-pulse"
          >
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-600 rounded"></div>
              <div className="h-3 w-20 bg-gray-600 rounded"></div>
            </div>
            <div className="h-4 w-24 bg-gray-600 rounded"></div>
          </div>
        ))
        // Read data
        : (
          !isLoading && transfers.map((transfer, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-gray-700/50 rounded-xl">
              <div>
                <p className="text-white font-medium">Transfer #{index + 1}</p>
                <p className="text-gray-400 text-sm">{new Date().toLocaleTimeString()}</p>
              </div>
              <p className="text-green-400 font-bold">+${transfer.Amount} ${transfer.Currency}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
