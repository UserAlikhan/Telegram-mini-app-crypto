import { NextResponse } from "next/server";

type User = {
    ID: number,
    Username: string,
    Rank: number,
    Points: number,
    TON: number,
    Transactions: number
    Yield: number,
}

const users: User[] = [
    {
        ID: 1,
        Username: "John Doe",
        Rank: 1,
        Points: 1332,
        TON: 3223,
        Transactions: 1203,
        Yield: 32023.12,
    },
    {
        ID: 2,
        Username: "Jane Doe",
        Rank: 2,
        Points: 3324,
        TON: 90,
        Transactions: 90,
        Yield: 112.31,
    },
    {
        ID: 3,
        Username: "Jim Doe",
        Rank: 3,
        Points: 80,
        TON: 2323,
        Transactions: 3211,
        Yield: 4221.112,
    },
    {
        ID: 4,
        Username: "Jill Doe",
        Rank: 4,
        Points: 70,
        TON: 3222,
        Transactions: 321,
        Yield: 321.12,
    },
    {
        ID: 5,
        Username: "Jack Doe",
        Rank: 5,
        Points: 5532,
        TON: 7789,
        Transactions: 6789,
        Yield: 442,
    }
]

export async function GET() {
    return NextResponse.json({data: users})
}

export async function POST(request: Request) {
    const body = await request.json()
    const { username, rank, points, ton, transactions, yieldValue } = body
    const newUser: User = {
        ID: users.length + 1,
        Username: username,
        Rank: rank,
        Points: points,
        TON: ton,
        Transactions: transactions,
        Yield: yieldValue
    }

    users.push(newUser)

    return NextResponse.json({data: newUser})
} 

export { users }
export type { User }