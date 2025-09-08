import { NextResponse } from "next/server"
import { users } from "../route"

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id: idString } = await params
    const id = parseInt(idString)
    const user = users.find(user => user.ID === id)
    return NextResponse.json({ success: true, data: user })
}