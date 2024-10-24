export interface MovesListResponse {
    count: number
    next: string
    previous: any
    results: Moves[]
  }
  
  export interface Moves {
    url: string
  }