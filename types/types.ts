type User = {
    ID: number,
    Username: string,
    Rank: number,
    Points: number,
    TON: number,
    Transactions: number
    Yield: number,
}

type Transfer = {
    ID: number,
    SenderID: number,
    ReceiverID: number,
    Amount: number,
    Currency: string,
}