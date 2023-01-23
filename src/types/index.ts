export interface BaseEntity {
  id: string
}

export interface IRes<T = any> {
  code: number
  message: string
  data: T
}
