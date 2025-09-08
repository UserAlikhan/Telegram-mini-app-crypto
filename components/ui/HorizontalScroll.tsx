export default function HorizontalScroll({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-2 min-w-max">
                {children}
            </div>
        </div>
    )
}