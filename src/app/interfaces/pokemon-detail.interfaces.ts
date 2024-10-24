export interface PokemonDetailsResponse {
    abilities: Ability[]
    height: number
    id: number
    name: string
    order: number
    species: Species
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
  }
  
  
  export interface Ability {
    ability: Ability2
    is_hidden: boolean
    slot: number
  }
  
  
  export interface Ability2 {
    name: string
    url: string
  }
  
  
  export interface Species {
    name: string
    url: string
  }
  
  
  export interface Sprites {
    front_default: string
  }
  
  
  export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
  }
  
  
  export interface Stat2 {
    name: string
    url: string
  }
  
  
  export interface Type {
    slot: number
    type: Type2
  }
  
  
  export interface Type2 {
    name: string
    url: string
  }
  