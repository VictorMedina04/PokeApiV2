export interface MoveResponse {
  id: number
  item: Item
  move: Move
  version_group: VersionGroup
}

export interface Item {
  name: string
  url: string
}

export interface Move {
  name: string
  url: string
}

export interface VersionGroup {
  name: string
  url: string
}
