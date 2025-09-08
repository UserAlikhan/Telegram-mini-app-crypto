"use client"

import { ArrowRightLeft, Circle, Lamp, PiggyBankIcon, UserPen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabItem {
  id: string;
  icon: React.ReactNode;
  href: string;
}

const tabs: TabItem[] = [
  { id: "home", icon: <PiggyBankIcon />, href: "/" },
  { id: "leadersboard", icon: <Lamp/>, href: "/holders-leadersboard" },
  { id: "transfers", icon: <Circle/>, href: "/transfers" },
  { id: "buy", icon: <ArrowRightLeft/>, href: "/buy" },
  { id: "profile", icon: <UserPen/>, href: "/profile" },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-700 px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive 
                  ?  "text-white" 
                  : "text-gray-400"
              }`}
            >
              <span className="text-xl mb-1">{tab.icon}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
