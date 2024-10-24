export interface ItemListResponse {
    count: number
    next: string
    previous: any
    results: Item[]
}

export interface Item {
    name: string
    url: string
}