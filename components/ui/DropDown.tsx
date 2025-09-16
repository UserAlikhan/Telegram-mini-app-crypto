"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface DropDownProps {
    options: string[]
    selectedOption: string
    onOptionSelect: (option: string) => void
    placeholder?: string
    className?: string
}

export default function DropDown({ 
    options, 
    selectedOption, 
    onOptionSelect, 
    placeholder = "Select option",
    className = ""
}: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleOptionClick = (option: string) => {
        onOptionSelect(option)
        setIsOpen(false)
    }

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center gap-2 bg-[#15202B] w-full min-w-[100px] rounded-2xl py-5 px-4 text-white text-center border-none outline-none"
            >
                <span className="text-[#AAB8C2] text-[16px] text-xs-14 font-normal">
                    {selectedOption || placeholder}
                </span>
                <ChevronDown 
                    width={20} 
                    height={20} 
                    className={`text-gray-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    strokeWidth={2}
                />
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#15202B] rounded-2xl border border-gray-600 shadow-lg z-50 max-h-48 overflow-y-auto scrollbar-hide">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className={`w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-600 transition-colors first:rounded-t-2xl last:rounded-b-2xl ${
                                selectedOption === option ? 'bg-gray-600' : ''
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}