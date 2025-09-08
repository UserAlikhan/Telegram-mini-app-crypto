import { NextResponse } from "next/server"

type Transfer = {
    ID: number,
    SenderID: number,
    ReceiverID: number,
    Amount: number,
    Currency: string,
}

const transfers: Transfer[] = [
    {
        ID: 1,
        SenderID: 1,
        ReceiverID: 2,
        Amount: 300,
        Currency: "TON",
    },
    {
        ID: 2,
        SenderID: 2,
        ReceiverID: 1,
        Amount: 200,
        Currency: "TON",
    },
    {
        ID: 3,
        SenderID: 1,
        ReceiverID: 3,
        Amount: 100,
        Currency: "TON",
    },
    {
        ID: 4,
        SenderID: 2,
        ReceiverID: 3,
        Amount: 130,
        Currency: "TON",
    },
    {
        ID: 5,
        SenderID: 3,
        ReceiverID: 1,
        Amount: 100,
        Currency: "TON",
    },
    {
        ID: 6,
        SenderID: 3,
        ReceiverID: 2,
        Amount: 443,
        Currency: "TON",
    },
    {
        ID: 7,
        SenderID: 1,
        ReceiverID: 4,
        Amount: 343,
        Currency: "TON",
    },
]   

export async function GET() {
    return NextResponse.json({ success: true, data: transfers })
}

export async function POST(request: Request) {
    const body = await request.json()
    const { SenderID, ReceiverID, Amount, Currency } = body
    const newTransfer: Transfer = {
        ID: transfers.length + 1,
        SenderID: SenderID,
        ReceiverID: ReceiverID,
        Amount: Amount,
        Currency: Currency,
    }
    transfers.push(newTransfer)
    return NextResponse.json({ success: true, data: newTransfer })
}

export type { Transfer }
export { transfers }