import LogoWithTextAndButton from "@/components/ui/LogoWithTextAndButton"
import LogoMPT from "@/assets/Logo-MPT.png"

export default function HoldersLeadersboard() {
    // GET request to get the users
    const users = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8", "User9", "User10"]
    const ton = ["10 TON", "20 TON", "30 TON", "40 TON", "50 TON", "60 TON", "70 TON", "80 TON", "90 TON", "100 TON"]

    return (
        <div className="flex flex-col gap-3 py-7 px-10">
            <h1 className="text-white text-2xl font-bold text-center">Holders leadersboard</h1>
            {users.map((user, index) => (
                <div key={index} className="flex border-1 border-gray-600 px-4 py-3 rounded-2xl">
                    <LogoWithTextAndButton LogoImage={LogoMPT} firstText={user} secondText={ton[index]} Button={<p className="text-gray-400 text-sm">#{index + 1}</p>} />
                </div>
            ))}
        </div>
    )
}