import { transfers } from "../../route"
import { Transfer } from "../../route"
import { NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: Promise<{ userID: string }> }
) {
    const { userID } = await params
    const id = parseInt(userID)
    const usersTransfers: Transfer[] = transfers.filter(transfer => transfer.SenderID === id)
    
    return NextResponse.json({ success: true, data: usersTransfers })
}