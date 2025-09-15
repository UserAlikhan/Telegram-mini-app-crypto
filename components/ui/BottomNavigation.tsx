"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabItem {
  id: string;
  icon: React.ReactNode;
  href: string;
}

const tabs: TabItem[] = [
  { id: "home", icon: 
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 5.5C18.4706 5.5 22.5 8.85786 22.5 13C22.5 15.0586 21.5047 16.9235 19.8933 18.2787C19.6517 18.4819 19.5 18.7762 19.5 19.0919V21.5H17.5L16.7062 20.3674C16.583 20.1916 16.3616 20.1153 16.1537 20.1687C14.4248 20.6132 12.5752 20.6132 10.8463 20.1687C10.6384 20.1153 10.417 20.1916 10.2938 20.3674L9.5 21.5H7.5V19.1154C7.5 18.7866 7.33835 18.4788 7.06764 18.2922C5.99285 17.5511 2.5 16.1014 2.5 14.5582V13C2.5 12.4083 2.94771 11.9286 3.5 11.9286C4.10665 11.9286 4.60188 11.6929 4.80205 11.0661C5.82552 7.86121 9.33187 5.5 13.5 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M15 8.5C14.368 8.17502 13.6963 8 13 8C12.3037 8 11.632 8.17502 11 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99976 11.5H8.00874" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.5 9C22 8.5 22.5 7.56296 22.5 6.33053C22.5 4.76727 21.1569 3.5 19.5 3.5C19.1494 3.5 18.8128 3.55676 18.5 3.66106" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>, href: "/" 
  },
  { id: "leadersboard", icon: 
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.14286 14.5C4.41735 13.3082 4 11.9118 4 10.4189C4 6.04539 7.58172 2.5 12 2.5C16.4183 2.5 20 6.04539 20 10.4189C20 11.9118 19.5827 13.3082 18.8571 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.38287 17.5982C7.291 17.3216 7.24507 17.1833 7.25042 17.0713C7.26174 16.8343 7.41114 16.6262 7.63157 16.5405C7.73579 16.5 7.88105 16.5 8.17157 16.5H15.8284C16.119 16.5 16.2642 16.5 16.3684 16.5405C16.5889 16.6262 16.7383 16.8343 16.7496 17.0713C16.7549 17.1833 16.709 17.3216 16.6171 17.5982C16.4473 18.1094 16.3624 18.3651 16.2315 18.572C15.9572 19.0056 15.5272 19.3167 15.0306 19.4408C14.7935 19.5 14.525 19.5 13.9881 19.5H10.0119C9.47495 19.5 9.2065 19.5 8.96944 19.4408C8.47283 19.3167 8.04281 19.0056 7.7685 18.572C7.63755 18.3651 7.55266 18.1094 7.38287 17.5982Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 19.5L14.8707 20.1466C14.7293 20.8537 14.6586 21.2072 14.5001 21.4866C14.2552 21.9185 13.8582 22.2439 13.3866 22.3994C13.0816 22.5 12.7211 22.5 12 22.5C11.2789 22.5 10.9184 22.5 10.6134 22.3994C10.1418 22.2439 9.74484 21.9185 9.49987 21.4866C9.34144 21.2072 9.27073 20.8537 9.12932 20.1466L9 19.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 16.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>, href: "/holders-leadersboard" 
  },
  { id: "transfers", icon: 
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 18.5C18.9183 18.5 22.5 14.9183 22.5 10.5C22.5 6.08172 18.9183 2.5 14.5 2.5C10.0817 2.5 6.5 6.08172 6.5 10.5C6.5 14.9183 10.0817 18.5 14.5 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.6669 21.4689C12.563 22.1239 11.2742 22.5 9.8975 22.5C5.81197 22.5 2.5 19.188 2.5 15.1025C2.5 13.7258 2.87607 12.437 3.53107 11.3331" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>, href: "/transfers" 
  },
  { id: "buy", icon: 
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8C12 9.933 10.433 11.5 8.5 11.5C6.567 11.5 5 9.933 5 8C5 6.067 6.567 4.5 8.5 4.5C10.433 4.5 12 6.067 12 8Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.5 11.5C15.433 11.5 17 9.933 17 8C17 6.067 15.433 4.5 13.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.1429 20.5H3.85714C2.83147 20.5 2 19.7325 2 18.7857C2 16.4188 4.07868 14.5 6.64286 14.5H10.3571C11.4023 14.5 12.3669 14.8188 13.1429 15.3568" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 14.5V20.5M22 17.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>, href: "/buy" 
  },
  { id: "profile", icon: 
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 5.5H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 12.5H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 19.5H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>, href: "/profile" 
  },
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
